const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
  }
  person.name = function() {
    return (this.firstName + " " + this.lastName).toUpperCase();
  }
  console.log( "My father is " + person.name()); 
  {const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,}
  
  person.name = function() {
    return (person.firstName + " " +person. lastName).toUpperCase();
  }
  console.log( "My father is " + person.name()); }