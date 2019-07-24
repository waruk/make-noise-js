// convert to a class
// & have a property for log target element that is set through the constructor
// then eliminate the parameter "logElement" of logInfo function

function logInfo(logElement, message, important = false) {
    let newLine = document.createElement("div");
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

export { logInfo };