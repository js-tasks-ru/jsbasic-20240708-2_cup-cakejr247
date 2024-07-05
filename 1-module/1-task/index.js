function factorial(n) {
  let result = 1;
  
  for (let i = 0; i < n; i++) {
    result = (result * (n - i));
  }
  
  return result;
}




// Рекурсия

// function factorial(n) {
//   if (n === 1) return 1;
//   else {
//     return n * factorial((n-1));
//   }

// }



