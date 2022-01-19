const numbers = [45, 4, 9, 16, 25];
let numbers1 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}console.log(numbers1);