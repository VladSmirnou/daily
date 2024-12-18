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

function count(string) {
  const res = {}
  for (const char of string) {
    res[char] = res[char] + 1 || 1;
  }
  return res;
}
function alphabetPosition(text) {
  const res = [];
  for (let i = 0; i < text.length; i++) {
    const charCode = text.toUpperCase().charCodeAt(i);
    if (64 < charCode && charCode < 91) {
      res.push(charCode - 64)
    }
  }
  return res.join(' ');
}

class Cuboid {
  constructor(length, width, height) {
    this.length = length
    this.width = width
    this.height = height
  }
  
  get surfaceArea() {
    return 2 * (this.width * this.length + this.width * this.height +  this.length * this.height)
  }
  
  get volume() {
    return this.length * this.width * this.height
  }
}

class Cube extends Cuboid {
  constructor(length) {
    super(length, length, length)
  }
}

Object.defineProperty(Person.prototype, 'name', {
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  set(name) {
    ([this.firstName, this.lastName] = name.split(' '))
  },
})


class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }
  
  introduce() {
     return `${super.introduce()}  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status)
    this.master = master
  }
  
  greetMaster() {
    return `Hello ${this.master}`
  }
}

class Person {
  constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male") {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.gender = gender
  }
  
  sayFullName() {
    return `${this.firstName} ${this.lastName}`
  }
  
  static greetExtraTerrestrials(raceName) {
    return `Welcome to Planet Earth ${raceName}`
  }
}

function factory(x){
  return (array) => array.map(el => el * x)
}