
let x = 0;
console.log(Boolean(x));

{let x = -0;
    console.log(Boolean(x));
}

{let x = {};
console.log(`emptyarray (${Boolean(x)})`);}


{let x;
console.log(Boolean(x))};


{let x = null;
console.log(Boolean(x))};


{let x = false;
console.log(Boolean(x))};


{let x = 10 / "Hallo";
console.log(Boolean(x))};
