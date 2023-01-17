// Task 1

function camelize(str) {
    return str.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

// Task 2

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

function filterRange(arr, a, b) {
    return arr.filter(item => item >= a && item <= b);
}

console.log(filtered);
console.log(arr); 

// Task 3

let arr1 = [5, 3, 8, 1];

function filterRangeInPlace(arr1, a, b) {
    for (let i of arr1) {
        if (a <= i && i >= b) {
        arr1.splice(arr1.indexOf(i), 1)
        }
    }
} 

filterRangeInPlace(arr1, 1, 4);

console.log(arr1);

// Task 4

let arr2 = [5, 2, 1, -10, 8];

arr2.sort((a, b) => b - a);

console.log(arr2);

// Task 5

let arr3 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr3);
function copySorted(arr3) {
    return arr3.slice().sort();
}

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr3); // HTML, JavaScript, CSS (без змін)

// Task 6

function Calculator() {

    this.methods = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "*": (a, b) => a * b,
      "/": (a, b) => a / b
    };
  
    this.calculate = function(str) {
        let split = str.split(' '),
            a = +split[0],
            action = split[1],
            b = +split[2]
  
        if (!this.methods[action] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return this.methods[action](a, b);
    }
}

let calc = new Calculator;
let addition = calc.calculate("2 + 3"),
    subtraction = calc.calculate("2 - 3"),
    multiplication = calc.calculate("2 * 3"),
    division = calc.calculate("2 / 3");

console.log(`Результат: 
            - додаваання = ${addition}; 
            - відніання = ${subtraction};
            - множення = ${multiplication}; 
            - ділення = ${division};`);


// Task 7

let vasya = { name: "Вася", age: 25};
let petya = { name: "Петя", age: 30};
let masha = { name: "Маша", age: 28};
let users = [ vasya, petya, masha ];
let names = users.map(item => item.name);
console.log(names); // Вася, Петя, Маша

// Task 8

function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
}

let vasya1 = {name : " Вася ", age: 25};
let petya1 = {name : " Петя ", age: 30};
let masha1 = {name : " Маша ", age: 28};
let arr4 = [ vasya1 , petya1 , masha1 ] ;

sortByAge (arr4);

console.log(arr4[0].name); // Вася
console.log(arr4[1].name); // Маша
console.log(arr4[2].name); // Петро

// Task 9

function getAverageAge(users) {
    return users.reduce(function(prev, user){
        return prev + user.age;
    }, 0) / users.length; 
}

let vasya2 = { name: "Вася", age: 25};
let petya2 = { name: "Петя", age: 30};
let masha2 = { name: "Маша", age: 29};
let arr5 = [ vasya2, petya2, masha2 ];

console.log(getAverageAge(arr5)); // (25 + 30 + 29) / 3 = 28

// Task 10

let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", " кришна ", ":-O"];

let unique = strings.filter((curr, index) => index === strings.indexOf(curr = curr.trim()));

console.log(unique); // кришна, харе, :-O

// Task 11

let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];

let unique1 = Array.from(new Set(values.map(item=>item)));

console.log(unique1);

// Task 12

// Відповідь:
// Ці два лічильника counter та counter2 незалежні, counter2 покаже 0,1. 
// Тому що counter та counter2 створюються різними викликами makeCounter, а тому вони мають різне лексичне середовище.
// А у кожного лексичного середовиища буде свій count. 


// function makeCounter() {
//     let count = 0;
//     return function() {
//          return count++; 
//     };
// }
// let counter = makeCounter();
// let counter2 = makeCounter();
// alert (counter ()); // 0
// alert (counter ()); // 1
// alert (counter2 ()); //?
// alert (counter2 ()); //?

// Task 13
// Відповідь:
// Лічильник буде працювати, тощу що обидві функції створені в одному лексичного середовищі та мають доступ до однієї змінної count.

function Counter() {
    let count = 0;
    this.up = function() {
      return ++count;
    };
    this.down = function() {
      return --count;
    };
}
  
let counter = new Counter();
  
console.log(counter.up()); //1
console.log(counter.up()); //2
console.log(counter.down()); //1

// Task 14

let factorial = n => n ? n * factorial(n - 1) : 1;

console.log(factorial(5));