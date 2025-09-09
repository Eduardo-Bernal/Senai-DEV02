//! FILTER

//* Exercicio 1

const notas = [4, 7, 9, 3, 10, 5]

const maioresQueSete = notas.filter(nota => nota >= 7)
console.log(maioresQueSete)

//* Exercicio 2

const palavras = ["sol", "mar", "computador", "lua", "código"]

const palavraDeQuatro = palavras.filter(palavra => palavra.length >= 4)
console.log(palavraDeQuatro)

//* Exercicio 3

const animais = ["gato", "cachorro", "peixe", "elefante", "abelha"]
const animalComC = animais.filter(animal => animal.startsWith("c"))
console.log(animalComC)

//! FIND
//* Exercicio 1
const filmes = ["Avatar", "Batman", "Vingadores", "Matrix", "Barbie"]
const FilmesB = filmes.find(filmes => filmes.startsWith("B"))
console.log(FilmesB)

//* Exercicio 2
const numeros = [2, 4, 6, 9, 12, 15]
const impar = numeros.find(impar => impar % 2 != 0)
console.log(impar) 

//* Exercicio 3
const alunos = [
    {nome: "Ana", nota: 8}, 
    {nome: "Carlos", nota: 5}, 
    {nome: "Beatriz", nota: 9}
]

const aluno = alunos.find(notas => notas.nota >= 7)
console.log(aluno)

//! MAP

//* Exercicio 1
const temperaturas = [20, 25, 30, 15]
const conversao = temperaturas.map(temperatura => temperatura * 1.8 + 32)
console.log(conversao)

//* Exercicio 2
const produtos = ["camisa", "calça", "sapato"]

const nomesMaiusculo = produtos.map(produto => "Produtos:" + produto.toUpperCase())

console.log(nomesMaiusculo)

//* Exercicio 3
const numbers = [1, 2, 3, 4]
const quadrado = numbers.map(number => number ** 2)
console.log(quadrado)


//! REDUCE

//* Exercicio 1

const valores = [100, 200, 50, 150]

const soma = valores.reduce((acumulador,numero) => acumulador + numero, 0)
console.log(soma)

//* Exercicio 2
const texto = ["JS ", "é ", "muito ", "legal"]  
const juncao = texto.reduce((acumulador,palavra) => acumulador + palavra)
console.log(juncao)

//* Exercicio 3
const notes = [1, 2, 3, 4, 5]
const media = notes.reduce((total, nota) => total + nota, 0) / notes.length
console.log(media)


//!DESAFIOS (misturando funções)

//! DESAFIO 1

const livros = [
  { titulo: "Dom Casmurro", paginas: 300 },
  { titulo: "O Hobbit", paginas: 295 },
  { titulo: "A Revolução dos Bichos", paginas: 112 }
]

const maioresQue200 = livros.filter(page => page.paginas >= 200)
console.log("Livros com mais de 200 Paginas: ")
console.log(maioresQue200)


const Names = livros.filter(name => name.titulo)
console.log("Nome dos Livros: ")
console.log(Names)

const somaPaginas = livros.reduce((total, livro) => total + livro.paginas, 0)
console.log("Soma das Paginas: ")
console.log(somaPaginas)
console.log("--------------------------")


//! DESAFIO 2

const carrinho = [
  { produto: "Notebook", preco: 2500 },
  { produto: "Mouse", preco: 100 },
  { produto: "Teclado", preco: 200 }
]

const lista = carrinho.map(item => "Produto: " + item.produto + " - R$ " + item.preco)
const total = carrinho.reduce((total, custo) => total + custo.preco, 0)
const achar = carrinho.find(mouse => mouse.produto == "Mouse")

console.log("Nomes e Precos: ")
console.log(lista)
console.log("Soma dos precos: ")
console.log(total)
console.log("Mouse encontrado: ")
console.log(achar)