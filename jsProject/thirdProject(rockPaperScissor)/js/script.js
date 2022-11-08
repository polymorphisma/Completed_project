const rpsClick = (yourChoice) => {
 // console.log(yourChoice);
 let choiceAre = ['rock', 'paper', 'scissors'];
 let humanChoice, botChoice;


 humanChoice = yourChoice.id;
 // console.log(humanChoice);

 botChoice = choiceAre[Math.floor(Math.random() * 3)];
 // console.log(botChoice);


 let result = winnerFunc(humanChoice, botChoice);
 // console.log(result[1]);

 let message = finalMessage(result[0], result[1]);
 console.log(message);
 rpsFrontEnd(humanChoice, botChoice, message);
}



function winnerFunc(humanChoice, botChoice){

 var rpsDatabase = {
  'rock': {'scissors':1,'rock':0.5, 'paper':0},
  'paper': {'rock':1, 'paper':0.5, 'scissors': 0},
  'scissors': {'paper':1, 'scissors':0.5, 'rock': 0},
 }


 var botScore = rpsDatabase[botChoice][humanChoice]; 
 var yourScore = rpsDatabase[humanChoice][botChoice]; 

 console.log('yourscore', yourScore)
 console.log('botScore', botScore)


 return [yourScore, botScore];
}



function finalMessage(yourScore, botScore){

 if (yourScore === 1 ){
  return {'message':'You Won', 'color':'#5294d1'}
 } else if(yourScore === 0.5){
  return {'message':'Tie', 'color':'#96D22D'}
 } else if(yourScore === 0){
  return {'message':'You Lose', 'color':'#FF3633'}
 }
}



function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
 var imagesDatabase = {
  'rock':document.getElementById('rock').src,
  'paper':document.getElementById('paper').src,
  'scissors':document.getElementById('scissors').src,
 }


 // remove all the images

 document.getElementById('rock-div').remove();
 document.getElementById('paper-div').remove();
 document.getElementById('scissors-div').remove();



 let humanDiv = document.createElement('div');
 let botDiv = document.createElement('div');
 let messageDiv = document.createElement('div');

 humanDiv.innerHTML = `<img src = '${imagesDatabase[humanImageChoice]}' height=300 width=300 style = 'box-shadow: 0px 0px 37px 19px rgba(64,150,230,1);
'
>`

messageDiv.innerHTML = `<h1 style = 'color: ${finalMessage['color']}; font-size:50px; padding:30px; font-weight:600;'>  ${finalMessage['message']}</h1>`
 botDiv.innerHTML = `<img src = '${imagesDatabase[botImageChoice]}' height=300 width=300 style = 'box-shadow: 0px 0px 37px 19px rgba(255,54,51,1);
'
>`
 document.getElementById('flex-box-rps-div').append(humanDiv);
 document.getElementById('flex-box-rps-div').append(messageDiv);

 document.getElementById('flex-box-rps-div').append(botDiv);
}