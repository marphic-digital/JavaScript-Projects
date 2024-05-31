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

    startBtnEl.disabled = true;
    stopBtnEl.disabled = false;
}

function formateTime(){
    const milliSeconds = Math.floor((elapsedTime % 1000) / 10);
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    return (
        (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" +
        (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" +
        (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") + "." +
        (milliSeconds > 9 ? milliSeconds: "0" + milliSeconds)
    )
    
    
}
function stopTimer(){
    clearInterval(timeInterval);
    startBtnEl.disabled = false;
    stopBtnEl.disabled = true;
}
function resetTimer(){
    clearInterval(timeInterval);

    elapsedTime = '0';
    clockEl.textContent = '00:00:00'
    startBtnEl.disabled = false;
    stopBtnEl.disabled = true;
}

startBtnEl.addEventListener('click', startTimer);
stopBtnEl.addEventListener('click', stopTimer);
resetBtnEl.addEventListener('click', resetTimer);