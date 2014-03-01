# node-vin

Looks up a VIN from [Decode This](http://decodethis.com)

## Installation

    npm install vin

## Usage

```javascript
var vin = require('vin');  

vin.lookup('1HD1CGP12WK116444', function(vehicle) {
  console.log(vehicle);
});
```

## Methods

### lookup(vin, callback)

The only method for now that performs the lookup.

## License

MIT
