const name = "W3Schools";
// List all Elements
let text = ""
for (const x of name) {//iterate over string
  text += x + "\n";
  console.log(text);
}

{
    const letters = ["a","b","c"];
// List all Elements
let text = ""
for (const x of letters) {//iterate over array
  text += x + "\n";
  console.log(text);
}}

{const letters = new Set(["a","b","c"]);
let text = ""
for (const x of letters) {//iterate over set of array
  text += x + "\n";
  console.log(text);}}


 { const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  let text = "";
  for (const x of fruits) {
    text +="\n"+ x + "\n";
    console.log(text);
  }}