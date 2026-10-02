
const element = document.getElementById("first");


element.addEventListener('click', () =>{
    element.textContent = "I Love You";
    element.style.backgroundColor = "yellow";
})

element.addEventListener('mousemove' ,() =>{
    element.textContent = "I Admire YOU";
    element.style.backgroundColor = "blue";
})