import Sounds from "./sounds.js"

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
}) {

  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)
  

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function increase() {
    if (minutes >= 55 && minutes <= 60) {
      updateDisplay(updateMinutes(60, 0))
    } else {
      updateDisplay(updateMinutes(Number(minutes + 5)), 0)
    }
  }

  function decrease() {
    if (minutes >= 0 && minutes <= 5) {
      updateDisplay(updateMinutes(0, 0))
    } else {
      updateDisplay(updateMinutes(Number(minutes - 5)), 0)
    }
  }

  function reset() {
    updateDisplay(minutes, 0)
    hold()
  }

  function countdown() {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0

      updateDisplay(minutes, 0)

      if (isFinished) {
        resetControls()
        updateDisplay()
        Sounds().timerEnd()
        return
      }

      if (seconds <= 0) {
        seconds = 60
        --minutes
      }

      updateDisplay(minutes, String(seconds - 1))

      countdown()
    }, 1000)
  }

  function updateMinutes(newMinutes) {
    minutes = Number(newMinutes)
  }


  function hold() {
    clearTimeout(timerTimeOut)
  }

  return {
    countdown,
    reset,
    updateDisplay,
    updateMinutes,
    increase,
    decrease,
    hold
  }
}
