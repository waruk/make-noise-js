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
    getNextPlayTime() {
        return "the next play time: a date type.";
    }

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

    scheduleNextPlay() {
    }
}

export {Scheduler};