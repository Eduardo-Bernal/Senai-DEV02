//NIVEL FACIL
//Exercicio 1

//  let idadeUsuario = prompt("Digite sua idade: ")
//  if(idadeUsuario >= 18){
//  alert("Voce e maior de idade")}
//  else{ alert("Voce e menor de idade")}

 //Exercicio 2

//   let Numero = prompt("Digite um numero: ")
//  if(Numero > 0){
//  alert("Positivo")}
//  else{ alert("Negativo")}

//Exercicio 3

//   let nota = prompt("Digite um numero: ")
//  if(nota >= 60){
//  alert("Aprovado")}
//  else{ alert("Reprovado")}

 // Exercicio 4

//    let Numero = prompt("Digite um numero: ")
//  if(Numero > 0){
//  alert("Positivo")}
//  else if (Numero < 0)
//     { alert("Negativo")}
//  else if (Numero == 0)
//     { alert("Numero é 0")}


// Exercicio 5

//  let idadeUsuario = prompt("Digite sua idade: ")

//  if(idadeUsuario < 12){
//  alert("Voce e crianca")}
//  else if(idadeUsuario > 12 && idadeUsuario < 18)
//     {alert("Voce e adolescente")}
//  else if(idadeUsuario >= 18)
//     {alert("Voce e adulto")}

 // Exercicio 6

//  let numero = 4

//  if(numero % 2 == 0){
//   alert("Numero e par")}
//   else{
//     ("Numero e impar")
//   }

//NIVEL INTERMEDIARIO

// Exercicio 1

// let numero1 = prompt("Digite o numero 1")
// let numero2 = prompt("Digite o numero 2")
// let numero1Int = parseInt(numero1);
// let numero2Int = parseInt(numero2);
// let operador = prompt("Digite o operador, sendo eles +, -, /, ou *")
// let resultado = 0

// if(operador == "+"){
//     resultado = numero1Int + numero2Int 
//     {alert(`Seu resultado é: ${resultado}`)}
// }
// else if(operador == "-"){
//     resultado = numero1Int - numero2Int 
//     {alert(`Seu resultado é: ${resultado}`)}
// }
// else if(operador == "*"){
//     resultado = numero1Int * numero2Int
//     {alert(`Seu resultado é: ${resultado}`)}
// }
// else if(operador == "/"){
//     resultado = numero1Int / numero2Int
//     {alert(`Seu resultado é: ${resultado}`)}
// }
 
// Exercicio 2

// let numero1 = parseInt(prompt("Digite o numero 1"))
// let numero2 = parseInt(prompt("Digite o numero 2"))
// let numero3 = parseInt(prompt("Digite o numero 3"))

// if (numero1 > numero2 && numero1 > numero3) {
//     alert("Numero 1 e maior")
// }

// else if (numero2 > numero1 && numero2 > numero3) {
//     alert("Numero 2 e maior")
// }
// else if (numero3 > numero1 && numero3 > numero2) {
//     alert("Numero 3 e maior")
// }


//Exercicio 3

// let valor = 100
// let valorFinal = 0

// if (valor >= 100) {
//     valorFinal  = valor * 0.90
//     {alert(`Valor final é: ${valorFinal}`)}
// }
// else if (valor < 100) {
//     valorFinal  = valor 
//     {alert(`Valor final é: ${valorFinal}`)}
// }


// Exercicio 4

// let nome = "admin"
// let senha = 1234

// let nomeUsuario = prompt("Digite o nome")
// let senhaUsuario = parseInt(prompt("Digite a senha"))

// if(nome == nomeUsuario & senha == senhaUsuario){
//     alert("Acesso liberado")
// }
// else{
//     alert("acesso negado")
// }

// Nivel avancado

// Exercicio 1

// let lado1 = parseInt(prompt("Digite o numero 1"))
// let lado2 = parseInt(prompt("Digite o numero 2"))
// let lado3 = parseInt(prompt("Digite o numero 3"))

// if(lado1 != lado2 && lado1 != lado3){
//     alert("Escaleno")
// }

// else if(lado1 == lado2 && lado1 != lado3){
//     alert("isosceles")
// }
// else if(lado1 != lado2 && lado1 == lado3){
//     alert("isosceles")
// }
// else if(lado1 == lado2 && lado2 == lado3){
//     alert("Equilatero")
// }

// Exercicio 2

//   let nota = parseInt(prompt("Digite a nota: "))
//  if(nota >= 90){
//  alert("Nivel A")}
//  if(nota < 90 && nota > 80){
//  alert("Nivel B")}
//  if(nota < 80 && nota > 70){
//  alert("Nivel C")}
//  if(nota < 70 && nota > 60){
//  alert("Nivel D")}

// Exercicio 3

let peso = parseFloat(prompt("Digite seu peso em Kgs"))
let altura = parseFloat(prompt("Digite sua altura em metros"))
let imc = parseFloat(peso / (altura * altura))

if(imc > 18.5){
    alert("voce esta abaixo do peso")
}
if(imc > 18,5 && imc < 24,9){
    alert("voce esta normal")
}
if(imc > 25 && imc < 30){
    alert("voce esta sobrepeso")
}
if(imc >=  30){
    alert("voce esta obeso")
}

