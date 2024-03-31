// ------------------------------ Description ------------------------------
// Check to see if a string has the same amount of 'x's and 'o's. The method must
// return a boolean and be case insensitive. The string can contain any char.
// ------------------------------ Solution ------------------------------   
function XO(str) {
    let xCount = 0;
    let oCount = 0;
    for (const i of str.toLowerCase()) {
      switch (i) {
        case 'x':
          xCount++;
          continue;
        case 'o': oCount++;
      }
    }
    return xCount === oCount;
}