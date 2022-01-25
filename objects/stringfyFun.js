const person = {
  name: "John",
  age: function () {return 30;}
};
let myString = JSON.stringify(person);
console.log(myString);

//by using tostring//

{
const person = {
  name: "John",
  age: function () {return 30;}
}
person.age = person.age.toString();
console.log(person);
}//JSON.stringify will not stringify functions.//

//You have to convert functions to strings first://
//It is also possible to stringify JavaScript arrays://

{const arr = ["John", "Peter", "Sally", "Jane"];

let myString = JSON.stringify(arr);
console.log(myString);
}
{const arr = ["John", "Peter", "Sally", "Jane"];

let myString = arr.toString();
console.log(myString);
}