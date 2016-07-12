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
var number = 3500;
console.log(number.toLocaleString()); // Displays "3,500" if in U.S. English locale
var number = 123456.789;
// request a currency format
console.log(number.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }));
// → 123.456,79 €*/
module.exports = function(num){
  return num.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};
