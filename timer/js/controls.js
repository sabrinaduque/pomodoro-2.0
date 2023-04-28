export default function Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop
}) {


  function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')
  }

  function pause() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }

  function reset() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonStop.classList.add('hide')
  }

  function containsOnlyNumbers(str) {
    return /^[0-9]+$/.test(str);
  }

  function getMinutes() {
    let newMinutes = prompt('Quantos minutos?')
    if (!newMinutes || newMinutes == "e" || containsOnlyNumbers(newMinutes) == false|| newMinutes > 60 || newMinutes < 0) {
      alert("erro")
      return reset()
    }
    return newMinutes
  }

  return {
    reset,
    play,
    pause,
    getMinutes,
  }
}
