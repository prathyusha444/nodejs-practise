/*Nested Arrays and Objects
Values in objects can be arrays, and values in 
arrays can be objects:*/
const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }
  let x = " "
  for (let i in myObj.cars) {
    x += myObj.cars[i].name +" ";
    for (let j in myObj.cars[i].models) {
      x += myObj.cars[i].models[j]+"\n";
    }//how to write in bold
  }
  console.log(x);