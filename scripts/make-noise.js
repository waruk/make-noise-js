let minIntervalValue = 5;
let maxIntervalValue = 45;
let mediaFile = "sounds/starship.mp3"

let playIntervalId;
let playLengthId;
let isMediaPlaying;

function readConfiguration() {
    minIntervalValue = parseInt(document.getElementById("min-value").value);
    maxIntervalValue = parseInt(document.getElementById("max-value").value);
}

async function playSound() {
    audioElem = document.getElementById("audio-elem");
    try {
        await audioElem.play();
        logInfo("Playing sound file!");
    } catch (err) {
        logInfo("Can not play the file.");
    }
}

function getNextPlayTime(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function scheduleNextPlay() {
    nextPlayTime = getNextPlayTime(minIntervalValue, maxIntervalValue);  // time in minutes
    logInfo("Next play in: " + nextPlayTime + " minutes");
    playIntervalId = window.setTimeout(playSound, nextPlayTime * 60000); // time in seconds
}

//#region event handlers

function playButtonClick() {
    if (readConfiguration()) {
        logInfo("AudioPlayer started.", true);
        scheduleNextPlay();
    }
    else {
        logInfo("Configurion is invalid.");
    }
}

function stopButtonClick() {
    window.clearTimeout(playIntervalId);
    audioElem = document.getElementById("audio-elem");
    audioElem.pause();
    audioElem.currentTime = 0;
    isMediaPlaying = false;
    logInfo("AudioPlayer stopped.", true);
}

function audioEnded() {
    isMediaPlaying = false;
    logInfo("Playback ended.");
    scheduleNextPlay();
}
//#endregion

//#region attach events 
document.getElementById("play-button").addEventListener("click", playButtonClick);
document.getElementById("stop-button").addEventListener("click", stopButtonClick);
document.getElementById('audio-elem').addEventListener("ended", audioEnded);
//#endregion