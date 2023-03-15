let menu // precisa ser declarado senao vai gerar loop infinito
let lista = []
while (menu != 4) { // usado while quando não se sabe a quant. de loops que terão
    menu = Number(
        prompt(`olá! Digite o nº da opção desejada:\n 
            1.Cadastrar item na lista
            2.Mostrar itens cadastrados
            3.Deletar último item
            4.Sair do programa`))

    switch (menu) {
        case 1:
            let inserir = prompt('Digite o item:')
            lista.push(inserir)
            break;

        case 2:
            if (lista.length == 0) {
                alert('Lista vazia')
            } else {
                alert(lista)
            }
            break;

        case 3:
            if (lista.length != 0) {
                let removido = lista.pop()
                alert(`item removido: ${removido}\n Sua lista é: ${lista}`)
            } else {
                alert('Lista vazia, 1º adicione 1 item')
            }
            break;

        case 4:
            alert('tchau!')
            break;

        default:
            alert("Opção invalida! Tente novamente")
            break;
    }
}