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

//Who likes it?
function likes(names) {
    const [a, b, c, ...{ length }] = names;
    switch (names.length) {
        case 0: {
            return "no one likes this"
        }
        case 1: {
            return `${a} likes this`
        }
        case 2: {
            return `${a} and ${b} like this`
        }
        case 3: {
            return `${a}, ${b} and ${c} like this`
        }
        default: {
            return `${a}, ${b} and ${length + 1} others like this`
        }
    }
}
