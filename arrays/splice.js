const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");//first parameter defines where new elements should added//
//second parameter describes how many elements to remove//
console.log(fruits);

{const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(1, 2, "Lemon", "Kiwi");
console.log(fruits);}

{const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);
console.log(fruits);}