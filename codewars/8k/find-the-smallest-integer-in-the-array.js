// ------------------------------ Description ------------------------------
// Given an array of integers your solution should find the smallest integer.
// You can assume, for the purpose of this kata, that the
// supplied array will not be empty.
// ------------------------------ Solution ------------------------------
class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args);
    }
}