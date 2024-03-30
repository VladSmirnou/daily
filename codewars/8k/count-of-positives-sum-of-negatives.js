// ------------------------------ Description ------------------------------
// Given an array of integers.
// Return an array, where the first element is the count of positives
// numbers and the second element is sum of negative numbers. 0 is neither
// positive nor negative.
// If the input is an empty array or is null, return an empty array.
// ------------------------------ Solution ------------------------------
function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) {
      return [];
    }
    return input.reduce((acc, newVal) => {
      if (newVal > 0) {
        acc[0] += 1;
        return acc;
      } else {
        acc[1] += newVal;
        return acc;
      }
    }, [0, 0]);
}