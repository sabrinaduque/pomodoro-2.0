
export default function () {
  const buttonPressAudio = new Audio("audios/buttonpress.wav")
  const kitchenTimer = new Audio("audios/kichen-timer.wav")
  const natureAudio = new Audio("audios/nature.wav")
  const rainAudio = new Audio("audios/rain.wav")
  const coffeeAudio = new Audio("audios/coffee.wav")
  const fireAudio = new Audio("audios/fire.wav")


  natureAudio.loop = true
  rainAudio.loop = true
  coffeeAudio.loop = true
  fireAudio.loop = true

  function pressButton() {
    buttonPressAudio.play()
  }

  function timerEnd() {
    kitchenTimer.play()
  }


  return {
    pressButton,
    timerEnd,
    natureAudio,
    rainAudio,
    coffeeAudio,
    fireAudio
  }
}