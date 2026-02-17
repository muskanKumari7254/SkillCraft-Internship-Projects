let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let running = false;

function updateTime(){
    elapsedTime = Date.now() - startTime;

    let ms = elapsedTime % 1000;
    let sec = Math.floor(elapsedTime / 1000) % 60;
    let min = Math.floor(elapsedTime / (1000*60)) % 60;
    let hr = Math.floor(elapsedTime / (1000*60*60));

    document.getElementById("display").innerText =
        String(hr).padStart(2,'0') + ":" +
        String(min).padStart(2,'0') + ":" +
        String(sec).padStart(2,'0') + ":" +
        String(ms).padStart(3,'0');
}

function start(){
    if(!running){
        running = true;
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateTime,10);
    }
}

function pause(){
    running = false;
    clearInterval(timerInterval);
}

function reset(){
    running = false;
    clearInterval(timerInterval);
    elapsedTime = 0;
    document.getElementById("display").innerText = "00:00:00:000";
}
