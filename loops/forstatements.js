const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i, len, text;
for (i = 0, len = cars.length, text = ""; i < len; i++) {
  text += cars[i] + "\n";
}console.log(text);
/*in statement 1 we can initiate many values in js
as statement 1 is optional that means we can declare s1 before 
for loop*/


{const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i=0;
len = cars.length;
text = "";
for (; i<len;) {
  text += cars[i] + "\n";
  i++;
}console.log(text);}
/* we can omit third statement and declare outside the loop*/