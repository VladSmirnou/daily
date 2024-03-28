// ------------------------------ Description ------------------------------
// You are going to be given a word. Your job is to return the middle character
// of the word. If the word's length is odd, return the middle character.
// If the word's length is even, return the middle 2 characters.
// ------------------------------ Solution ------------------------------
function getMiddle(s)
{
  const strLength = s.length;
  const startInx = Math.floor(s.length / 2);
  return strLength % 2 === 0 ? s.substring(startInx - 1, startInx + 1) : s[startInx];
}