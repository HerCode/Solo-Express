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
// Returns a random number between min (inclusive) and max (exclusive)
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
*/
module.exports = function getRandomNum(min, max) {
  return Math.round(Math.random() * (max - min) + min);
};
