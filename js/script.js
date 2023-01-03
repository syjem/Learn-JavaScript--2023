
console.log('Hello World')
console.log("I'm Fucking Happy Right now. I just run my first js code!")


const button = document.querySelector('#myButton');
const div = document.querySelector('.circle');
const whiteElement = document.querySelector('.white');
const paragraph = document.querySelector('p');
const btn = document.querySelector('#myButton');
const table = document.querySelector('.table-2');
const h2 = document.querySelector('.H2');
const h3 = document.querySelector('h3');
let isWhite = false;

button.addEventListener('click', () => {
    if (isWhite) {
        div.style.backgroundColor = 'rgb(32, 21, 43)';
        whiteElement.style.backgroundColor = 'rgb(32, 21, 43)';
        paragraph.style.color = 'rgb(223, 231, 231)';
        btn.style.backgroundColor = 'rgb(223, 231, 231)';
        table.style.backgroundColor = 'rgba(122, 122, 117, 0.959)';
        h2.style.color = 'rgb(223, 231, 231)';
        h3.style.color = 'rgb(223, 231, 231)';
    }
    else {
        div.style.backgroundColor = 'white';
        whiteElement.style.backgroundColor = 'white';
        paragraph.style.color = 'rgb(8, 176, 206)';
        btn.style.backgroundColor = 'rgba(245, 242, 66, 0.959)';
        table.style.backgroundColor = 'rgba(245, 242, 66, 0.959)';
        h2.style.color = 'black';
        h3.style.color = 'black';
    }
    isWhite = !isWhite;
});