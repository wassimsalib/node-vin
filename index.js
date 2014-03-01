var vin = require('./lib/vin');

vin.lookup('1HD1CGP12WK116444', function(vehicle) {
  console.log(vehicle);
});
