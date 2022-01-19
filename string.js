 console.log( p = "It's alright");
console.log (q="He is called 'Johnny'");
console.log (r= 'He is called "Johnny"');


let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(length = text.length);


{
let text = "We are the so-called \"Vikings\" from the north.";
// here backslash used to not missunderstand quotes//
console.log(text);}

console.log( "Hello \
Dolly!");


let x = "John";
let y = new String("John");//here new defined as object//
console.log(x==y);//x==y means x=y//


{let x = "John";
let y = new String("John");
console.log(x===y);}//x===y means x notequal to y//


{let x = new String("John");
let y = new String("John");//2 objects cannot be compared//
console.log(x==y);}

{let x = new String("John");
let y = new String("John");//2 objects cannot be compared//
console.log(x===y);}