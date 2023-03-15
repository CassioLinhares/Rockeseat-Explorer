import { Sound } from "./sound.js";

// obj como parametro, serve p/ passar as dependencias de c/ function dentro de timer
//nome: injeção de dependencias
export default function Timer( 
    {
        minutesDisplay, 
        secondsDisplay,  
        resetControls,
    } 
    ) {
    let timerTimeOut
    let minutes = Number(minutesDisplay.textContent)

    function updateMinutes(newMinutes) {
        minutes = newMinutes
    }

    function updateDisplay(newMinutes, seconds) {
        newMinutes = newMinutes === undefined ? minutes : newMinutes
        seconds = seconds === undefined ? 0 : seconds
        minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }
    
    function reset() {
        updateDisplay(minutes, 0)
        clearTimeout(timerTimeOut)
    }
    
    function countdown() {//countdown = contagem regressiva
    
        timerTimeOut = setTimeout(function () {
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)
            let isFineshed = minutes <= 0 && seconds <= 0 //clean code
    
            updateDisplay(minutes, 0)
    
            if (isFineshed) {
                resetControls()
                updateDisplay()
                Sound().timeEnd()
                return
            }
    
            if (seconds <= 0) {
                seconds = 60
                --minutes
            }
            updateDisplay(minutes, String(seconds - 1).padStart(2, '0'))
    
            countdown()
        }, 1000)
    }

    function pause() {
        clearTimeout(timerTimeOut)
    }

    return {
        reset,
        countdown,
        updateDisplay,
        updateMinutes,
        pause
    }
}