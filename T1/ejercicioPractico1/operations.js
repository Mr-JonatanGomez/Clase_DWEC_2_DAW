function suma(a, b) {
  return a + b
}
function resta(a, b) {
  return a - b
}
function multiplicacion(a, b) {
  return a * b
}
function division(a, b) {
  return a / b
}
/* Export functions, para que esten a disposicion del resto de funciones*/

module.exports = {
  suma,
  resta,
  multiplicacion,
  division
}
