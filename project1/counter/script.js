const add = document.getElementById('add');
const minus = document.getElementById('minus');

const counter = document.getElementById('counter');
let count = 0;
add.addEventListener('click', () => {
    count++;
    counter.textContent = count;
})

minus.addEventListener('click', () => {
    if (count === 0) {
        return;
    }
    count--;
    counter.textContent = count;
})

