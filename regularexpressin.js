let text = "Please visit Microsoft!";
console.log(newText = text.replace(/MICROSOFT/i, "W3Schools"));
//replace is case sensitive to accept capital letters we use 'RE'=> /i//

{let text = "Please visit Microsoft and Microsoft!";
console.log(newText = text.replace(/Microsoft/g, "W3Schools"));}
// '/g' used for global// 