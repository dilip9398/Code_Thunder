const cmt = document.getElementById("comment"); 
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');

cmt.addEventListener("input", ()=>{
    const count = cmt.value;
    const len = count.trim();
    h2.textContent = `Text Count : ${len.length}`;

    const arr = count.split(/\s+/).filter((item) => item !== "");
    h3.textContent = `Word Count : ${arr.length}`;
} );