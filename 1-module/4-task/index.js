
// Напишите функцию checkSpam(str), 
// возвращающую true, если str содержит 
// '1xBet' или 'XXX', а иначе false.

function checkSpam(str) {

  strToLowerCase = str.toLowerCase();

  return strToLowerCase.includes('1xbet') || strToLowerCase.includes('xxx');
  
}
