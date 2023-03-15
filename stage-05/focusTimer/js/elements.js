const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')

const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

//2 maneiras pra fazer:
//1- export o obj sem nome e no import chamar dentro das {todos objs de export}
//2- atribuir nome ao obj no export, import o obj, fazer desestruturação do obj
//desestruturação = {pego os valores dentro do export "buttonPlay, buttonPause"} = nomeDoObj do export
export {
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop,
    buttonSoundOff,
    buttonSoundOn,
    minutesDisplay,
    secondsDisplay
}

//caso gere alguma mudança no html so ir direto nesse arquivo e alterar os seletores