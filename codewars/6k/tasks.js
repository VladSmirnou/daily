//Short Long Short
function solution(a, b){
    return a.length > b.length ? `${b}${a}${b}` : `${a}${b}${a}`
}

//Stop gninnipS My sdroW!
function spinWords(string){
    // split ' ' -> reduce [] ( lengthCheck -> (true) -> reverse -> push; (false) -> push ) -> join
    return string.split(' ').reduce((acc, newVal) => {
      let value = newVal;
      if (value.length > 4) {
        value = newVal.split('').reverse().join('');
      }
      return (acc.push(value), acc)
    }, []).join(' ')
}