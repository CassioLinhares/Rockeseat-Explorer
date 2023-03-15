export class GithubUser{
    //método STATIC = não precisa criar o NEW (usado dentro do arquivo js)
    static search(username){
        const endpoint = `https://api.github.com/users/${username}`

        return fetch(endpoint)
        .then(data => data.json())
        .then( ({login, name, public_repos, followers}) => ({
            login,
            name,
            public_repos,
            followers
        }) )
    }
}

export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()
        //usa-se .THEN pq meu método return uma promise
        // GithubUser.search('maykbrito').then(user => console.log(user)) 
    }
    
    /*localStorage = API do browser que armazena dados em formato JSON ou STRING
    this.entriesData está esperando um array pra funcionar*/
    load(){
        this.entriesData = JSON.parse(localStorage.getItem('@github-Favorites:')) || [] 
    }

    //'@github-Favorites:' = precisa ser o mesmo valor que está em load()
    //JSON.stringify() = transforma os dados passados dentro do () em string
    //SAVE() = armazena os dados de THIS.ENTRIESDATA NO LOCALSTORAGE
    save(){
        localStorage.setItem('@github-Favorites:', JSON.stringify(this.entriesData))
    }

    //function se tornou uma promise - permite lá na function ONADD() prosseguir usando .THEN dessa function ADD()
    //ASYNC = avisando que é uma function assincrona
    //AWAIT = espera o carregamento da promise
    //TRY = tente fazer isso
    //CATCH = captura o erro
    //THROW = lança o erro p/ o catch
    async add(username){
        try {
            const userExists = this.entriesData.find(entry => entry.login === username)
            console.log(userExists)
            if (userExists) {
                throw new Error('Usuário já cadastrado!')
            }

            const user = await GithubUser.search(username)
            // console.log(user)
            if (user.login === undefined) {
                throw new Error('Usuário não encontrado!')
            }
            this.entriesData = [user, ...this.entriesData]
            this.update() // transforma esses dados no meu tr(html)
            this.save() 
        } catch (error) {
            alert(error.message)
        }
    }

    delete(user){
        const filteredEntriesData = this.entriesData.filter((entry) => entry.login !== user.login)
        this.entriesData = filteredEntriesData
        this.update()
        this.save()
        // console.log(filteredEntriesData)
        //FILTER - return false = remove o user | return true = mantém o user 
    }
}

export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)
        this.tbody = this.root.querySelector('tbody')
        this.update()
        this.onAdd()
    }

    onAdd(){
        const btn = this.root.querySelector('.search button')
        btn.onclick = () => {
            const {value} = this.root.querySelector('#input-search')
            // console.dir(value) //.DIR = return o resultado como obj
            this.add(value)
        }
    }

    update() {
        this.removeAllTr()

        //forEach = para cada
        //(user) = cada entriesData ou seja, cada obj
        this.entriesData.forEach((user) => {
            const row = this.createRow()
            row.querySelector('.user img').src = `https://github.com/${user.login}.png`
            row.querySelector('.user img').alt = `Imagem de ${user.name}`
            row.querySelector('.user a').href = `https://github.com/${user.login}.png`
            row.querySelector('.user p').textContent = `${user.name}`
            row.querySelector('.user span').textContent = `${user.login}`
            row.querySelector('.repositorios').textContent = `${user.public_repos}`
            row.querySelector('.followers').textContent = `${user.followers}`

            row.querySelector('.btn-remove').onclick = () => {
                const isOK = confirm('Tem certeza que deseja deletar o usuário?')
                if (isOK) {
                    this.delete(user)
                }
            }

            //append = acrescentar
            //Html criado pela DOM (como feito na function createRow()) - não aceita html puro
            this.tbody.append(row)
        })
    }

    createRow() {
        const tr = document.createElement('tr')
        //conteiner c/ os dados não é aceito, é necessário criar o elemento
        tr.innerHTML = `
        <td class="user">
            <img src="https://github.com/diego3g.png" alt="">
            <a href="https://github.com/diego3g" target="_blank">
                <p>Diego Fernandes</p>
                <span>diego3g</span>
            </a>
        </td>
        <td class="repositorios">48</td>
        <td class="followers">22503</td>
        <td class="btn-remove">&times;</td>
        `
        return tr
    }

    removeAllTr() {
        this.tbody.querySelectorAll('tr').forEach((tr) => {
            tr.remove()
        })
    }
}