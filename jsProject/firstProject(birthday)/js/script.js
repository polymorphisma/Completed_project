// Challenge one: Your age in days


const ageInDays = () => {
 let birthDate = prompt("Date of birth(strictly yyyy/mm/dd):");

 const myArray = birthDate.split("/");
 let userGivenDateDay = yearMonthDay(Number(myArray[0]), Number(myArray[1]), Number(myArray[2]));

 const todayDate = new Date();
 let todayDateDay = yearMonthDay(todayDate.getFullYear(), todayDate.getMonth()+1, todayDate.getDate());

 console.log(userGivenDateDay);
 console.log(todayDateDay);

 const date = todayDateDay - userGivenDateDay;

 var h1 = document.getElementById('answer')
 h1.innerText = (`You are ${date} days old.`);
}



const reset = () => {
 document.getElementById('answer').remove();
}

function yearMonthDay(year, month, day){

 year *= 365;
 month *= 30;
 return year+month+day;
}




