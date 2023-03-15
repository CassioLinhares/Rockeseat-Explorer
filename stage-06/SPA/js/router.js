export class Router {
    routes = {}
    //dentro de CLASS = funcoes não precisam da palavra chave FUNCTION
    add(routeName, page){
        this.routes[routeName] = page
    }


    route(event) {
        event = event || window.event
        event.preventDefault()

        //pushState(tipoDeDado, unused = Não usado, URL(onde ela ta no meu arquivo)) = adiciona um estado no historico do window
        window.history.pushState({}, '', event.target.href)
        this.handle()
    }

    handle() {
        const app = document.querySelector('#app')
        //pathname = caminho da rota ou = /algumaCoisa
        const { pathname } = window.location //location varias prop. relacionada a url
        // console.log(pathname)
        const route = this.routes[pathname] || this.routes[404]
        
        fetch(route)
            .then(data => data.text()) //transformando o dados que ele encontrou em route em texto
            .then(html => { //html = return da arrow function go back
                app.innerHTML = html //transformando o return em HTML
            })
    }
}

//mecânica do carro