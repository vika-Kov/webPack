import { diffDates, diffToHtml } from "./datecalc.js"; // 1
import { formatError } from "./utils.js"; // 2
import { startTimer, stopTimer } from "./timer.js";
import "../styles/master.css";

const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");
// timer
const timerForm = document.getElementById("timer");
const timerCounter = document.getElementById("timer__counter");
const buttonStop = document.getElementById("timer_stop");

// calc
dateCalcForm.addEventListener("submit", handleCalcDates);
//timer
timerForm.addEventListener("submit", handleTimer);
buttonStop.addEventListener("click", handleStopTimer);

function handleCalcDates(event) {
  dateCalcResult.innerHTML = "";
  event.preventDefault();

  let { firstDate, secondDate } = event.target.elements;
  (firstDate = firstDate.value), (secondDate = secondDate.value);

  if (firstDate && secondDate) {
    const diff = diffDates(firstDate, secondDate); // 3
    dateCalcResult.innerHTML = diffToHtml(diff); // 4
  } else
    dateCalcResult.innerHTML = formatError(
      "Для расчета промежутка необходимо заполнить оба поля"
    ); // 5
}

function handleTimer(event) {
  console.log("Timer started!");
  timerCounter.innerHTML = "";
  event.preventDefault();

  let { hours, minutes, seconds } = event.target.elements;
  hours = hours.value ? +hours.value : 0;
  minutes = minutes.value ? +minutes.value : 0;
  seconds = seconds.value ? +seconds.value : 0;

  console.log(hours, minutes, seconds);
  startTimer(hours, minutes, seconds, timerCounter);
}

function handleStopTimer(event) {
  event.preventDefault();
  stopTimer(startTimer);
}
