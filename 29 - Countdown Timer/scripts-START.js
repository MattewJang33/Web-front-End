var left;
var hour;
var minute;
var second;
var tempforleft;
var timerID;
var time;
button = document.querySelectorAll(".timer__button")
display = document.querySelector(".display__time-left")
enterminute = document.querySelector("input[name=minutes]")
endtime = document.querySelector(".display__end-time")

//Eventlistener for clicking exitsting timer buttons
button.forEach(ele => ele.addEventListener("click", function(e){
  left = ele.getAttribute('data-time');
  ReturnTime()
  timerID = setInterval(PrintTime,1000);
}//funcion ends here
)//listener ends here
)//foreach ends here

//Function for computing the endtime
function ReturnTime(){
  endtime.innerHTML =   "Be back at " + new Date(new Date().getTime() + left*1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}

//Function for changing the data-time into use-friendly time format and showing on window
function PrintTime(){
  tempforleft = left
  hour = Math.floor(tempforleft/3600);
  tempforleft = tempforleft % 3600
  minute = Math.floor(tempforleft/60);
  second = tempforleft % 60;
  display.innerHTML = hour + ":" + minute + ":" + second;
  if (left) {
    left = left - 1;
  }//left is positive ends here
}//printtime ends here

//Event listenerer for user-specified time
document.addEventListener('keypress', e =>{
  if (e.keyCode == 13){
    left = enterminute.value;
    timerID = setInterval(PrintTime,1000)
    ReturnTime()
    event.preventDefault();
  }//if ends here
}
)//addevent ends here
