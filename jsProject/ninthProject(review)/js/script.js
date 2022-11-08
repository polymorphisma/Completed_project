let count = 0;
const btns = document.querySelectorAll('.btn');
const value = document.querySelector('#value');

btns.forEach(btn => {
 btn.addEventListener('click', e => {
  const styles = e.currentTarget.classList;

  if(styles.contains('decrease')){
   count--;
  }else if(styles.contains('reset')){
   count = 0;
  }else if(styles.contains('increase')){
   count++;
  }


  if(count > 0){
   value.setAttribute('style', 'color:green;');
  }else if(count === 0){
   value.removeAttribute('style');
  }else if(count<0){
   value.setAttribute('style', 'color:red;')
  }

  value.textContent = count;
 });


});