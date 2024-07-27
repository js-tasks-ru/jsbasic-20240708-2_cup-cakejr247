function getMinMax(str) {
 
  const regex = /-?\d+(\.\d+)?/g;

  let numbersOnly = str.match(regex).map(Number)

  let maxNumber = Math.max(...numbersOnly);
  let minNumber = Math.min(...numbersOnly);
  
  let result = {min: minNumber, max: maxNumber};
  
  return result;
}

