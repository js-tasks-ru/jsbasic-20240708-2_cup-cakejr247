let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
}

function sumSalary(salaries) {

  let sum = 0;
  
  for (value of Object.values(salaries)) {
    
    if (isNaN(value) || !isFinite(value)) {
      continue;
    }
    if (typeof value === 'number') {
      sum = sum + value;
    }
  }

  return sum;
  
}

console.log(sumSalary(salaries));
