let myDate = 'Jan 1 2021',
  daysContent = document.querySelector('.daysContent'),
  hoursContent = document.querySelector('.hoursContent'),
  minutesContent = document.querySelector('.minutesContent'),
  secondsContent = document.querySelector('.secondsContent');

function getTimeBetween(date){
  const newYearTime = new Date(date);
  let timeBetween = +newYearTime - Date.now();

  let daysBefore = Math.floor(timeBetween / 1000 / 60 / 60 / 24);
  let hoursBefore = Math.floor(timeBetween % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  let minutesBefore = Math.floor(timeBetween % (1000 * 60 * 60) / (1000 * 60));
  let secondsBefore = Math.floor(timeBetween % (1000 * 60) / 1000);

  daysContent.textContent = daysBefore;
  hoursContent.textContent = hoursBefore;
  minutesContent.textContent = minutesBefore;
  secondsContent.textContent = secondsBefore;
}

let interval = setInterval(()=>{
  getTimeBetween(myDate);
}, 1000);