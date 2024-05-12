// ------------------------------ Description ------------------------------
// Given the triangle of consecutive odd numbers:
//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this
// triangle (starting at index 1) e.g.: (Input --> Output)
// ------------------------------ Solution ------------------------------
function rowSumOddNumbers(n) {
    let numbersCount = 0;
    for (let i = n; i !== 0;) numbersCount += --i;
    const firstNumber = numbersCount * 2 + 1;
    return (2 * (firstNumber + (n - 1))) * n / 2;
}
