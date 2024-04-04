// ------------------------------ Description ------------------------------
// Create a function that accepts a string and a single character, and returns
// an integer of the count of occurrences the 2nd argument is found in the
// first one.
// If no occurrences can be found, a count of 0 should be returned.
// ------------------------------ Solution ------------------------------
function strCount(str, letter){  
    const elCount = {};
    for (const i of str) {
      if (elCount[i]) {
        elCount[i] += 1;
      } else {
        elCount[i] = 1;
      }
    }
    const res = elCount[letter];
    return res ? res : 0;
}