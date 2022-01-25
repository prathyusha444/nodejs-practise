/*Any JavaScript object can be stringified (converted to a string)
 with the JavaScript function JSON.stringify():*/
 const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  let myString = JSON.stringify(person);
  console.log(person);