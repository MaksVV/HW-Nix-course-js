let menuElem = document.getElementById('sweet');
let titleElem = menuElem.querySelector('.title');

titleElem.onclick = function() {
    menuElem.classList.toggle('open');
};