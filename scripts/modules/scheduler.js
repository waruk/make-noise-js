class Scheduler {

    // only one constructor can be defined
    constructor() {
        this.noiseIntervals = new Array();
        this.noiseIntervals.push({
            from: "08:00",
            to: "11:20",
            frequency: {
                min: 4,
                max: 25
            },
            audioFile: "sounds/icebraker.mp3"
        });
        this.noiseIntervals.push({
            from: "20:10",
            to: "23:00",
            frequency: {
                min: 10,
                max: 48
            },
            audioFile: "sounds/starship.mp3"
        });
    }

    // class methods defined here are moved inside the prototype,
    // except methods defined as arrow functions
    // class properties remain as instance fields.

    stopScheduling() {
        // whatever
    }

    isInsideNoiseInterval() {
        let currentTime = Date.now();

        // for (const interval of this.noiseIntervals) {
            
        //     console.log(interval.from);
        // }

        return true;
    }

    scheduleNextPlay(minimum, maximum) {
        let min = Math.ceil(minimum);
        let max = Math.floor(maximum);
        let nextPlayTime = Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive 

        console.log("Next play in: " + nextPlayTime + " minutes");
        let playIntervalId = window.setTimeout(playSound, nextPlayTime * 60000); // time in seconds

        return nextPlayTime;
    }
}

export {Scheduler};