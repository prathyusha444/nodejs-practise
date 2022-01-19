 // program to check if the string is palindrome or not

function checkPalindrome(str) {

    // convert string to an array
    const arrayValues = str.split('');

    // reverse the array values
    const reverseArrayValues = arrayValues.reverse();
     // convert array to string
  const reverseString = reverseArrayValues.join('');

  if(str === reverseString) 
    return "it is a palandrome";
   else 
     return "it is not a palandrome";
}
const x ="hello";
const result = checkPalindrome(x);
console.log(result);