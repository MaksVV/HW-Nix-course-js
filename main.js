// Task 1

document.body.firstElementChild;
document.body.lastElementChild;
document.body.lastElementChild.lastElementChild;

// Task 2

//1) Так, елемент elem.lastChild завжди останній, тому він не має nextSibling.
//2) Ні, тому що elem.children[0] є першим дочірній елементом серед всіх елементів, але перед ним можуть бути вузли других типів.
// Task 3

let table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];
    row.cells[i].style.backgroundColor = 'red';
}

// Task 4
// Task 5
// Task 6
// Task 7
// Task 8
// Task 9
// Task 10
// Task 11