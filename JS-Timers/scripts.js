let timerInterval;

function startTimer() {
    const duration = document.getElementById("duration").value;
    let remainingTime = parseInt(duration, 10);

    if (isNaN(remainingTime) || remainingTime <= 0) {
        alert("Please enter a valid number greater than 0.");
        return;
    }

    const timerDisplay = document.getElementById("timerDisplay");

    timerInterval = setInterval(() => {
        remainingTime--;

        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;

        timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            timerDisplay.textContent = "Time's Up!";
            alert("Time's up!");
        }
    }, 1000);
}

function showNotification() {
    const delayTime = document.getElementById("delayTime").value;

    if (isNaN(delayTime) || delayTime <= 0) {
        alert("Please enter a valid delay time in milliseconds.");
        return;
    }

    setTimeout(() => {
        document.getElementById("notificationDisplay").textContent = "This is your delayed notification!";
    }, delayTime);
}

let repeatInterval;

function startRepeatingNotification() {
    const intervalTime = document.getElementById("intervalTime").value;

    if (isNaN(intervalTime) || intervalTime <= 0) {
        alert("Please enter a valid interval time in milliseconds.");
        return;
    }

    repeatInterval = setInterval(() => {
        document.getElementById("repeatNotificationDisplay").textContent = "This is a repeated notification!";
    }, intervalTime);
}

function stopRepeatingNotification() {
    clearInterval(repeatInterval);
    document.getElementById("repeatNotificationDisplay").textContent = "";
}
