function updateTime() {
  const hours = document.getElementById('hours');
  const minutes = document.getElementById('minutes');
  const seconds = document.getElementById('seconds');
  const time = document.getElementById('time');

  const hourProgress = document.getElementById('hour-ring-value');
  const minuteProgress = document.getElementById('minute-ring-value');
  const secondProgress = document.getElementById('second-ring-value');

  const C_Date = new Date();
  
  hours.textContent = C_Date.getHours();
  minutes.textContent = C_Date.getMinutes();
  seconds.textContent = C_Date.getSeconds();

  if(C_Date.getHours() >= 12 ){
    time.textContent = 'PM'
  }else{
    time.textContent = 'AM'
  }

  const hourValue = (C_Date.getHours() / 24) * 100;
  hourProgress.value = hourValue

  const minuteValue = (C_Date.getMinutes() / 60) * 100;
  minuteProgress.value = minuteValue

  const secondValue = (C_Date.getSeconds() / 60) * 100;
  secondProgress.value = secondValue
}

updateTime();

setInterval(updateTime, 1000);