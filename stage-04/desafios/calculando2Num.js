let n1 = Number(prompt("Digite um número:"))
let n2 = Number(prompt("Digite outro número:"))
let operator = prompt(`Escolha qual operação quer realizar: ( + | - | * | / | % | ** )`)
let result

switch (operator) {
    case '+':
        result = n1 + n2
        alert(`O resultado da operação é: ${result}`)
        break;
    case '-':
        result = n1 - n2
        alert(`O resultado da operação é: ${result}`)
        break;
    case '*':
        result = n1 * n2
        alert(`O resultado da operação é: ${result}`)
        break;
    case '/':
        result = n1 / n2
        alert(`O resultado da operação é: ${result}`)
        break;
    case '%':
        result = n1 % n2
        alert(`O resultado da operação é: ${result}`)
        break;
    case '**':
        result = n1 ** n2
        alert(`O resultado da operação é: ${result}`)
        break;

    default:
        alert(`Você inseriu um valor inválido. Tente novamente!`)
        break;
}

if (result % 2 === 0) {
    alert(`vc obteve um par`)
} else {
    alert(`vc obteve um ímpar`)
}

if (n1 === n2) {
    alert(`Os números digitados são iguais`)
} else {
    alert(`Os números digitados são diferentes`)
}