const numbers = [4, 9, 16, 25,25, 29];
let first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}console.log(first);