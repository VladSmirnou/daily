// ------------------------------ Description ------------------------------
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9.
// ------------------------------ Solution ------------------------------
function squareSum(numbers){
    return numbers.reduce((acc, newVal) => acc + newVal**2, 0);
}