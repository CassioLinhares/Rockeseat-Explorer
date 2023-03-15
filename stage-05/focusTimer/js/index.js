import Controls from "./controls.js"
import Timer from "./timer.js"
import { Sound } from "./sound.js";
import Events from "./events.js";
import {
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop,
    minutesDisplay,
    secondsDisplay
} from "./elements.js";

const sound = Sound()

const controls = Controls(
    {
        buttonPause,
        buttonPlay,
        buttonStop,
        buttonSet
    })
    //timer = atribui as dependecias de timer.js / uso essa variavel onde vou usar o return da function
    //como ele tem mesmo nome lá e aqui não preciso usar prop. chave+valor 
    //js entende que ele possui chave e valor de mesmo nome
    const timer = Timer(
        {
        minutesDisplay,
        secondsDisplay,
        resetControls: controls.reset 
        //chamei como prop pq la dentro do time ele tbm vai exe como function
    })

    Events( {controls, sound, timer} )
    
