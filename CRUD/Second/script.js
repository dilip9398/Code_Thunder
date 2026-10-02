// const newelement = document.createElement("h2");
// newelement.textContent = "I love YOu";
// newelement.style.color = "blue";
// newelement.style.fontSize = "75px";


// console.log(newelement);


// const element = document.getElementById('first');

// element.before(newelement);


// const element3 = document.createElement('h3');
// element3.textContent = "I Admire YOu";
// element3.style.color = "yellow";
// element3.id = "third";
// element3.className = "Mohit";


// element.after(element3);
// console.log(element3);

const ul = document.getElementById('ul');

const list = ['web development', 'DevOps', 'System Design', 'Security'];

for (let x of list) {
    const li = document.createElement('li');
    li.textContent = x;
    li.style.color = "yellow";
    // console.log(x);
    ul.appendChild(li);
 
}