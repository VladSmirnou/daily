// ------------------------------ Description ------------------------------
// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.
// ------------------------------ Solution ------------------------------
// Sum Numbers
function findAverage(array) {
    const res = array.reduce((acc, newVal) => acc + newVal, 0) / array.length;
    return isNaN(res) ? 0 : res;
}