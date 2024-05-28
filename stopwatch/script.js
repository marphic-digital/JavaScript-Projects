const clockEl = document.querySelector('.digits');
const startBtnEl = document.getElementById('start');
const stopBtnEl = document.getElementById('stop');
const resetBtnEl = document.getElementById('reset');

let startTime = 0;
let elapsedTime = 0;
let timeInterval;

function startTimer(){
    startTime = Date.now() - elapsedTime;
    timeInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        clockEl.textContent = formateTime(elapsedTime);
    }, 10);
}

function formateTime(){
    const miliSeconds = Math.floor((elapsedTime % 1000) / 10);
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60) / (1000 * 60)));
    return (
        (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" +
        (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") + "." +
        (miliSeconds > 9 ? miliSeconds: "0" + milliSeconds)
    )
    
    
}
function stopTimer(){
    console.log('stop')
}
function resetTimer(){
    console.log('reset')
}

startBtnEl.addEventListener('click', startTimer);
stopBtnEl.addEventListener('click', stopTimer);
resetBtnEl.addEventListener('click', resetTimer);