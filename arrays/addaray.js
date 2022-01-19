const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");
console.log(fruits);  
{const fruits = ["Banana", "Orange", "Apple"];
fruits[fruits.length] = "Lemon"; }//by using length property//
{const fruits = ["Banana", "Orange", "Apple"];
fruits[6] = "Lemon";//adding elements with higher index create holes//
console.log(fruits[2]);}