document.addEventListener('DOMContentLoaded', function () {
    let timerDuration = 1500; // default 25 minutes
    let countdown;
    const display = document.querySelector('.timer-display');
    const startBtn = document.querySelector('.start-btn');
    const pauseBtn = document.querySelector('.pause-btn');
    const stopBtn = document.querySelector('.stop-btn');
    const durationSlider = document.querySelector('.duration-slider');

    function startTimer(duration) {
        let timer = duration, minutes, seconds;
        countdown = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                timer = duration;
                clearInterval(countdown);
                // Trigger notification
                alert("Time's up!");
            }
        }, 1000);
    }

    startBtn.onclick = function () {
        clearInterval(countdown);
        startTimer(timerDuration);
    };

    pauseBtn.onclick = function () {
        clearInterval(countdown);
    };

    stopBtn.onclick = function () {
        clearInterval(countdown);
        display.textContent = "00:00";
    };

    durationSlider.oninput = function () {
        timerDuration = this.value * 60; // Convert to seconds
    };
});
