// ------------------------------ Description ------------------------------
// Given two integers a and b, which can be positive or negative, find the sum
// of all the integers between and including them and return it. If the two
// numbers are equal return a or b.
// Note: a and b are not ordered!
// ------------------------------ Solution ------------------------------   
function getSum(a, b)
{
  if (a === b) return a;
  const resArr = [];
  if (a > b) {
      const ta = a;
      a = b;
      b = ta;
  }
  for (;a <= b;) resArr.push(a++);
  return resArr.reduce((acc, newVal) => acc + newVal);
}