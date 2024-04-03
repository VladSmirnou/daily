// ------------------------------ Description ------------------------------
// Take an array and remove every second element from the array. Always keep
// the first element and start removing with the next element.
// ------------------------------ Solution ------------------------------
function removeEveryOther(arr){
    return arr.reduce((acc, newVal, idx) => idx % 2 !== 0 ? acc : [...acc, newVal], []);
}