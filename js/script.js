
console.log('Hello World')
console.log("I'm Fucking Happy Right now. I just run my first js code!")


document.addEventListener("DOMContentLoaded", function(event) {
    const htmlBody = document.querySelector("body");
    const button = document.getElementById("btn");
    
    const randomFunction = function() {
      const colors = ["#FFB84C", "#F16767", "#A459D1", "#EB455F", "#B4E4FF", "#F0A04B", "#EA8FEA"];   
      
      const randomIndex = Math.floor(Math.random() * colors.length); 
    
      const randomColor = colors[randomIndex];
    
      htmlBody.style.backgroundColor = randomColor;
      button.style.backgroundColor = randomColor;
    
      console.log("The user clicked and set the color to " + randomColor);
    }
    
    button.onclick = randomFunction;
  });

// const click = document.querySelector('.click');

// click.addEventListener('click', () => {
//     alert('First Day of Learning JavaScript');
// });


const button = document.querySelector('#myButton');
const div = document.querySelector('.circle');
const whiteElement = document.querySelector('.white');
const paragraph = document.querySelector('.p2');
const btn = document.querySelector('#myButton');
const table = document.querySelector('.table-2');
const h2 = document.querySelector('.H2');
const h3 = document.querySelector('h3');
const h6 = document.querySelector('.h6');
const hover = document.querySelector('#myButton'); 
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
        h6.style.color = 'rgba(122, 122, 117, 0.959)';
    }
    else {
        div.style.backgroundColor = 'rgb(230, 237, 236)';
        whiteElement.style.backgroundColor = 'rgb(230, 237, 236)';
        paragraph.style.color = 'rgb(8, 176, 206)';
        btn.style.backgroundColor = 'rgb(223, 231, 231)';
        table.style.backgroundColor = 'rgba(245, 242, 66, 0.959)';
        h2.style.color = 'rgb(32, 21, 43)';
        h3.style.color = 'rgb(32, 21, 43)';
        h6.style.color = 'rgb(32, 21, 43)';
    }
    isWhite = !isWhite;
});


