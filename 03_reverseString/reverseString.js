const reverseString = function(originalStr) {
    let reversedStr = "";
    for (let i=originalStr.length - 1; i>=0; i--) {
        reversedStr += originalStr.charAt(i);
    }
    return reversedStr;

    /**
     *  The smart, JavaScript way to do this was:
     * 
     *  const reverseString = function(string) {
     *      return string.split("").reverse().join("");
     *  };
     */
};

// Do not edit below this line
module.exports = reverseString;
