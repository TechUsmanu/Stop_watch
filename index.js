let timerInterval;
let timerRunning = false;
let totalTime;
let remainingTime;

function startStop( ) {
  const timeInput = document.getElementById('timeInput');
  const startStopButton = document.querySelector('#controls button');

  if (!timerRunning) {
    // Start the timer
    totalTime = parseInt(timeInput.value) || 0;
    if (totalTime > 0) {
      remainingTime = totalTime;
      timerInterval = setInterval(updateTimer, 1000);
      startStopButton.textContent = 'Stop';
      timerRunning = true;
    }
  } else {
    // Stop the timer
    clearInterval(timerInterval);
    startStopButton.textContent = 'Start';
    timerRunning = false;
  }
}

function reset() {
  clearInterval(timerInterval);
  document.getElementById('controls').querySelector('button').textContent = 'Start';
  timerRunning = false;
  document.getElementById('timeInput').value = '';
  updateTimerDisplay(0);
}

function updateTimer() {
  if (remainingTime > 0) {
    remainingTime--;
    updateTimerDisplay(remainingTime);
  } else {
    clearInterval(timerInterval);
    document.querySelector('#controls button').textContent = 'Start';
    timerRunning = false;
  }
}

function updateTimerDisplay(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  document.getElementById('timer').textContent = formattedTime;
}