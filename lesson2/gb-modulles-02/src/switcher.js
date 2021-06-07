const switchAppToCalc = document.getElementById("switch_datecalc");
const switchAppToTimer = document.getElementById("switch_timer");

const dateCalcForm = document.getElementById("datecalc");
const timerForm = document.getElementById("timer");

document.addEventListener("DOMContentLoaded", switchApp);
switchAppToCalc.addEventListener("click", switchApp);
switchAppToTimer.addEventListener("click", switchApp);

function switchApp(event) {
  event.preventDefault();
  const app = event.target.name;
  if (!app) {
    dateCalcForm.style.display = "block";
    timerForm.style.display = "none";
  }
  if (app === "switch_timer") {
    dateCalcForm.style.display = "none";
    timerForm.style.display = "block";
  }
  if (app === "switch_datecalc") {
    dateCalcForm.style.display = "block";
    timerForm.style.display = "none";
  }
}
