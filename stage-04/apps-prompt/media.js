let nome = prompt('Digite o seu nome:')
let n1 = Number(prompt('Digite a nota da 1a prova:'))
let n2 = Number(prompt('Digite a nota da 2a prova:'))
let n3 = Number(prompt('Digite a nota da 3a prova:'))

let media = (n1+n2+n3)/3

if (media > 6) {
    alert(`Parabéns ${nome}! vc foi aprovado com média de: ${media.toFixed(2)}`)
} else {
    alert(`vc foi reprovado ${nome}! :( com média de: ${media.toFixed(2)}`)
}