let nome = "Eduardo";
let idade = 18;

console.log("Ola Meu nome é " + nome + ", tenho " + idade + " anos. ");

let mensagem = `Olá, meu nome é ${nome}`;
// alert (mensagem); //Alerta no Navegador

console.log(typeof mensagem);
console.log(typeof idade);

let profissao
console.log(typeof profissao)//undefined

let endereco = null;
console.log(typeof endereco)//null porem da objeto 

// ESTRUTURA CONDICIONAL
// IF E ELSE

let temperatura = 12;

if (temperatura > 25) {
    console.log("esta calor!");
}
else {
    console.log("esta frio!");
}


//INTERACAO COM USUARIO

// let idadeUsuario = prompt("Digite sua idade: ")
// alert("Sua idade é: " + idadeUsuario)

//IF /ELSE IF /ELSE

// let nota = parseInt(prompt("Digite a nota: "))

// if (nota >= 6) {
//     console.log("Aprovado(a)!")
// }
// else if(nota >= 5){
//     console.log("Esta de recuperacao")
// }
// else{
//     console.log("Reprovado(a)!")
// }

//IF TERNARIO
let saldo = 90

let podeComprar = saldo <= 100 ? "Compra aprovada!" : "Saldo insuficiente"

console.log(podeComprar)

// EQUIVALENTE A USAR ISSO!!!!!!!
// if (saldo >=100) {
//     podeComprar = "Compra aprovada!"
// } else {
//     podeComprar = "Saldo insuficiente"
// }

// CONDICIONAL ALINHADA
// Multiplas verificacoes

// let hora = 17
// let diaDaSemana = "terca"

// if (hora >= 6 && hora < 12) {
//     console.log("Bom dia!")
// }
// else {
//     if (hora >= 12 && hora < 18) {
//         if (diaDaSemana == "segunda") {
//             console.log("Boa tarde! Otima Semana!")
//         }
//         else { console.log("Boa tarde!") }
//     } else { console.log("Boa noite!") }
// }

// SWITCH CASE

let dia = 5

switch(dia){
    case 1:
        console.log("Domingo")
        break;
    case 2:
        console.log("Segunda")
        break;
    case 3:
        console.log("Terca")
        break;
    case 4:
        console.log("Quarta")
        break;
    case 5:
        console.log("Quinta")
        break;
    case 6:
        console.log("Sexta")
        break;
    case 7:
        console.log("Sabado")
        break;
        default:
            console.log("Dia Invalido!")
}
