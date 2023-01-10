function showTime() {
  let date = new Date();
  let weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let session = "AM";

  let dayOfWeek = weekday[date.getDay()];
  let dayOfMonth = date.getDate();

  if (hours == 0) {
    hours = 12;
  }
  if (hours > 12) {
    hours = hours - 12;
    session = "PM";
  }

  let time = hours + ":" + minutes + ":" + seconds + " " + session;
  
  document.querySelector(".clock"),innerText = time;
  document.querySelector(".clock").textContent = time;
  document.querySelector(".dayOfWeek").innerHTML = dayOfWeek;
  document.querySelector(".day").innerHTML = " " + months[date.getMonth(" ")] + " " + dayOfMonth + ", " + date.getFullYear()

  setTimeout(showTime, 1000);
}
showTime();