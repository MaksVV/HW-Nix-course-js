function createCalendar(elem, year, month) {
    let mon = month - 1;
    let date = new Date(year, mon);
    let table = '<table><tr><th>Пн</th><th>Вт</th><th>Cр</th><th>Чт</th><th>Пт</th><th>Сб</th><th>Нд</th></tr><tr>';

    for (let i = 0; i < getDay(date); i++) {
        table += '<td></td>';
    }

    while (date.getMonth() == mon) {
        table += '<td>' + date.getDate() + '</td>';

        if (getDay(date) % 7 == 6) {
            table += '</tr><tr>';
        }

        date.setDate(date.getDate() + 1);
    }

    if (getDay(date) != 0) {
        for (let i = getDay(date); i < 7; i++) {
          table += '<td></td>';
        }
    }

    table += '</tr></table>';
    elem.innerHTML = table;
}   

function getDay(date) { 
    let day = date.getDay();
    if (day == 0) {
        day = 7;
    }
    return day - 1;
}

createCalendar(cal, 2012, 9);
createCalendar(cal1, 2023, 2);