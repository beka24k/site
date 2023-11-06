let timeInput = document.getElementsByClassName("time")[0];
let countdownEls = document.getElementsByClassName("countdown");
let interval;

function startCountdown() {
  let inputTime = parseInt(timeInput.value);
  if (isNaN(inputTime) || inputTime <= 0) {
    countdownEls[0].innerHTML = "Doesnt correct time";
    return;
  }

  interval = setInterval(updateCount, 1000);
  function updateCount() {
    if (inputTime <= 0) {
      clearInterval(interval);
      countdownEls[0].innerHTML = "Time is done";
    } else {
      const minutes = Math.floor(inputTime / 60);
      let seconds = inputTime % 60;
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      countdownEls[0].innerHTML = `${minutes}:${seconds}`;
      inputTime--;
    }
  }
}
function resetCountdown() {
  clearInterval(interval);
  timeInput.value = "";
  countdownEls[0].innerHTML = "";
}
let btn =document.querySelectorAll('.buton').forEach(btn =>{
  btn.addEventListener('mousemove',(e)=>{
    let x=e.offsetX;
    let y=e.offsetY;
    let btnWidth=btn.clientWidth;
    let btnHeight=btn.clientHeight;
    let transX = (x-btnWidth/2);
    let transY = (y-btnHeight/2);
    btn.style.transform =`translateX(${transX}px) translateY(${transY}px) `
  })
  btn.addEventListener('mouseout',(e)=>{
    btn.style.transform='';
  })
})


