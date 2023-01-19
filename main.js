// // Task 1

// document.body.firstElementChild;
// document.body.lastElementChild;
// document.body.lastElementChild.lastElementChild;

// Task 2

//1) Так, елемент elem.lastChild завжди останній, тому він не має nextSibling.
//2) Ні, тому що elem.children[0] є першим дочірній елементом серед всіх елементів, але перед ним можуть бути вузли других типів.

// Task 3

// let table = document.body.firstElementChild;

// for (let i = 0; i < table.rows.length; i++) {
//     let row = table.rows[i];
//     row.cells[i].style.backgroundColor = 'red';
// }

// Task 4

// // • Таблицю з id="age-table".
//     let table = document.getElementById('age-table')
// // • Всі елементи label всередині цієї таблиці (їх три).
//     document.querySelectorAll('#age-table label')
// // • Перший td у цій таблиці (зі словом "Age ").
//     table.querySelector('td')
// // • Форму form з ім'ям name = "search".
//     document.querySelector('form[name="search"]')
// // • Перший input у цій формі.
//     form.querySelector('input')
// // • Останній input у цій формі.
//     let inputs = form.querySelectorAll('input') 
//     inputs[inputs.length-1]

// Task 5 Підрахунок нащадків

for(let li of document.querySelectorAll('li')) {
    let text = li.firstChild.data;
    let count = li.getElementsByTagName('li').length;

    console.log(text);
    console.log(count);
}
// Task 6 Властивість nodeType
// Результат буде – 1; 
// Task 7
// Task 8
// // Task 9

// function clear(elem) {
//     elem.innerHTML = '';
// }

// clear(elem)

// Task 10

// // Task 11

// let ul = document.createElement('ul');
// document.body.append(ul);

// while (true) {
//     let data = prompt("Введіть назву", "");
//     let li = document.createElement('li');
//     li.textContent = data;
//     ul.append(li);
    
//     if (!data) break;
// }

// Task 12

one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');