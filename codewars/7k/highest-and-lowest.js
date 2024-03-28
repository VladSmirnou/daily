// ------------------------------ Description ------------------------------
// In this little assignment you are given a string of space separated
// numbers, and have to return the highest and lowest number.
// ------------------------------ Solution ------------------------------
function highAndLow(numbers){
    const splitArr = numbers.split(' ').map(Number);
    let lowest = splitArr[0];
    let highest = splitArr[0];
    for (const i of splitArr) {
      if (i < lowest) {
        lowest = i;
        continue;
      } else if (i > highest) {
        highest = i;
      }
    }
    return `${highest} ${lowest}`;
}