// FILTER

//Filtrar numeros maiores que 2
// const numeros = [1, 2, 3, 4, 5, 6]

// const maioresQueDois = numeros.filter(numero => numero > 2)
// console.log(maioresQueDois)

//Filtrar nomes

// let nomes = ["Ana", "Bruno", "Carlos", "Eva", "Fernanda"]

// const nomesLongos = nomes.filter(nome => nome.length > 5)
// console.log(nomesLongos)

//Filtrar Numeros Pares

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let pares = numeros.filter(numero => numero % 2 === 0)

// console.log(pares)

//Filtrar objeto

// let pessoas = [
//     {nome: "Lucas", idade: 17},
//     {nome: "Vitor", idade: 22},
//     {nome: "Arthur", idade: 15},
//     {nome: "Juliana", idade: 30}
// ]

// let adultos = pessoas.filter(pessoa => pessoa.idade >= 18)
// console.log(adultos)

// Find
// Retorna o primeiro elemento da lista correspondente a condicao

//Procurar um produto pelo preco
// const produtos = [
//         {id:1, nome: "teclado", preco:100},
//         {id:2, nome: "mouse", preco:50},
//         {id:3, nome: "monitor", preco:700}
// ]

// const produtoCaro = produtos.find(produto => produto.preco > 600)

// console.log(produtoCaro)

// let numeros = [5,8,12,20, 3, 15]

// let encontrado = numeros.find(numero => numero > 10)
// console.log(encontrado)


// Buscar por um nome pela primeira letra

// let nomes = ["Ana", "Bruno", "Carlos", "Eva", "Catia"]

// let nomeEncontrado = nomes.find(nome => nome.startsWith("C"))
// console.log(nomeEncontrado)

// MAP
//Multiplicar todos os numero por 2
// const numeros = [1,2,3,4,5]

// const numerosDobrados = numeros.map(numero => numero * 2)
// console.log(numerosDobrados)

// Criando um array apartir de objetos

// let pessoas = [
//     {nome: "Lucas", idade: 17},
//     {nome: "Vitor", idade: 22},
//     {nome: "Arthur", idade: 15},
//     {nome: "Juliana", idade: 30}
// ]

// let nomes = pessoas.map(pessoa => pessoa.nome)
// console.log(nomes)

// let mensagem = pessoas.map(pessoa => `${pessoa.nome} tem ${pessoa.idade} anos.`)

// console.log(mensagem)

//deixar os nomes em maiusculo e adicionar um sufixo
// const nomes = ["ana","bruno","carla"]

// const nomesMaiusculo = nomes.map(nome => "Colaborador:" + nome.toUpperCase())

// console.log(nomesMaiusculo)

// REDUCE
// Reduz um array a um unico valor

// somar todos os numeros do array

// const numeros = [1,2,3,4,5]

// const soma = numeros.reduce((acumulador,numero) => acumulador + numero, 0)
// console.log(soma)

//Verificar o maior numero do array

// const numeros = [10, 5, 8, 20, 3]

// const maiorNumero = numeros.reduce((max, numero) => {if (numero >= max) {
//     return numero
// }
// else {
//     return max
// }
// },numeros[0]
// )
// console.log(maiorNumero)

// Contar a frequencia de palavras

// const palavras = ["maca", "banana", "maca", "laranja", "banana", "maca"]

// const contagem = palavras.reduce((acumulador, palavra) => { acumulador[palavra] = (acumulador[palavra] || 0) + 1 
//     return acumulador
// }, {})
// console.log(contagem)

// calcular media das notas

// const notas = [7,8,9,6,10]
// const media = notas.reduce((total, nota) => total + nota, 0) / notas.length
// console.log(media)

// uso combinado

const usuarios = [
    {id: 1, nome: "alice", idade: 25},
    {id: 2, nome: "bob", idade: 30},
    {id: 3, nome: "carol", idade: 20}
]

// filtrar usuarios com idade maior que 21

const maioresDeIdade = usuarios.filter(usuario => usuario.idade > 21)

// encontrar o primeiro usuario com idade maior que 21
const usuario = usuarios.find(usuario => usuario.idade > 21)

// Criar um array apenas com nomes de usuarios
const nomesUsuarios = usuarios.map(usuario => usuario.nome)

// Somar todas as idades dos usuarios usando o reduce
const somaidades = usuarios.reduce((total, usuario) => total + usuario.idade, 0)

console.log("maiores de idade: ", maioresDeIdade)
console.log("Primeiro maior de idade: ", usuario)
console.log("Nomes dos usuarios: ", nomesUsuarios)
console.log("Soma das idades: ", somaidades)