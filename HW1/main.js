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

// Task 5
// Напишіть функцію randomInteger( min , max), яка генерує випадкове ціле число від min до max (включно).
// Будь-яке число з інтервалу min..max має з'являтися з однаковою ймовірністю.

function randomInteger(min, max) {
    let num = Math.random() * (max + 1 - min) + min;
    return Math.floor(num);
}

console.log(randomInteger (1, 5));
console.log(randomInteger (1, 5));
console.log(randomInteger (1, 5));

// Task 6
// Напишіть функцію ucFirst( str ), яка повертає рядок str із великим першим символом.

function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst('вася'));

// Task 7
// Напишіть функцію checkSpam ( str ), яка повертає true, якщо str містить 'viagra ' або 'XXX', а інакше false.

function checkSpam(str) {
    let strLower = str.toLowerCase();

    return strLower.includes('viagra') || strLower.includes('xxx');
}

console.log(checkSpam( 'buy ViAgRA now'));
console.log(checkSpam( 'free xxxxx '));
console.log(checkSpam( "innocent rabbit"));

// Task 8
// Створіть функцію truncate(str , maxlength), яка перевіряє довжину рядка str і, якщо вона перевершує maxlength, замінює кінець str на "...", так, щоб її довжина дорівнювала maxlength .

function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 1) + '…';
    }
    return str;
}

console.log(truncate ( "Ось що мені хотілося б сказати на цю тему:", 20));
console.log(truncate ( "Усім привіт!", 20));

// Task 9 
// Є вартість у вигляді рядка "$120". Тобто спочатку йде знак валюти, а потім число.
// Створіть функцію extractCurrencyValue(str ), яка з такого рядка виділятиме числове значення і повертатиме його.

function extractCurrencyValue(str) {
    return str.slice(1);
}