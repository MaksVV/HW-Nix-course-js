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
    return +str.slice(1);
}

console.log(extractCurrencyValue ('$120') === 120);

// Task 10
// Напишіть функцію sumInput( ), яка:
// • Просить користувача ввести значення, використовуючи prompt та зберігає їх у масив.
// • Закінчує запитувати значення, коли користувач введе не числове значення, порожній рядок або натисне «Скасувати».
// • Підраховує та повертає суму елементів масиву.
// PS Нуль 0 – вважається числом, не зупиняйте введення значень під час введення «0».

function sumInput() {
    let arr = [];
    while (true) {
        let value = prompt("Введіть значення","");
        if (value === "" || value === null || !isFinite(value)) break;
        arr.push(+value);
    }
    
    let sum = 0;
    for (let number of arr) {
        sum += number;
    }

    // console.log(arr);    
    alert(`Cумa чисел дорівнює ${sum}`);
}

sumInput()

// Task 11
// Чи обов'язковий "else"?
function checkAge (age) {
    if (age > 18) {
        return true;
    } else {
        // ...
        return confirm( ' Батьки дозволили ?');
    }
}
// Чи буде ця функція працювати якось інакше, якщо прибрати else ?
function checkAge (age) {
    if (age > 18) {
        return true;
    }
    // ...
    return confirm( ' Батьки дозволили ?');
}
//Чи є хоч одна відмінність у поведінці цього варіанту?
// Відповідь: На мою думку else не обовязковий, так як в обох випадках confirm вииконеється коли if буде false. Різниці між ними ніякої не має.

// Task 12
// Наступна функція повертає true якщо параметр age більше 18. В іншому випадку вона ставить питання confirm і повертає його результат.
// function checkAge (age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm( ' Батьки дозволили ?');
//     }
// }

function checkAge(age) {
    return age > 18 ? true : confirm('Батьки дозволили?');
}

function checkAge(age) {
    return age > 18 || confirm('Батьки дозволили?');
}

// Task 13
// Напишіть функцію min(a,b), яка повертає менше чисел a і b.

let min = (a, b) => a < b ? a : b;

console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));

// Task 14
// Напишіть функцію pow(x,n ), яка повертає x до ступеня n. Інакше кажучи, множить x на себе n разів і повертає результат.

let x = prompt('Введіть значеняя "x"', ''),
    n = prompt('Введіть значеняя ступеня "n"', '');

function pow(x, n) {
    if (n < 1 || n % 1 != 0) {
        return alert(`Помилка, ступіть ${n} не є натуральни число!!!`)
    }
    return alert(`Ваш результат: ${x ** n}`);
}
pow(x, n);

// Task 15
// Замініть код Function Expression стрілочною функцією:
// function ask(question, yes, no) {
//     if (confirm(question)) yes( )
//     else no( );
//     }
//     ask (
//     "Ви згодні?",
//     function ( ) { alert ("Ви погодилися."); },
//     function ( ) { alert ("Ви скасували виконання."); }
// );

let ask = (question, yes, no) => (confirm(question))? yes() : no();

ask("Ви згодні?", () => alert("Ви погодилися."), () => alert("Ви скасували виконання."));

// Task 16
// Ваш місячний дохід - 3333 папуг. Ви хочете купити у мавп пальму за 8000 папуг.
// Обчисліть, за який проміжок часу ви назбираєте на пальму, за умови, що ваші щомісячні витрати становлять 1750 папуг.

function timePeriod(income, price, costs) {
    let time = price / (income - costs);
    return console.log(`Вам знадобиться ${Math.ceil(time)} місяці(в).`);
}

timePeriod(3333, 8000, 1750);

// Task 17
//1. Запитати користувача 10 чисел 2. Якщо число - Позитивне -> нічого не робити - негативна -> отримати їх суму 3. Вивести суму негативних чисел, які запровадив користувач.

function sumNegativeNumbers() {
    let arr = [];
    while (true) {
        let value = prompt("Введіть любі числа 10 разів", "");
        if (!isFinite(value) || value === null || arr.length > 9) break;
        arr.push(+value);
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            sum += arr[i];
        }
    }
    // console.log(arr);    
    alert(`Cумa негативних чисел дорівнює ${sum}`);
}

sumNegativeNumbers();