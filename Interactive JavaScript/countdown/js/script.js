const deadlineDate = "30 December 2025";

function deadline() {
  const deadlineEndsDate = new Date(deadlineDate);
  const currentDate = new Date();

  const totalSeconds = (deadlineEndsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor((totalSeconds % 60));

  document.getElementById('days').innerText = formatTime(days)
  document.getElementById('hours').innerText = formatTime(hours)
  document.getElementById('minutes').innerText = formatTime(minutes)
  document.getElementById('seconds').innerText = formatTime(seconds)
}

function formatTime(time){
    return time < 10 ? `0${time}` : time 
}

deadline();
setInterval(deadline, 1000)