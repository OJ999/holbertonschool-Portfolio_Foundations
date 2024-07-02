document.addEventListener('DOMContentLoaded', () => {
  const exercises = JSON.parse(localStorage.getItem('currentExercises')) || [];

  let currentExerciseIndex = 0;
  let currentSet = 1;
  let currentRep = 1;
  let timerInterval;
  let paused = false;

  const exerciseNameElem = document.getElementById('exercise-name');
  const timerElem = document.getElementById('timer');
  const breakTimeElem = document.getElementById('break-time');
  const setRepInfoElem = document.getElementById('set-rep-info');
  const pauseBtn = document.getElementById('pause-btn');
  const continueBtn = document.getElementById('continue-btn');

  pauseBtn.addEventListener('click', pauseWorkout);
  continueBtn.addEventListener('click', continueWorkout);

  function startWorkout() {
    pauseBtn.style.display = 'inline-block';
    startExercise();
  }

  function startExercise() {
    if (currentExerciseIndex >= exercises.length) {
      exerciseNameElem.textContent = 'Workout Complete!';
      timerElem.textContent = '00:00';
      setRepInfoElem.textContent = '';
      breakTimeElem.style.display = 'none';
      pauseBtn.style.display = 'none';
      continueBtn.style.display = 'none';
      return;
    }

    const exercise = exercises[currentExerciseIndex];
    exerciseNameElem.textContent = exercise.name;
    currentSet = 1;
    currentRep = 1;
    startRep();
  }

  function startRep() {
    const exercise = exercises[currentExerciseIndex];
    setRepInfoElem.textContent = `Set ${currentSet} / ${exercise.sets} | Rep ${currentRep} / ${exercise.reps}`;
    let timeLeft = exercise.timePerRep;

    timerInterval = setInterval(() => {
      if (!paused) {
        timerElem.textContent = formatTime(timeLeft);
        if (timeLeft === 0) {
          clearInterval(timerInterval);
          nextRepOrSet();
        } else {
          timeLeft--;
        }
      }
    }, 1000);
  }

  function nextRepOrSet() {
    const exercise = exercises[currentExerciseIndex];

    if (currentRep < exercise.reps) {
      currentRep++;
      startRep();
    } else if (currentSet < exercise.sets) {
      currentRep = 1;
      currentSet++;
      showBreakTime(exercise.breakTime);
    } else {
      currentExerciseIndex++;
      showBreakTime(exercise.breakTime);
    }
  }

  function showBreakTime(breakTime) {
    breakTimeElem.style.display = 'block';
    let timeLeft = breakTime;

    timerInterval = setInterval(() => {
      if (!paused) {
        breakTimeElem.textContent = `Break: ${formatTime(timeLeft)}`;
        if (timeLeft === 0) {
          clearInterval(timerInterval);
          breakTimeElem.style.display = 'none';
          startExercise();
        } else {
          timeLeft--;
        }
      }
    }, 1000);
  }

  function pauseWorkout() {
    paused = true;
    pauseBtn.style.display = 'none';
    continueBtn.style.display = 'inline-block';
  }

  function continueWorkout() {
    paused = false;
    pauseBtn.style.display = 'inline-block';
    continueBtn.style.display = 'none';
  }

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  // Start the workout on page load
  startWorkout();
});
