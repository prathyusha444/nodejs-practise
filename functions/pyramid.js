generatePyramid();
function generatePyramid() {
  var totalNumberofRows = 5;
  
 
  for (let i = 1; i <= totalNumberofRows; i++) {
    let str = '';
    
  for (let j = 1; j <= i; j++) {
    str += j;
    }
    console.log(str);
  }
}