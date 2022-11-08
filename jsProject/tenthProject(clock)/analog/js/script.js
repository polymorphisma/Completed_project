setInterval(setClock, 1);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');
const miliHand = document.querySelector('[data-mili-hand]');


function setClock(){
 const currentDate = new Date();
 const milisRatio = currentDate.getMilliseconds() / 1000;
 const secondsRatio = (milisRatio + currentDate.getSeconds()) / 60;
 const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
 const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

 // console.log(secondsRatio * 60);
 // console.log(minutesRatio * 60);
 // console.log(hoursRatio * 12);
 setRotation(miliHand, milisRatio);
 setRotation(secondHand, secondsRatio);
 setRotation(minuteHand, minutesRatio);
 setRotation(hourHand, hoursRatio);
}

function setRotation(e, rotationRatio){
 // console.log(rotationRatio);
 e.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()