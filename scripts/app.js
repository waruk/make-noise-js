let scheduler = new Scheduler();
let checkNoiseIntervalId;

let noiseIntervals = new Array();
noiseIntervals.push({
    from: "08:00",
    to: "11:20",
    frequency: {
        min: 4,
        max: 25
    },
    audioFile: "sounds/icebraker.mp3"
});
noiseIntervals.push({
    from: "20:10",
    to: "23:00",
    frequency: {
        min: 10,
        max: 48
    },
    audioFile: "sounds/starship.mp3"
});



//#region event handlers
function playButtonClick() {
    // check every 1 minute if we are inside a noise interval
    // and, if true, schedule next audio file play
    checkNoiseIntervalId = window.setInterval(scheduler.isInsideNoiseInterval, 1000 * 60); 
}

function stopButtonClick() {
    window.clearInterval(checkNoiseIntervalId);
}
//#endregion

//#region attach events 

document.getElementById("play-button").addEventListener("click", playButtonClick);
document.getElementById("stop-button").addEventListener("click", stopButtonClick);

//#endregion

function logInfo(message, important = false) {
    console.log(message);

    logElement = document.getElementById("player-log");
    newLine = document.createElement("p");
    if (important)
        newLine.classList.add("bold-red-text");

    currentDate = Date.now();
    dateFormat = {
        year: 'numeric', month: 'numeric', day: 'numeric',
        hour: 'numeric', minute: 'numeric', second: 'numeric'
    }
    newLine.innerText = new Intl.DateTimeFormat('ro-RO', dateFormat).format(currentDate) + " : " + message;
    logElement.insertBefore(newLine, logElement.firstChild);
}
