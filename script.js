const body = document.querySelector("body"),
  hourHand = document.querySelector(".hour"),
  minuteHand = document.querySelector(".minute"),
  secondHand = document.querySelector(".second");
  
  // function updateTime(){
	//   return{
	// 	  let date = new Date(),
  //       sec = (date.getSeconds() / 60) * 360,
  //       min = (date.getMinutes() / 60) * 360,
  //       hour = (date.getHours() / 60) * 360,
		  
	// 	  secondHand.style.transform = `rotate(${sec}deg)`,
	// 	  minuteHand.style.transform = `rotate(${min}deg)`,
	// 	  hourHand.style.transform = `rotate(${hour}deg)`
	//   };
  // };
	// setInterval(updateTime, 1000);
  // updateTime(); 

const updateTime = () => {

  let date = new Date(),
    secToDeg = (date.getSeconds() / 60) * 360,    
    minToDeg = (date.getMinutes() / 60) * 360,
    hrToDeg = (date.getHours() / 12) * 360;


  secondHand.style.transform = `rotate(${secToDeg}deg)`;
  minuteHand.style.transform = `rotate(${minToDeg}deg)`;
  hourHand.style.transform = `rotate(${hrToDeg}deg)`;
};


setInterval(updateTime, 1000);


updateTime();
