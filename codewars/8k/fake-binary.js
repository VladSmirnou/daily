// ------------------------------ Description ------------------------------
// Given a string of digits, you should replace any digit below 5 with '0'
// and any digit 5 and above with '1'. Return the resulting string.
// Note: input will never be an empty string
// ------------------------------ Solution ------------------------------
function fakeBin(x){
    const binArr = [];
    for (const i of x) {
      i < 5 ? binArr.push('0') : binArr.push('1');
    }
    return binArr.join('');
}