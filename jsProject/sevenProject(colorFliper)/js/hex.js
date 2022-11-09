const hex = [0,1,2,3,4,5,6,7,8,9, 'A', 'B', 'C', 'D', 'E', 'F'];


const btn = document.querySelector('.btns');
const bgColor = document.querySelector('.bg-colors');

btn.addEventListener('click', () => {
 let hexColor = '#';
 for (let i = 0; i < 6; i++) {
  let randomNumber = Math.floor(Math.random() * hex.length);
  hexColor += hex[randomNumber];


 }

 document.body.style.backgroundColor = hexColor;
 bgColor.textContent = hexColor;
});
