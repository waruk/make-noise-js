class Logger {
    constructor (logElement) {
        this.logElement = logElement;
    }

    logInfo(message, important = false) {
        let newLine = document.createElement("div");
        if (important)
            newLine.classList.add("bold-red-text");
    
        let currentDate = Date.now();
        let dateFormat = {
            year: 'numeric', month: 'numeric', day: 'numeric',
            hour: 'numeric', minute: 'numeric', second: 'numeric'
        }
        newLine.innerText = new Intl.DateTimeFormat('ro-RO', dateFormat).format(currentDate) + " : " + message;
        this.logElement.insertBefore(newLine, logElement.firstChild);
    
        console.log(newLine.innerText);
    }
}

export { Logger };