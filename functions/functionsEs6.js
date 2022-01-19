const evenOdd = (num) => {
    if (num%2 === 0) {
        return 'Number is Even'
    } else {
        return 'NUmber is odd'
    }
}

const result = evenOdd(22);
console.log(result);

const result2 = evenOdd(27);
const result3 = evenOdd(34);
console.log(result2, result3);