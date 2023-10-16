const date = document.getElementById('date');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');


const today = new Date();

const weekDay = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];
const allmonths =["January", "February", "March", "April", "May","June", "July", "august", "September", "October", "November", "December"];

date.innerHTML = (today.getDate()<10?"0":"") + today.getDate();
day.innerHTML = weekDay[today.getDay()]
month.innerHTML = allmonths[today.getMonth()];
year.innerHTML = today.getFullYear();