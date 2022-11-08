setInterval(setClock, 1);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');
const miliHand = document.querySelector('[data-mili-hand]');


function setClock(){
 const currentDate = new Date();
 const miliSecond = Math.round(currentDate.getMilliseconds() / 10);
 const second = currentDate.getSeconds();
 const minute = currentDate.getMinutes();
 const hour = currentDate.getHours();



 hourHand.textContent = hour;
 minuteHand.textContent = minute;
 secondHand.textContent = second;
 miliHand.textContent = miliSecond;


}


setClock()