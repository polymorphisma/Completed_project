const correctAnswer = ['A', 'C', 'C', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-part');
const result = document.querySelector('.result');


form.addEventListener('submit', e =>{
 e.preventDefault();

 let score = 0;
 const userAnswer = [
  form.q1.value,
  form.q2.value,
  form.q3.value,
  form.q4.value,
  form.q5.value,
  form.q6.value,
 ];


 userAnswer.forEach((answer, index) =>{
  if(answer === correctAnswer[index]){
   score++;
  }
 });

 // console.log(score);

 let percentage = (score/6) * 100;
 percentage = Math.floor(percentage);


 scrollTo(0,0);
 result.classList.remove('d-none');


 let output = 0;
 const timer = setInterval(() => {
  result.querySelector('span').textContent = `${output}%`;

  if(output === percentage){
   clearInterval(timer);
  }else{
   // percentage++;
   output++;
  }
 }, 40);

});