// ------------------------------ Description ------------------------------
// Create a function called shortcut to remove the lowercase
// vowels (a, e, i, o, u ) in a given string.
// ------------------------------ Solution ------------------------------
function shortcut (string) {
    return string.replace(/[aeiou]/g, '');
}