// ------------------------------ Description ------------------------------
// Build a function that returns an array of integers from n to 1 where n>0.
// ------------------------------ Solution ------------------------------
const reverseSeq = n => {
    const finArr = [];
    for (;n !== 0;) {
      finArr.push(n--);
    }
    return finArr;
};