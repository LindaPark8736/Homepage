import './style.css'
const container = document.querySelector('.container');

let colorArr = ['red', 'orange', 'yellow','green','blue','purple']
// console.log("He4llo")

setInterval(() => {
    let color = Math.floor(Math.random() * colorArr.length);
    let left = Math.random() * window.innerWidth;
    let top = Math.random() * window.innerHeight;
    let div = document.createElement('div')
    div.className = 'circle';
    div.style.top = top + 'px';
    div.style.left = left + 'px';
    div.style.backgroundColor = colorArr[color];
    // window.addEventListener('mouseover', mouseOverFunction)

    container.appendChild(div)
}, 16);
