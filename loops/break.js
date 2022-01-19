let text = ""
for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "The number is " + i + "\n";
  }console.log(text);


  {let text = ""
for (let i = 0; i < 10; i++) {
    if (i === 3) { continue; }//skip the 3 line
    text += "The number is " + i + "\n";
  }console.log(text);}
