const lista = []
alert('Digite um item p/ compor uma lista de compras')
for (let i = 1; i <= 5; i++) {
    let item = prompt(`Digite o item ${i}`)
    lista.push(item)
}
alert(`Sua lista é:\n ${lista}`)

let maisItem
while (maisItem != 'não') {
    maisItem = prompt("quer adicionar mais algum item? (sim | não)")
    if (maisItem == 'sim') {
        let item = prompt(`Digite o item:`)
        lista.push(item)
    } else {
        alert("Boas compras!")
    }
}

alert(`Sua lista é:\n ${lista}`)