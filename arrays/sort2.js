const points = [40, 100, 1, 5, 25, 10];
console.log(points.sort());
//here it takes first digit 4 in 40 and second as 1 in 100 "4 is more than 1"
//so it take 40 as bigger for that we take function and compare
//function(a,b)compare values by subtracting if answer negative,
//then a is sorted before b and viceversa
console.log(points);


{const points = [40, 100, 1, 5, 25, 10];
    points.sort(function(a, b){return b - a});
console.log(points);}//decending order