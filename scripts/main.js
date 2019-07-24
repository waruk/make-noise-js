import logInfo from './modules/page-logger.js';
import Scheduler from "./modules/scheduler.js";
import AudioPlayer from "./modules/audio-player.js";

(function(){
    "use strict";

    let checkNoiseIntervalId;
    let scheduler = new Scheduler();
    let audioPlayer = new AudioPlayer(document.getElementById("audio-elem"));
    let logTargetElement = document.getElementById("player-log");

    function playButtonClick() {
        // check every 1 minute if we are inside a noise interval
        // and, if true, schedule next audio file play
        checkNoiseIntervalId = window.setInterval(startMakingNoise, 1000 * 15); 
        logInfo(logTargetElement, "--- Started ---");
    }

    function stopButtonClick() {
        window.clearInterval(checkNoiseIntervalId);
        audioPlayer.stop();
        logInfo(logTargetElement, "--- Stopped ---");
    }

    document.getElementById("play-button").addEventListener("click", playButtonClick);
    document.getElementById("stop-button").addEventListener("click", stopButtonClick);

    function startMakingNoise() {
        logInfo(logTargetElement, "timer elapsed.");
        
        if (scheduler.isInsideNoiseInterval()) {
            audioPlayer.play();
        }
        else {
            audioPlayer.stop();
        }
    }
})();