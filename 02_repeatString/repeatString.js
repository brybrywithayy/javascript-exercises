const repeatString = function(str, numRepeat) {
    let totalStr = "";

    if (numRepeat < 0) {
        totalStr = "ERROR";
    } else {
        for (let i=1; i<=numRepeat; i++) {
            totalStr += str;
        }
    }

    return totalStr;
};

// Do not edit below this line
module.exports = repeatString;
