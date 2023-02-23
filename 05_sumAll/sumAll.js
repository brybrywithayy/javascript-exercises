const sumAll = function(num1, num2) {
    const regexNumTest = /^[0-9]+$/;
    
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    } else if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    } else {
        if (num1 < num2) {
            return summation(num1, num2);
        } else if (num1 > num2) {
            return summation(num2, num1);
        } else {
            console.log("Something weird happened");
        }
    }

    // need to add every number between and including these points
    // loop with end - 1 and dump each into an array?
    
};

function summation(num1, num2) {
    let sum = 0;
    for (num1; num1 <= num2; num1++) {
        sum += num1;
    }
    return sum;
}

// Do not edit below this line
module.exports = sumAll;
