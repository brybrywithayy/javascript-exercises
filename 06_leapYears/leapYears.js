/**
 * What is a leap year?
 *     Divisible by 4
 *     NOT divisible by 100
 *     divisible by 400
 */

const leapYears = function(year) {
    
if ((year % 4 === 0) && (year % 100 != 0 || year % 400 === 0)) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
