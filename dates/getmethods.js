const d = new Date();
const d1=d.getTime();
console.log(d1);

{const d = new Date();
   let d1= d.getFullYear();
   console.log(d1);
}
{const d = new Date();
   let d1= d.getMonth();
   console.log(d1);
}

{const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const d = new Date();
let month = months[d.getMonth()];
console.log(month);}

{const d = new Date();
   let d1= d.getDate();
console.log(d1);}

{const d = new Date();
  let d1 =  d.getHours();
console.log(d1);}

{const d = new Date();
   let d1= d.getMinutes();
console.log(d1);}

{const d = new Date();
   let d1= d.getSeconds();
console.log(d1);}

{const d = new Date();
  let d1 = d.getMilliseconds();
console.log(d1);}

{const d = new Date();
   let d1 = d.getDay();
console.log(d1); }

{const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();
let day = days[d.getDay()];
console.log(day);}

//we can get "utc" date method by "getUTCDate"//
    
