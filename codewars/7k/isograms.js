// ------------------------------ Description ------------------------------
// An isogram is a word that has no repeating letters, consecutive or
// non-consecutive. Implement a function that determines whether a string
// that contains only letters is an isogram. Assume the empty string is an isogram.
// Ignore letter case.
// ------------------------------ Solution ------------------------------   
function isIsogram(str){
    const lettersCount = {};
    for (const i of str) {
      const lcLetter = i.toLowerCase()
      if (lettersCount[lcLetter]) { return false };
      lettersCount[lcLetter] = 1;
    }
    return true;
}