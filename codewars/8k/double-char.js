// ------------------------------ Description ------------------------------
// Given a string, you have to return a string in which each character
// (case-sensitive) is repeated once.
// ------------------------------ Solution ------------------------------
function doubleChar(str) {
    return str.replace(/./g, mO => mO + mO);
}