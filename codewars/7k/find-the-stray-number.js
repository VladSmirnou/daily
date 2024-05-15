// ------------------------------ Description ------------------------------
// You are given an odd-length array of integers, in which all of them are
// the same, except for one single number.
// Complete the method which accepts such an array, and returns that
// single different number.
// The input array will always be valid! (odd-length >= 3)
// ------------------------------ Solution ------------------------------
function stray(numbers) {
    if (numbers[0] === numbers[1]) {
      for (var comp = numbers[0], i = 2; comp === numbers[i]; i++);
      return numbers[i];
    }
    if (numbers[0] === numbers[2]) return numbers[1];
    return numbers[0];
}