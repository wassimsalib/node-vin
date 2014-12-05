var needle = require('needle');
var cheerio = require('cheerio');

exports.lookup = function(vin, callback) {
  var options = {
        compressed         : true,
        follow             : true
    }
    
  needle.get('http://www.decodethis.com/VIN-Decoded/vin/' + vin, options, function(error, response, body) {
     if (error)
            return callback(error, vehicle);
            
    var $ = cheerio.load(body);
    var vehicle = {};

    $('#carwrapper .cardata td.vtitle').each(function() {
      var $el = $(this);
      var key = $el.html().toCamelCase();
      var value = $el.next().text().trim();

      vehicle[key] = value;
    });

    vehicle.vin = vin;
    delete vehicle.vehicleAccidentsService;

    return callback(null, vehicle);
  });
};

String.prototype.toCamelCase = function(){
  return this.toLowerCase().replace(/[^\w\s]/gi, ' ').replace(/ \w/g, function(match) {
    return match[1].toUpperCase();
  });
};
