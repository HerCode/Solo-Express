//Node.js
/* Basis for my code
module.exports = {
  sayHelloInEnglish: function() {
    return "HELLO";
  },
  sayHelloInSpanish: function() {
    return "Hola";
  }
};
Of course, as long as our module doesn't expose anything,
the above isn't very useful. To expose things we use
module.exports and export everything we want:
var x = 5;
var addX = function(value) {
  return value + x;
};
module.exports.x = x;
module.exports.addX = addX;
Now we can use our loaded module:
var misc = require('./misc');
console.log("Adding %d to 10 gives us %d", misc.x, misc.addX(10));
*/

var getRandomNum = require('./module1.js');

var convertCurrency = require('./module2.js');

var randomNum = getRandomNum(100, 1000000);

module.exports = {
    convert: convertCurrency(randomNum)
};
