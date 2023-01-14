// Task 1
// Напишіть функцію isEmpty(obj) , яка повертає true , якщо об'єкт не має властивостей, інакше false .

let obj1 = {},
    obj2 = {a: 1, b: 2};

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true
}

console.log(isEmpty(obj1));  
console.log(isEmpty(obj2));  

// Task 2
// Створіть функцію multiplyNumeric(obj) , яка збільшує всі числові властивості об'єкта obj на 2.

let obj3 = {a: 10, b: 20, c: 'maksim', d: true};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}

multiplyNumeric(obj3);
console.log(obj3); 

// Task 3
// Створіть функцію readNumber, яка вимагатиме введення числового значення до тих пір, поки відвідувач його не введе. 
// Також треба дозволити користувачеві зупинити процес введення, відправивши порожній рядок або натиснувши "Скасувати". У цьому випадку функція повинна повернути null.

function readNumber() {
    let num;

    do {
      num = prompt('Введіть число', '');
    } while (!isFinite(num));
  
    if (num === null || num === '') {
        return null;
    };
    return +num;
}

console.log(readNumber());

// Task 4
// Напишіть функцію random(min , max), яка генерує випадкове число з плаваючою точкою від min до max (але не включаючи max).

function random(min, max) {
    return (Math.random() * (max - min) + min).toFixed(10);
}

console.log(random (1, 5));
console.log(random (1, 5));
console.log(random (1, 5));

//Task 5

function randomInteger(min, max) {
    let num = Math.random() * (max + 1 - min) + min;
    return Math.floor(num);
}

console.log(randomInteger (1, 5));
console.log(randomInteger (1, 5));
console.log(randomInteger (1, 5));