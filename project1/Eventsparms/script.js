
// const parent = document.getElementById('parent');

// parent.addEventListener('click', (e) =>{
//     e.target.textContent = 'Clicked!';
//     e.target.style.backgroundColor = 'yellow';
// })


// const grandparent = document.getElementById('grandParent');
// const parent = document.getElementById('parent');
// const child = document.getElementById('child');


// grandparent.addEventListener('click', ()=>{
//     console.log("Grandparent Clicked");
// })
// parent.addEventListener('click', ()=>{
//     console.log("Parent Clicked");
// })
// child.addEventListener('click', ()=>{
//     console.log("Child Clicked");
// })


const button = document.querySelector('button');

function handle() {
    button.textContent = "clicked Me";
    button.removeEventListener('click', handle);
}

button.addEventListener('click', handle);

