const removeFromArray = function(array) {
    // need a fresh array to hold values to keep

    for (let i=0; i<arguments.length; i++) {
        for (let j=0; j<array.length; j++) {
            if (arguments[i] === array[j]){
                array.splice(j, 1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

/**
 * The smart, JavaScript way of doing it:
 * 
 * const removeFromArray = function (array, ...args) {
 *     const newArray = [];  // make a new array
 * 
 *     array.forEach((arrElement) => {      // iterate through old array
 *         if (!args.includes(arrElement)) {    // if args doesn't include something
 *             newArray.push(arrElement);       // put that in the new array
 *         }
 *     });
 *     return newArray;
 * }
 */