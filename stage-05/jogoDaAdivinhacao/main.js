let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

const btnTry = document.querySelector('.btnTry')
const btnReset = document.querySelector('.btnReset')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

const input = document.querySelector('#inputNumber')

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', resetClick)
document.addEventListener('keydown', catchEnter)

function catchEnter(event){
  if(event.key == 'Enter' && screen1.classList.contains('hide')){
    resetClick()
  }
}

function handleTryClick(event) {
  event.preventDefault()
  
  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    document.querySelector('h2').innerText = `Acertou em ${xAttempts} vezes` 
    //envés de documente poderia ser SCREEN2. pq posso pesquisar dentro do elemento apartir de outros lugares.
  }
  checkNumber()
  inputNumber.value = ''
  xAttempts++
}

function checkNumber(){
  if(Number(inputNumber.value) > 10 || Number(inputNumber.value) < 0 || Number(inputNumber.value.length) == ''){
     alert(`Número Inválido! Tente novamente.`)
  }
}

function resetClick(event){
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen(){
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}