const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2024,4,20,20,20,20);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
let month = months[futureDate.getMonth()];
month = months[month];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];



giveaway.textContent =`giveaway end on ${weekday}, ${date} ${month} ${year} ${hours}:${mins}`