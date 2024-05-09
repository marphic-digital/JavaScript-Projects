const hours = document.getElementById('hrs');
const minutes = document.getElementById('min');
const seconds = document.getElementById('sec');

setInterval(() =>{
    let currentTime = new Date();

    hours.innerHTML = (currentTime.getHours()<10?'0':'') + currentTime.getHours();
    minutes.innerHTML = (currentTime.getMinutes()<10?'0':'') + currentTime.getMinutes();
    seconds.innerHTML = (currentTime.getSeconds()<10?'0':'') + currentTime.getSeconds();
}, 1000)

