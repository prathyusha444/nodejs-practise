
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  }
  delete person.age;
  person.nationality = "English";
  console.log(person);
  
module.exports = person;