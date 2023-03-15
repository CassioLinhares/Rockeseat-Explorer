//MAP() = mapeia os elementos do array alterando seus valores s/ altera a quant. de elementos
// recebe 3 parametros = valor, indice, array

//dobre os valores do array
const num = [1,4,2,5,7,14,25,75,42,9,12]
const mapeados = num.map(valor => valor*2)
// console.log(mapeados)


//return apenas a string com o nome da pessoa
//remova a chave nome do obj
//adicionar chave id ao array

const pessoas = [
    {nome: 'cassio', idade: 23},
    {nome: 'Thailliny', idade: 23},
    {nome: 'Eduarda', idade: 22},
    {nome: 'Alessandra', idade: 26},
    {nome: 'Valmor', idade: 57},
    {nome: 'Marcia', idade: 55}
]

const mapeados2 = pessoas.map(obj => obj.nome)
// console.log(mapeados2)

const mapeados3 = pessoas.map(obj => ({idade: obj.idade})) // retornando um novo obj
// console.log(mapeados3)

const mapeados4 = pessoas.map(function(obj, indice){
    const newobj = {...obj} //copiar o obj mas pra nao alterar o original
    newobj.id = indice + 1
    return newobj
})
console.log(mapeados4)
