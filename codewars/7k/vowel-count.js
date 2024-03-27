// ------------------------------ Description ------------------------------
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.
// ------------------------------ Solution ------------------------------
function getCount(str) {
    let vc = 0;
    for (const i of str) {
      switch (i) {
          case 'a': case 'e': case 'i': case 'o': case 'u': vc++;
      }
    }
    return vc;
}