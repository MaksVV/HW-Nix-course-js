/**
* Позиціонує елемент elem щодо елемента anchor відповідно до
значення position.
*
* @param {Node} anchor елемент, біля якого позиціонується інший
елемент
* @param {string} position одне з: top/right/bottom
* @param {Node} elem елемент, який позиціонується
*
* Обидва елементи elem і anchor повинні бути присутніми у
документі
*/ 
function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    return {
        top: box.top + window.pageYOffset,
        left: box.left + window.pageXOffset
    };
}

function showNote(anchor, position, html) {

    let note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;
    document.body.append(note);

    positionAt(anchor, position, note);
}

function positionAt(anchor, position, elem) {
    let anchorCoords = getCoords(anchor);

    switch (position) {
        case "top-out":
            elem.style.left = anchorCoords.left + "px";
            elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
            break;

        case "right-out":
            elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
            elem.style.top = anchorCoords.top + "px";
            break;

        case "bottom-out":
            elem.style.left = anchorCoords.left + "px";
            elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
            break;

        case "top-in":
            elem.style.left = anchorCoords.left + "px";
            elem.style.top = anchorCoords.top + "px";
            break;
            
        case "right-in":
            elem.style.left = anchorCoords.left + anchor.offsetWidth - elem.offsetWidth + "px";
            elem.style.top = anchorCoords.top + "px";
            elem.style.width = '150px';
            break;

        case "bottom-in":
            elem.style.top = anchorCoords.top + anchor.offsetHeight - elem.offsetHeight + "px";
            elem.style.left = anchorCoords.left + "px";
            break;
    }
}

/**
* Показує нотатку із заданим вмістом на заданій позиції
* Щодо елемента anchor. */

function showNote(anchor, position, html) {
    let note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;
    document.body.append(note);

    positionAt(anchor, position, note);
}

// test it
let blockquote = document.querySelector('blockquote');

showNote(blockquote, "top-in", "note top-in");
showNote(blockquote, "top-out", "note top-out");
showNote(blockquote, "right-out", "note right-out");
showNote(blockquote, "bottom-in", "note bottom-in");