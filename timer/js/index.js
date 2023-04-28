// default import
// import resetControls from "./controls.js"
// named import
// import {Timer} from "./timer.js"

import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  minutesDisplay,
  buttonDecrease,
  buttonIncrease,
  secondsDisplay
} from "./elements.js"

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonDecrease,
  buttonIncrease,
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})

const sound = Sound()
Events({ controls, timer, sound })
