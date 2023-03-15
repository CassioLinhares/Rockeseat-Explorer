//FILTER() = filtra elementos do array por meio de uma function de callback
//RETURN array do mesmo tamanho ou menor
//recebe 3 parametros = valor, indice, array

//filtrar numeros maiores que 10
const num = [1,4,2,5,7,14,25,75,42,9,12]
const filtrados = num.filter(n => n>10)
// console.log(filtrados)


//filtrar pessoas com 7 ou + letras
//filtrar pessoas com 30 anos ou +
//filtrar pessoas que terminam com a
const pessoas = [
    {nome: 'cassio', idade: 23},
    {nome: 'Thailliny', idade: 23},
    {nome: 'Eduarda', idade: 22},
    {nome: 'Alessandra', idade: 26},
    {nome: 'Valmor', idade: 57},
    {nome: 'Marcia', idade: 55}
]

const filtrados2 = pessoas.filter(obj => obj.nome.length >= 7)
// console.log(filtrados2)

const filtrados3 = pessoas.filter(obj => obj.idade >= 30)
// console.log(filtrados3)

const filtrados4 = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'))
// console.log(filtrados4)

