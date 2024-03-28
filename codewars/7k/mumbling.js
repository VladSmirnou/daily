// ------------------------------ Description ------------------------------
// This time no story, no theory. The examples below show you how
// to write function accum:
// ------------------------------ Solution ------------------------------
function accum(s) {
    const finArr = [];
    for (let i = 0; i < s.length; i++) {
      finArr.push(`${s[i].toUpperCase()}${s[i].toLowerCase().repeat(i)}`);
    }
    return finArr.join('-');
}
  