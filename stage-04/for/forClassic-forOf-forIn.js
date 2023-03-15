let num = [1,2,3]
const pessoas = [
    {nome: 'cassio', idade: 23},
    {nome: 'Thailliny', idade: 23},
    {nome: 'Eduarda', idade: 22},
    {nome: 'Alessandra', idade: 26},
    {nome: 'Valmor', idade: 57},
    {nome: 'Marcia', idade: 55}
]

//SINTAXE = for(INICIALIZAÇÃO; CONDIÇÃO; INCREMENTO){}
for (let i = 1; i <= pessoas.length; i++) {
    console.log(i)
}

console.log("==================================OF")

for (const i of pessoas) {
    console.log(i)
    //percorre os elementos 
}
console.log("==================================IN")
for (const i in pessoas) {
    console.log(pessoas[i])
    //percorre os indices
}