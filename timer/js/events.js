import {
  buttonPause,
  buttonPlay,
  buttonStop,
  buttonSet,
  buttonDecrease,
  buttonIncrease,
  natureCard,
  rainCard,
  coffeeCard,
  fireCard,
  blueNatureCard,
  blueRainCard,
  blueCoffeeCard,
  blueFireCard
} from "./elements.js";

export default function events({ controls, timer, sound }) {

  buttonPlay.addEventListener('click', function() {
    controls.play()
    timer.countdown()
    sound.pressButton()
  })

  buttonPause.addEventListener('click', function() {
    controls.pause()
    timer.hold()
    sound.pressButton()
  })

  buttonStop.addEventListener('click', function() {
    controls.reset()
    timer.reset()
    sound.pressButton()
  })
  
  function soundReset() {
    natureCard.classList.remove('hide')
    rainCard.classList.remove('hide')
    coffeeCard.classList.remove('hide')
    fireCard.classList.remove('hide')
    blueNatureCard.classList.add('hide')
    blueRainCard.classList.add('hide')
    blueCoffeeCard.classList.add('hide')
    blueFireCard.classList.add('hide')
    sound.natureAudio.pause()
    sound.rainAudio.pause()
    sound.coffeeAudio.pause()
    sound.fireAudio.pause()
  }

  natureCard.addEventListener('click', function() {
    soundReset()
    sound.natureAudio.play()
    natureCard.classList.add('hide')
    blueNatureCard.classList.remove('hide')
  })

  blueNatureCard.addEventListener('click', function() {
    natureCard.classList.remove('hide')
    blueNatureCard.classList.add('hide')
    sound.natureAudio.pause()
  })

  rainCard.addEventListener('click', function() {
    soundReset()
    sound.rainAudio.play()
    rainCard.classList.add('hide')
    blueRainCard.classList.remove('hide')
  })

  blueRainCard.addEventListener('click', function() {
    sound.rainAudio.pause()
    rainCard.classList.remove('hide')
    blueRainCard.classList.add('hide')
  })

  coffeeCard.addEventListener('click', function() {
    soundReset()
    sound.coffeeAudio.play()
    coffeeCard.classList.add('hide')
    blueCoffeeCard.classList.remove('hide')
  })

  blueCoffeeCard.addEventListener('click', function() {
    sound.coffeeAudio.pause()
    coffeeCard.classList.remove('hide')
    blueCoffeeCard.classList.add('hide')
  })

  fireCard.addEventListener('click', function() {
    soundReset()
    sound.fireAudio.play()
    fireCard.classList.add('hide')
    blueFireCard.classList.remove('hide')
  })

  blueFireCard.addEventListener('click', function() {
    sound.fireAudio.pause()
    fireCard.classList.remove('hide')
    blueFireCard.classList.add('hide')
  })

  buttonIncrease.addEventListener('click', function() {
    timer.increase()
  })

  buttonDecrease.addEventListener('click', function() {
    timer.decrease()
  })



  buttonSet.addEventListener('click', function () {
    let newMinutes = controls.getMinutes()

    if (!newMinutes) {
      timer.reset()
      return
    }

    timer.updateMinutes(newMinutes)
    timer.updateDisplay(newMinutes, 0)
  })
}