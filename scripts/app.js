let checkNoiseIntervalId;
let scheduler = new Scheduler();
let audioPlayer = new AudioPlayer(document.getElementById("audio-elem"));

function logInfo(message, important = false) {

    logElement = document.getElementById("player-log");
    newLine = document.createElement("div");
    if (important)
        newLine.classList.add("bold-red-text");

    currentDate = Date.now();
    dateFormat = {
        year: 'numeric', month: 'numeric', day: 'numeric',
        hour: 'numeric', minute: 'numeric', second: 'numeric'
    }
    newLine.innerText = new Intl.DateTimeFormat('ro-RO', dateFormat).format(currentDate) + " : " + message;
    logElement.insertBefore(newLine, logElement.firstChild);

    console.log(newLine.innerText);
}

function playButtonClick() {
    // check every 1 minute if we are inside a noise interval
    // and, if true, schedule next audio file play
    logInfo("--- Started ---");
    checkNoiseIntervalId = window.setInterval(startMakingNoise, 1000 * 60); 
}

function stopButtonClick() {
    logInfo("--- Stopped ---");
    window.clearInterval(checkNoiseIntervalId);
}

document.getElementById("play-button").addEventListener("click", playButtonClick);
document.getElementById("stop-button").addEventListener("click", stopButtonClick);

function startMakingNoise() {
    logInfo("timer elapsed.");
    if (scheduler.isInsideNoiseInterval()) {
        audioPlayer.play();
    }
    else {
        audioPlayer.stop();
    }
}