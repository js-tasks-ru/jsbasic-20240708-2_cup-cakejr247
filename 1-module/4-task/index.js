
// Напишите функцию checkSpam(str), 
// возвращающую true, если str содержит 
// '1xBet' или 'XXX', а иначе false.

function checkSpam(str) {

  strToLowerCase = str.toLowerCase();

  if (strToLowerCase.includes("x")) {
    return true;
  }
  else {
    return false;
  }

}
