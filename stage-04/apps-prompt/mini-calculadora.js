let n1 = Number(prompt('Digite um número:'))
let n2 = Number(prompt('Digite outro número:'))
let  result = 0;
let operator = prompt("Digite qual operação matemática quer realizar? (+; -; *; /; %")

if (operator == '+') {
    result = n1 + n2
    alert(`Resultado é: ${result}`)
} else if (operator == '-') {
    result = n1 - n2
    alert(`Resultado é: ${result}`)
} else if (operator == '*') {
    result = n1 * n2
    alert(`Resultado é: ${result}`)
} else if (operator == '/') {
    result = n1 / n2
    alert(`Resultado é: ${result}`)
} else {
    result = n1 % n2
    alert(`Resultado é: ${result}`)
}