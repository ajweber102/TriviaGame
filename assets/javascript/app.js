var time=20;

var counter=setInterval(timer, 1000); 

function timeLeft()
{
  time=time-1;
  if (time <= 0) {
     clearInterval(counter);
     document.getElementById('time-left').innerHTML = time + " Seconds Left";
  }
}