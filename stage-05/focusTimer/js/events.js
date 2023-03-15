import {
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop,
    buttonSoundOff,
    buttonSoundOn,
}from "./elements.js";

export default function Events( {controls, sound, timer} ) {

    buttonPlay.addEventListener('click', function () {
        controls.play()
        timer.countdown()
        sound.pressButton()
    })
    
    buttonPause.addEventListener('click', function () {
        controls.pause()
        timer.pause()
        sound.pressButton()
    })
    
    buttonStop.addEventListener('click', function () {
        controls.reset()
        timer.reset()
        sound.pressButton()
    })
    
    buttonSet.addEventListener('click', function () {
        let newMinutes = controls.getMinutes()
        if (!newMinutes) {
            timer.reset()
            return
        }
        timer.updateDisplay(newMinutes, 0)
        timer.updateMinutes(newMinutes) // click em stop ele reseta o timer p/ valor new
    })
    
    buttonSoundOff.addEventListener('click', function () {
        buttonSoundOn.classList.remove('hide')
        buttonSoundOff.classList.add('hide')
        sound.bgAudio.play()
    })
    
    buttonSoundOn.addEventListener('click', function () {
        buttonSoundOn.classList.add('hide')
        buttonSoundOff.classList.remove('hide')
        sound.bgAudio.pause()
    })

    return
        {
            buttonPause,
            buttonPlay,
            buttonSet,
            buttonStop,
            buttonSoundOff,
            buttonSoundOn
        }
    }
