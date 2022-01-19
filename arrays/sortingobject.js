
const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];
cars.sort(function(a, b){return a.year - b.year});
console.log(cars);
function displayCars() {

  cars[0].type + " " + cars[0].year + "\n"
  cars[1].type + " " + cars[1].year +"\n"
  cars[2].type + " " + cars[2].year;
}console.log(cars);