//REDUCE() = objetivo é reduzir o artay a um unico elemento
//possui 4 parametros (acumulador, valor, indice, array)

const num = [1,4,2,5,7,14,25,75,42,9,12]

//somar todos os elementos do array
const reduzidos = num.reduce(function(acumulador, valor){
    acumulador += valor
    return acumulador
})
// console.log(reduzidos)


//somar todos os numeros pares
const somarPares = num.reduce(function(acumulador, valor){
    if(valor % 2 === 0) acumulador += valor
    return acumulador
}, 0)
    // console.log(somarPares)

//return somente numeros pares (filter)
const paresFilter = num.reduce(function(acumulador, valor){
    if(valor % 2 === 0) acumulador.push(valor) 
    return acumulador
},[])
// console.log(paresFilter)


//dobrar o valor dos elementos do array(map)
const dobroMap = num.reduce(function(acumulador, valor){
    acumulador.push(valor * 2)
    return acumulador
}, [])
// console.log(dobroMap)


//retorna a pessoa mais velha

const pessoas = [
    {nome: 'cassio', idade: 23},
    {nome: 'Thailliny', idade: 23},
    {nome: 'Eduarda', idade: 22},
    {nome: 'Alessandra', idade: 26},
    {nome: 'Valmor', idade: 57},
    {nome: 'Marcia', idade: 55}
]

//quando nao se defini o valor de acumulador ele sera o do 1o obj, 
//e de valor sera do 2o obj. 
//se definir o valor do acumulador ele passa a ser o valor do 2o obj e assim sucessivamente
const maisVelho = pessoas.reduce(function(acumulador, valor){
    if (acumulador.idade > valor.idade) return acumulador
    return valor
})
    console.log(maisVelho)