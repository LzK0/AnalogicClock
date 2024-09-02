var digitalElement = document.querySelector('.digital');
var sElement = document.querySelector('.p_s');
var mElement = document.querySelector('.p_m');
var hElement = document.querySelector('.p_h');

function formatTime(time) {
    return time < 10 ? `0${time}` : time
}

function updateClock() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    digitalElement.innerHTML = `${formatTime(hour)}:${formatTime(minute)}:${formatTime(second)}`;

    let sDeg = (360 / 60) * second - 90;
    let mDeg = (360 / 60) * minute - 90;
    let hDeg = (360 / 12) * hour - 90;

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;

}

setInterval(updateClock, 1000);
updateClock();