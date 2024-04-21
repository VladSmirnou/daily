// ------------------------------ Description ------------------------------
// Complete the function that takes a non-negative integer n as input, and
// returns a list of all the powers of 2 with the exponent ranging from
// 0 to n ( inclusive ).
// ------------------------------ Solution ------------------------------
function powersOfTwo(n){
    const arr = [];
    for (let i = 0; i <= n;) {
      arr.push(2**i++);
    }
    return arr;
}