myObj = {
    name:"John",
    age:30,
    cars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
  }
 console.log(myObj.cars.car2);
 //or
 console.log(myObj.cars["car1"]);
 //or
console.log(myObj["cars"]["car3"]);
//or
let p1 = "cars";
let p2 = "car2";
console.log(myObj[p1][p2]);