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

