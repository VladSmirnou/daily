// ------------------------------ Description ------------------------------
// Given an array of ones and zeroes, convert the equivalent binary
// value to an integer.
// ------------------------------ Solution ------------------------------
const binaryArrayToNumber = arr => {
    return parseInt(arr.join(''), 2);
};