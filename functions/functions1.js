// We use functions to reduce code redundancy

function evenOdd (num) { // function definition
    if (num%2 === 0) {
        return 'Number is Even'
    } else {
        return 'NUmber is odd'
    }
}

const result = evenOdd(22);
console.log(result);

