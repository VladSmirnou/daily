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

//Create Phone Number
function createPhoneNumber(numbers){
    return `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6).join('')}`;
}

//
function duplicateCount(text){
    const countMap = {}
    for (const i of text.toLowerCase()) {
      countMap[i] = ++countMap[i] || 1
    }
    let count = 0;
    Object.values(countMap).forEach(v => {
      if (v > 1) count++
    })
    return count;
}

function toCamelCase(str){
    const finalString = [];
    for (let i = 0; i < str.length; i++) {
      const char = str[i]
      if (char === '-' || char === '_') {
        finalString.push(str[++i].toUpperCase())
      } else {
        finalString.push(char)
      }
    }
    return finalString.join('');
}

function solution(string) {
    return string.replace(/[A-Z]/g, (v) => ` ${v}`)
}

function inArray(array1,array2){
  return array1.filter(a1Str => array2.findIndex(a2Str => a2Str.includes(a1Str)) > -1).sort((a, b) => a.localeCompare(b))
}
