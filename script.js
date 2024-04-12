const hourHand = document.querySelector(".hour"),
 minuteHand = document.querySelector(".minute"),
 secondHand = document.querySelector(".second");

function updateTime() {
  const date = new Date(),
   sec = (date.getSeconds() / 60) * 360,
   min = (date.getMinutes() / 60) * 360,
   hour = (date.getHours() / 12) * 360; // Use 12-hour format

  secondHand.style.transform = `rotate(${sec}deg)`;
  minuteHand.style.transform = `rotate(${min}deg)`;
  hourHand.style.transform = `rotate(${hour}deg)`;
}

// Call updateTime initially
updateTime();

// Update the clock every second
setInterval(updateTime, 1000);



