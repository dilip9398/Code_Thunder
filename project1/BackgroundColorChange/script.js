
const box = document.getElementById('box');
const body = document.querySelector('body');

box.addEventListener('click', (e) => {
    body.style.background = e.target.id;
})