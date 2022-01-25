
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,}
  person.fullName = function() {
      return this.firstName + " " + this.lastName;
    
}//ask cant call object method in object
  
  // Display data from the object:
  console.log(person.fullName());
  console.log(person.fullName);
  //access without()prints full return statment//
