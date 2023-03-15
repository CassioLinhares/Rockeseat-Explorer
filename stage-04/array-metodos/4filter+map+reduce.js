//RETORNAR A SOMA DO DOBRO DE TODOS OS PARES

//FILTER() = filtrar pares
//MAP() = dobrar valores
//REDUCE() = somar todos os elementos

const numeros = [1,4,2,5,7,14,25,75,42,9,12]

const num = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor = valor * 2)
.reduce((ac, valor) => ac += valor)
console.log(num)