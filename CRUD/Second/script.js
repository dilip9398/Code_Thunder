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

// const ul = document.getElementById('ul');

// const list = ['web development', 'DevOps', 'System Design', 'Security'];

// for (let x of list) {
//     const li = document.createElement('li');
//     li.textContent = x;
//     li.style.color = "yellow";
//     // console.log(x);
//     ul.appendChild(li);
 
// }

// ---------------------------------------------------------

const users = [
  {
    name: "Aarav Sharma",
    age: 24,
    photo: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    name: "Priya Verma",
    age: 22,
    photo: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    name: "Rahul Mehta",
    age: 26,
    photo: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    name: "Sneha Kapoor",
    age: 23,
    photo: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    name: "Karan Malhotra",
    age: 28,
    photo: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    name: "Ananya Singh",
    age: 21,
    photo: "https://randomuser.me/api/portraits/women/6.jpg"
  },
  {
    name: "Rohan Gupta",
    age: 25,
    photo: "https://randomuser.me/api/portraits/men/7.jpg"
  },
  {
    name: "Neha Joshi",
    age: 27,
    photo: "https://randomuser.me/api/portraits/women/8.jpg"
  },
  {
    name: "Aditya Raj",
    age: 24,
    photo: "https://randomuser.me/api/portraits/men/9.jpg"
  },
  {
    name: "Isha Agarwal",
    age: 22,
    photo: "https://randomuser.me/api/portraits/women/10.jpg"
  }
];

const root = document.getElementById('root');

const arr = [];

users.forEach((people) => {

    const name = document.createElement('h3');
    name.textContent = `Name : ${people.name}`;

    const age = document.createElement('p');
    age.textContent = `Age : ${people.age}`;

    const profile = document.createElement('img');
    profile.src = people.photo;

    const card = document.createElement('div');
    card.append(profile, name, age);


    arr.push(card);

})

root.append(...arr);
