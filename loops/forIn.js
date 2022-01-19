const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  text += person[x];
}console.log(text);//loops over property of object


//forin loops over property of array also
{const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x] + "\n";
}console.log(txt);}
//for correct index use forEach function
{const numbers = [45, 4, 9, 16, 25];
let txt = "";
 numbers.forEach(myFunction);
function myFunction(value, index, array) {
  txt += value + "\n";}
  console.log(txt);
}