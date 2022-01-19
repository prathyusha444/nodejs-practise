//iso date format//
const d = new Date("2022-01");
console.log(d);

{const d = new Date("2022");
console.log(d);}

{const d = new Date("2022-01-06T12:00:00Z");//T referto seperation of date and time
console.log(d);}//"z refer to ISO" timezone//
//if we want in UTC time zone remove z and add +HH:MM or -HH:MM instead


{const d = new Date("2022-01-06T12:00:00+06:30");
console.log(d);}//"UTC"
