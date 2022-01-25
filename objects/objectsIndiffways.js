
const person = {
    fname:" John",
    lname:" Doe",
    age: 25
  }
  let  x =person;
console.log(person.fname + " is " + person.age + " years old.");
console.log(person["fname"] + " is " + person["age"] + " years old.");
console.log(person[x = "age" , person[x]]);