let sum = 0;
for (let i = 2; i < process.argv.length; i++) {
    console.log(typeof process.argv[i]);
    sum += process.argv[i];
}

console.log(sum);

// {var mul = 1;
//     for (i = 2; i < process.argv.length; i++) {
//         mul *= Number(process.argv[i]);
//     }
    
//     console.log(mul);}