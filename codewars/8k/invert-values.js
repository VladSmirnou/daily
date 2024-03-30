// ------------------------------ Description ------------------------------
// Given a set of numbers, return the additive inverse of each. Each positive
// becomes negatives, and the negatives become positives.
// ------------------------------ Solution ------------------------------
function invert(array) {
    return array.map(el => -el);
}