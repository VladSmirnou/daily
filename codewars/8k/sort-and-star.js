// ------------------------------ Description ------------------------------
// You will be given a list of strings. You must sort it alphabetically
// (case-sensitive, and based on the ASCII values of the chars) and then
// return the first value.
// The returned value must be a string, and have "***" between each of
// its letters.
// You should not remove or add elements from/to the array.
// ------------------------------ Solution ------------------------------
function twoSort(s) {
    return s.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      }
    )[0].split('').join('***');
}