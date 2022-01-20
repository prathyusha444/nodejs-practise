generatePyramid();
function generatePyramid() {
  var Rows = 5;
   for (i = Rows; i > 0; i--){ // define the outer loop  
  let str = " ";
     for (j = i; j > 0; j--) 
    str += j+" ";
     console.log(str);
  }}
  console.log("\n");
