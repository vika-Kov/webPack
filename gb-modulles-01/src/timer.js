import "./howler.min.js";

let timer = null;

const sound = new Howl({
  src: ["./src/gun.mp3"],
});

export const startTimer = (hours, minutes, seconds, display) => {
  timer = setInterval(() => {
    let strHours = "",
      strSeconds = "",
      strMinutes = "";

    strHours = hours < 10 ? "0" + hours : hours;

    strMinutes = minutes < 10 ? "0" + minutes : minutes;

    strSeconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = strHours + ":" + strMinutes + ":" + strSeconds;

    if (--seconds < 0) {
      seconds = 59;
      if (--minutes < 0) {
        minutes = 59;
        if (--hours < 0) {
          seconds = 0;
          minutes = 0;
          clearInterval(timer);
          sound.play();
        }
      }
    }
  }, 1000);
};

export const stopTimer = () => {
  console.log("STOP");
  clearInterval(timer);
  sound.play();
};
