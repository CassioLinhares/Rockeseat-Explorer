let result = Number(prompt('Adivinhe o número que estou pensando! (0-10)'))
let random = Math.round(Math.random() * 10)
let xattempts = 1

while(result != random){
    result = prompt("Errado! tente novamente:")
    xattempts++
}

xattempts < 20 ?
alert(`Parabéns! vc acertou em: ${xattempts} tentativa(s)`) :
alert(`Foi foda hein! conseguiu em: ${xattempts} tentativas`)
