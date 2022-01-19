const numbers = [45, 4, 9, 16, 25];
let numbers1 = numbers.every(myFunction);

function myFunction(value) {
  return value > 18;
}console.log(numbers1);