const first = document.getElementById('first');
const second = document.getElementById('second');


const add = document.getElementById('add');
const sub = document.getElementById('sub');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const result = document.querySelector('h3');

add.addEventListener('click', () => {

    const sum = Number(first.value) + Number(second.value);
    result.textContent = `Result is : ${sum}`;
});



sub.addEventListener('click', () => {

    const sum = Number(first.value) - Number(second.value);
    result.textContent = `Result is : ${sum}`;
});


multiply.addEventListener('click', () => {

    const sum = Number(first.value) * Number(second.value);
    result.textContent = `Result is : ${sum}`;
});


divide.addEventListener('click', () => {

    const sum = Number(first.value) / Number(second.value);
    result.textContent = `Result is : ${sum}`;
});
