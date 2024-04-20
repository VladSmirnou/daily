// ------------------------------ Description ------------------------------
// Create a method to see whether the string is ALL CAPS.
// ------------------------------ Solution ------------------------------
String.prototype.isUpperCase = function() {
    if (this.search(/[a-z]/) === -1) return true;
    return false;
}