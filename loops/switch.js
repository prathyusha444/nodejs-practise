let day;
console.log(new Date().getDay());
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  console.log("today is" +day);

 {let text;
  switch (new Date().getDay()) {
    case 1:
      text = "Today is monday";
      break;
    case 2:
      text = "Today is tuesday";
      break;
    default:
      text = "Looking forward to the Weekend";
  }console.log("today is" +text);}