import { Router } from "./router.js";

const router = new Router()
router.add("/", '/pages/home.html')
router.add( "/about", '/pages/about.html')
router.add( "/contact", '/pages/contact.html')
router.add(404, '/pages/404.html')

// const routes = {
//     "/" : '/pages/home.html',
//     "/about" : '/pages/about.html',
//     "/contact" : '/pages/contact.html',
//     404 : '/pages/404.html'
// }

// function route(event) {
//     event = event || window.event
//     event.preventDefault()

//     //pushState(tipoDeDado, unused = Não usado, URL(onde ela ta no meu arquivo)) = adiciona um estado no historico do window
//     window.history.pushState({}, '', event.target.href)
//     handle()
// }

// function handle() {
//     const app = document.querySelector('#app')
//     //pathname = caminho da rota ou = /algumaCoisa
//     const { pathname } = window.location //location varias prop. relacionada a url
//     // console.log(pathname)
//     const route = routes[pathname] || routes[404]

//     fetch(route)
//     .then(data => data.text()) //transformando o dados que ele encontrou em route em texto
//     .then(html => { //html = return da arrow function go back
//         app.innerHTML = html //transformando o return em HTML
//     })
// }

router.handle() // comecar na page home
window.onpopstate = () => router.handle()
window.route = () => router.route()

//operando o carro