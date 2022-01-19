const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);
//map method create new array by call every element in a array by given function//
function myFunction(value, index, array) {
  return Math.sqrt(value);
}
console.log(numbers2);