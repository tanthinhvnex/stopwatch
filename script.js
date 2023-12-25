let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStopwatch() {
    if (!timer) {
        timer = setInterval(updateStopwatch, 1);
    }
}

function stopStopwatch() {
    clearInterval(timer);
    timer = null;
}

function resetStopwatch() {
    stopStopwatch();
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
}

function updateStopwatch() {
    ++seconds;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("display").innerHTML = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(value) {
    return value < 10 ? `0${value}` : `${value}`;
}
