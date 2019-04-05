// Scheduler contructor function
class Scheduler {

    // only one constructor can be defined
    constructor() {

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
}

let scheduler = new Scheduler();
console.log(scheduler.getNextPlayTime());