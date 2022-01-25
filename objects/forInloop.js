const person = {
    fname:"John",
    lname:"Doe",
    age:25
  }; 
  
  let txt = "";
  for (let x in person) {
    txt += person[x] + " ";}
console.log(txt);
  {const person = {
    fname:"John",
    lname:"Doe",
    age:25
  }
   for (let x in person) { console.log(`x value is : ${x}`);
  console.log(`person[x] is  : ${person[x]}`);
  }}