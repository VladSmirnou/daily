// ------------------------------ Description ------------------------------
// Define String.prototype.toAlternatingCase (or a similar function/method
// such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your
// selected language; see the initial solution for details) such that each
// lowercase letter becomes uppercase and each uppercase letter becomes lowercase.
// ------------------------------ Solution ------------------------------
String.prototype.toAlternatingCase = function () {
    return this.replace(/[a-z]/gi, mO => mO === mO.toUpperCase() ? mO.toLowerCase() : mO.toUpperCase());
}