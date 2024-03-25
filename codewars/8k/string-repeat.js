// ------------------------------ Description ------------------------------
// Write a function that accepts an integer n and a string s as parameters, and
// returns a string of s repeated exactly n times.
// ------------------------------ Solution ------------------------------
function repeatStr (n, s) {
    const strings = [];
    for (; n != 0; n--) {
      strings.push(s);
    }
    return strings.join('');
}