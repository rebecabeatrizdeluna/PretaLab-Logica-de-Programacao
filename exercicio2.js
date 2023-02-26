/* Crie um programa que receba dois números, calcule a soma deles e depois verifique se esse número é maior que 100.
a) Caso seja maior que 100, retorne: "Este número é maior que 100."
b) Caso seja igua a 100, retorne: "Bingo!"
c) Caso seja menor que 100, retorne: "Este número é menor que 100." */

let numero1 = (67)
let numero2 = (48)

let soma = (numero1 + numero2)

if(soma === 100){
    console.log("Bingo!");
} if (soma > 100){
    console.log("Este número é maior que 100.");
} else {
    console.log("Este número é menor que 100.");
}
