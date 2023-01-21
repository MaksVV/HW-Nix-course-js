let fieldCoords = field.getBoundingClientRect();

let leftTopOutsideCorner = [fieldCoords.left, fieldCoords.top]; // лівий верхній зовнішній кут
let rightBottomOutsideCorner = [fieldCoords.right, fieldCoords.bottom]; // правий нижній зовнішній кут
let leftTopInsideCorner = [fieldCoords.left + field.clientLeft, fieldCoords.top + field.clientTop]; // лівий верхній внутрішній кут
let rightBottomInsideCorner = [fieldCoords.left + field.clientLeft + field.clientWidth, fieldCoords.top + field.clientTop + field.clientHeight]; // правий нижній внутрішній кут

let resalt = [leftTopOutsideCorner, rightBottomOutsideCorner, leftTopInsideCorner, rightBottomInsideCorner];

document.onclick = function(e) {
    coords.innerHTML = e.clientX + ':' + e.clientY;
};

console.log(resalt.join(' '));