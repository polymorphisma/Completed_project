var allButton= document.getElementsByTagName('button');
// console.log(allButton);


var copyAllButtons = [];


for(let i=0; i<allButton.length; i++){
 copyAllButtons.push(allButton[i].classList[1]);
 // console.log(allButton[i].classList[1]);
}


function buttonColorChange(buttonThingy){
 // console.log(buttonThingy.value);
 if(buttonThingy.value === 'red'){
  redButton();
 }else if(buttonThingy.value === 'green'){
  greenButton();
 }else if(buttonThingy.value === 'reset'){
  resetButton();
 }else if(buttonThingy.value === 'random'){
  randomButton();
 }
}



function redButton(){
 for(let i =0; i<allButton.length; i++){
  allButton[i].classList.remove(allButton[i].classList[1]);
  allButton[i].classList.add('btn-outline-danger');
 }
}
function greenButton(){
 for(let i =0; i<allButton.length; i++){ 
  allButton[i].classList.remove(allButton[i].classList[1]);
  allButton[i].classList.add('btn-outline-success');
 }
}



function resetButton(){
 for(let i=0; i<allButton.length; i++){
  allButton[i].classList.remove(allButton[i].classList[1]);
  allButton[i].classList.add(copyAllButtons[i]);
 }
}


function randomButton(){

 for(let i=0;i<allButton.length; i++){
  let randomColor = Math.floor(Math.random() * allButton.length);

  allButton[i].classList.remove(allButton[i].classList[1]);
  allButton[i].classList.add(copyAllButtons[randomColor]);

  console.log(randomColor);
 }

}