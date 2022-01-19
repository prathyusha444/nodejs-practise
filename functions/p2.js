function checkPalindrome(str)
 {
const reverseString = str.split('').reverse().join('');
if(str == reverseString) 
    console.log('It is a palindrome');
else 
    console.log('It is not a palindrome');
}

const str ='dad';
checkPalindrome(str);