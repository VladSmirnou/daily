// ------------------------------ Description ------------------------------
// Code as fast as you can! You need to double the integer and return it.
// ------------------------------ Solution ------------------------------
function findMultiples(integer, limit) {
    const newArr = [];
    const initInteger = integer;
    for (;integer <= limit;) {
      newArr.push(integer);
      integer += initInteger;
    }
    return newArr;
}
  