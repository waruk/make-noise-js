function logInfo(message, important) {
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

    // also save log to db via web API
}