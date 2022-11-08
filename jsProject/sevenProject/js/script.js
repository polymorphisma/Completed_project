const click = document.querySelector('.btns');
const bgColor = document.querySelector('.bg-colors');
const colors = ['#420039', '#932F6D', '#E07BE0', '#DCCCFF', '#F6F2FF'];



click.addEventListener('click', () => {
 let randomNumber = Math.floor(Math.random() * colors.length);
 document.body.style.backgroundColor = colors[randomNumber];

 bgColor.textContent = colors[randomNumber];
});