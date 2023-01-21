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

// // Task 5 Підрахунок нащадків

// for(let li of document.querySelectorAll('li')) {
//     let text = li.firstChild.data;
//     let count = li.getElementsByTagName('li').length;

//     console.log(text);
//     console.log(count);
// }

// Task 6 Властивість nodeType

// Результат: 1 (вузол-елемент), бо останній вузол DOM є тег <script>, але браузер ще не встиг обробив решту сторінки.

// // Task 7 Тег у коментарі

// let body = document.body;
// body.innerHTML = "<!--" + body.tagName + "-->";
// alert( body.firstChild.data ); // BODY

// Вміст <body> замінюється на коментар <!--BODY-->, тому що body.tagName == "BODY".
// body.firstChild: <!--BODY--> є дочірнім елементом <body>, а data це віст цього коментарях.


// Task 8 Де у DOM - ієрархії "document"?

// 1. Об'єктом якого класу є document?
// - document є об'єктом класу HTMLDocument.
// 2. Яке місце він посідає у DOM-ієрархії?
// document є корнем DOM-ієрархії.
// 3. Чи успадковує він від Node чи від Element, чи може від HTMLElement?
// Інтерфейс Document успадковує интерфейси Node и EventTarget (Element);
// Інтерфейс Document для документів HTML успадковує інтерфейс HTMLDocument або, починаючи з HTML5, розширюється для багатьох документів;

// // Task 9 Очистіть елемент

// function clear(elem) {
//     elem.innerHTML = '';
// }

// clear(elem)

// Task 10 Чому залишається "aaa"?

// alert(table); // таблиця, як і має бути
// table.remove(); // Чому в документі залишився текст "ааа"?

// Tег <table> може містити в собі теги які відносяться лише до таблицi. Тому браузер виносить "aaa" перед тегом <table>.
// Тому, коли ми видаляємо таблицю, текст "ааа" залишається.

// // Task 11 Створіть список

// let ul = document.createElement('ul');
// document.body.append(ul);

// while (true) {
//     let data = prompt("Введіть назву", "");
//     let li = document.createElement('li');
//     li.textContent = data;
//     ul.append(li);
//     if (!data) break;
// }

// // Task 12 Вставте HTML у список

// one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');