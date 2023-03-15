{
  let name, age, stars, isSubscribed;
  name = "cassio";
  age = 23;
  weigth = 72.4;
  isSubscribed = true;

  // console.log(name, age, weigth, isSubscribed);
}

console.log('BLOCO1=======================================================================')

alunos = [];

let student = {
  nome: "cassio",
  age: 23,
  weigth: 74.1,
  isSubscribed: true,
};
// alunos.push(student);
let john = {
  nome: "john",
  age: 33,
  weigth: 83.9,
  isSubscribed: true,
};
// alunos.push(john);

// console.log(typeof student);
// console.log(`${student.nome} de ${student.age} anos tem ${student.weigth} kg`);
alunos[0] = student;
alunos[1] = john;
// console.log(alunos)

console.log('BLOCO2=======================================================================')

//SOMANDO DOIS NUMEROS

const soma = function(n1, n2){
  let total = n1+n2;
  return total;
}

let number1 = 10;
let number2 = 20;

// console.log(`A soma é ${soma(number1, number2)}`)

console.log("BLOCO3=======================================================================")

//FUNCTION EXPRESS  = poderosa pois permite passar funcao como parametro para outra funcao.

const UmDado = function(){
  // console.log("algum dado");
}

function exeFuncao(funcao){
  // console.log("Executando funcao abaixo:");
  funcao();
}

UmDado();
exeFuncao(UmDado)

console.log("BLOCO4=======================================================================")

//FUNCTION CONSTRUCT 

//1a letra maiuscula
//expressão NEW é necessaria para chamar
//criar um novo objeto
//.THIS é necessário para acessar o contéudo do atributo ou método
//funciona como um facilitador na criação de objetos

function Person (nome, sobrenome){
  this.nome = nome
  this.sobrenome = sobrenome
  //.THIS SE REFERE A p1[...].
}

const p1 = new Person('cassio', 'linhares'); //criando um objeto Person e atribuindo a cte
// console.log(p1)

console.log("BLOCO5=======================================================================")

//FUNCTION SCOPE

//caso não tivesse o parametro retornaria nos 2 consoles.log() = "ORANGE" - SOBREESCREVERIA NOS 2 ESCOPOS.
let fruit = "banana";
function getFruit(fruit) {
  fruit = "orange";
  return fruit
}

// console.log(fruit);
// console.log(getFruit(fruit));
//retorna banana - orange

console.log("BLOCO6=======================================================================")

function Pessoa(nome, sobrenome){
  this.nome = nome;
  this.sobrenome = sobrenome;
} 

Pessoa.prototype.nomeCompleto = () => {this.nome + " " + this.sobrenome}

const pp1 = new Pessoa('cássio', 'Linhares')
const pp2 = new Pessoa('Thailliny', 'Osio')
// console.log(pp1)
// console.log(pp1.nomeCompleto)
// console.log(pp2)
// console.log(pp2.nomeCompleto)

console.log("BLOCO7=======================================================================")

//1- TRANSFORMA CADA PALAVRA DE UM TEXTO EM ARRAY
//2- CONVERTE CADA ELEMENTO DO ARRAY EM TEXTO SEPARANDO ENVES DE ESPAÇO (_)

let texto = "Eu quero viver o amor!"
let myArray = texto.split(" ");
// console.log(myArray);
let textoUnderline = myArray.join("_")
// console.log(textoUnderline);

console.log("BLOCO8=======================================================================")

//.FILL() - valor estatico p/ todos os índices.

let array1 = new Array(1,2,3)
array1.fill(3)

// console.log(array1)

console.log("BLOCO9=======================================================================")

//.FROM() - cria uma nova instancia de array quando passado um elemento iteravel
//EXEMPLO: ([0] = c | [1] = a | [2] = s | [3] = a)

//EXEMPLO1 
let string1 = 'casa'
let array2 = Array.from(string1)
// console.log(array2)

//EXEMPLO2
let array3 = Array.from(new Array(5))
// console.log(array3) //5 indices UNDEFINED

//EXEMPLO3 2o parametro função MAP
let array4 = Array.from(new Array(5), (x, index) => index + 1)
// console.log(array4) //5 indices a cada iteração soma-se 1

console.log("BLOCO10=======================================================================")
//.FILTER() = gera um novo array contento os elementos que passaram no filtro feito pela function de callback

//EXEMPLO 1
let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

function filterItems(query) {
  return fruits.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}
//INDEXOF() = retorna o 1o índice em que o el pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.
// console.log(filterItems('ap')); // ['apple', 'grapes']
// console.log(filterItems('an')); // ['banana', 'mango', 'orange']

//EXEMPLO 2

const pessoas = [
  {nome: "cássio", idade: 23},
  {nome: "Thailliny", idade: 23},
  {nome: "Márcia", idade: 54},
  {nome: "valmor", idade: 56},
]

const filter1 = pessoas.filter(valor => valor.nome.length >= 7)
const filter2 = pessoas.filter(valor => valor.idade <= 50)

// console.log(filter1)
// console.log(filter2)

//EXEMPLO 3

function maior(value){
  return value >= 5
}

const arrayA = [1,2,5,7,10]
const filtro = arrayA.filter(maior)

// console.log(filtro)

console.log("BLOCO11=======================================================================")

// INDEXOF() sintaxe: array.INDEXOF(elementoDePesquisa, pontoInicial)

// EXEMPLO1
let arrayb = ['a', 'b', 'c', 'a']
// console.log(arrayb.indexOf('a'))
// console.log(arrayb.indexOf('d'))

//EXEMPLO2

let indices = [];
let arrayc = ['a', 'b', 'a', 'c', 'a', 'd'];
let elemento = 'a';
let idx = arrayc.indexOf(elemento);
while (idx != -1) {
  indices.push(idx);
  idx = arrayc.indexOf(elemento, idx + 1);//[idx+1] = percorrer o arrayc. 
}
// console.log(indices);

console.log("BLOCO12=======================================================================")
//.SLICE() - copia os elementos do array s/ altera o array original - (start, stop) = escolher elementos que quero copiar
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(0,2));

console.log("BLOCO12=======================================================================")
//.SORT() - organiza em ordem crescente - transformando tudo em strings (UNICODE)

let lista = [2, 1, 'cao', 'vagem', 10, 'arroz', 'Brasil', 25 ]
// console.log(lista.sort())
// console.log(
//   lista.sort(function (a,b){
//   if(a>b) return 1
//   if(a<b) return -1
//   return 0
//   })
// )

console.log("BLOCO13=======================================================================")

//.SPLICE() - permite add e remover elementos ao array.
//SINTAXE - nomeDoArray.SLICE(indice, quant a remover, o que vou add)

let mes = ["janeiro", "fevereiro", "abril"]
mes.splice(2, 0, "março")
console.log(mes)