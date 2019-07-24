import { Logger } from "./modules/logger.js";
//import {Scheduler} from "./modules/scheduler.js";
//import {AudioPlayer} from "./modules/audio-player.js";

(function() {
    let checkNoiseIntervalId;
    let logger = new Logger(document.getElementById("player-log"));
    //let scheduler = new Scheduler();
    //let audioPlayer = new AudioPlayer(document.getElementById("audio-elem"));

    function playButtonClick() {
        // check every 1 minute if we are inside a noise interval
        // and, if true, schedule next audio file play
        checkNoiseIntervalId = window.setInterval(startMakingNoise, 1000 * 15); 
        logger.logInfo("--- Started ---");
    }

    function stopButtonClick() {
        window.clearInterval(checkNoiseIntervalId);
        //audioPlayer.stop();
        logger.logInfo("--- Stopped ---");
    }

    document.getElementById("play-button").addEventListener("click", playButtonClick);
    document.getElementById("stop-button").addEventListener("click", stopButtonClick);

    function startMakingNoise() {
        logger.logInfo("timer elapsed.");
        
        // if (scheduler.isInsideNoiseInterval()) {
        //     audioPlayer.play();
        // }
        // else {
        //     audioPlayer.stop();
        //}
    }
})();