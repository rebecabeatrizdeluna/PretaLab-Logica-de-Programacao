// Lista de exercícios de revisão 

/* 1) Siga as instruções descritas abaixo:

Crie uma constante chamada meuNome e atribua a ela o seu nome.
Crie uma constante chamada cidadeNatal e atribua a ela a sua cidade de nascimento.
Crie uma constante chamada anoDeNascimento e atribua a ela o ano em que você nasceu.
Crie uma variável chamada profissão e atribua a ela a sua profissão.
Utilize o console.log para imprimir as constantes e variáveis que você criou.
Altere o valor da variável profissão para desenvolvedora e tente exibir no console novamente, observe o que acontece.
Atribua um novo valor à constante cidadeNatal e tente exibir no console novamente, observe o que acontece.

Você consegue entender e explicar, com suas palavras, o motivo do erro?*/

const meuNome = "Rebeca Beatriz";
console.log(meuNome)

const cidadeNatal = "Olinda";
console.log(cidadeNatal)

const anoDeNascimento = 2000;
console.log(anoDeNascimento)

let profissao = "Programadora";
console.log(profissao) 

profissao = "Desenvolvedora";
console.log(profissao);

//cidadeNatal = "Recife";
//console.log(cidadeNatal);

/*R = O exercício apresenta erro porque "Cidade Natal" é uma constante, por isso seu valor não pode ser alterado.
Já "Profissão" é uma variável, seu valor pode ser alterado sempre que necessário.*/ 

/* 2) Abaixo iremos ver algumas declarações de constantes e variáveis, observe se as declarações estão de acordo com a sintaxe do JavaScript. Caso não, corrija, deixando-as válidas:

a) algum_nome: Mariana
b) var Nome = 32; 
c) const: idade 40;
d) let profissão = 'desenvolvedor';*/

/*a)*/ const algumNome = "Mariana";
/*b)*/ var idade = 32;
/*c)*/ const idade2 = 40;
/*d)*/ let profissao2 = "Dsenvolvedor";

// 3) Imprima a área e o perímetro de um retângulo. Sabemos que a base do retângulo é 5 e a altura é 8.

const base = 5;
const altura = 8;

const area = (base * altura);
const perimetro = (2 * (base + altura));

console.log("Essa é a área = " + area)
console.log("Esse é o perímetro = " + perimetro)

/* 4) Observe as variáveis criadas abaixo. Você tem o ano de nascimento da Shuri. Usando seus conhecimentos, com base no ano de nascimento, calcule a idade dela e exiba da seguinte forma no console:
"Olá, me chamo Shuri, sou Super Heroína, tenho X anos e tenho algo para te dizer: O Pantera Negra vive, e quando ele lutar pelo destino de Wakanda, estarei ao lado dele."*/

const nome = "Shuri";
const anoDeNascimento2 = 1988;
const profissao3 = "Super Heroína";
const frase = "O Pantera Negra vive, e quando ele lutar pelo destino de Wakanda, estarei ao lado dele.";

const anoAtual = 2023

const subtracao = (anoAtual - anoDeNascimento)
console.log(subtracao);

console.log("Olá, me chamo " + nome + ", sou super heroína, tenho " + subtracao + " anos de idade e tenho algo para te dizer: " + frase);

/* 5) Crie uma variável chamada diaDaSemana que receba a string "quarta-feira". Utilizando if/else, implemente condicionais para que:

a)  Se nossa variável for: "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira" ou "sexta-feira", o console.log imprima a seguinte mensagem:
"Oba, mais um dia de aprendizado em JavaScript! :D"

b) Se for algum dia de fim de semana:
“FINALMENTE, descanso merecido!”.*/ 

let diaDaSemana = "Domingo"

if (diaDaSemana === "segunda-feira" ||
 diaDaSemana === "terça-feira" ||
 diaDaSemana === "quarta-feira" ||
 diaDaSemana === "quinta-feira" || 
 diaDaSemana === "sexta-feira"){
    console.log("Oba, mais um dia de aprendizado em JavaScript! :D");
} else {
    console.log("FINALMENTE, descanso merecido!");
}

/* 6) Você está num restaurante e quer comer alguma coisa no almoço. Então, você diz:

- "Por favor, me veja uma feijoada E um suco de laranja”

Seria muito triste se você recebesse apenas a bebida ou só a comida, não é?

Também não seria legal se recebêssemos a feijoada completa, mas a nossa bebida fosse um caldo de cana. Porque nosso pedido era de que as duas condições fossem atendidas corretamente.

Crie duas variáveis em JS, uma deve conter o prato e a outra a bebida.
Quando o pedido vier certo, seu programa deve imprima a mensagem: "Muito grata pelo almoço!". 
Caso não seja o pedido, imprima: "Acho que houve um engano com meu pedido".*/

let prato = "feijoada"
let bebida = "coca-cola"

if (prato === "feijoada" && bebida === "suco de laranja"){
    console.log("Muito grata pelo almoço!");
} else {
    console.log("Acho que houve um engano com meu pedido.");
}

/* 7) Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico e atribua a ela um valor entre 1 e 100. 
Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se essa pessoa está na lista de espera.

Para isso, considere as seguintes informações:

- Se a nota for maior ou igual a 80, imprima "Parabéns, você faz parte do grupo das pessoas aprovadas!".
- Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera".
- Se a nota for menor que 60, imprima "Infelizmente, você reprovou." .

Crie uma estrutura condicional utilizando o if, else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação. 
Altere o valor da nota para verificar se as condições que você implementou funcionam.*/

const nota = 92

if (nota >= 80){
    console.log("Parabéns, você faz parte do grupo das pessoas aprovadas!");
} else if (nota < 80 && nota >= 60){
    console.log("Você está na nossa lista de espera.");
} else if (nota < 60){
    console.log("Infelizmente, você reprovou.");
}

// 8) Defina 2 constantes que salvem valores numericos diferentes. Utilize if/else para escrever um código que retorne o maior dos dois números.

const numero1 = 110
const numero2 = 34

if (numero1 > numero2){
    console.log(numero1 + " é maior que " + numero2);
} else {
    console.log(numero2 + " é maior que " + numero1);
}

// 9) Defina 3 constantes que salvem valores numericos diferentes. Utilize if/else para escrever um código que retorne o maior de três números.

const numero3 = 5
const numero4 = 10
const numero5 = 15 

if (numero3 > numero4 && numero3 > numero5){
    console.log(numero3 + " é o maior número.");
} else if (numero4 > numero3 && numero4 > numero5){
    console.log(numero4 + " é o maior número.");
} else {
    console.log(numero5 + " é o maior número.");
}

// 10) Utilize if/else para escrever um código que define três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.

const numero6 = 72
const numero7 = 33
const numero8 = 58 

if (numero6 % 2 === 0 || numero7 % 2 === 0 || numero8 % 2 === 0){
    console.log(true);
} else {
    console.log(false);
}

/* 11) Siga as instruções abaixo:

a) Crie uma constante chamada "horarioAtual", que receba um número entre 4 e 24 de sua escolha, para representar as horas do dia. 
b) Crie uma variável chamada "mensagem" que, inicialmente, é uma string vazia. 

Implemente condicionais para que:

-Se o horário for maior ou igual a 22, atribua "Não deveríamos comer nada, é hora de dormir" na variável "mensagem".
-Se o horário for maior ou igual a 18 e menor que 22, insira "Rango da noite, vamos jantar!" na variável "mensagem".
-Se o horário for maior ou igual a 14 e menor que 18, insira "Vamos fazer um bolo pro café da tarde?" na variável "mensagem".
-Se o horário for maior ou igual a 11 e menor que 14, insira "Hora do almoço!!!" na variável "mensagem".
-Se o horário estiver entre 4 e 11, insira "Humm, cheiro de café recém-passado" na variável "mensagem". 
 
Por fim, dê um console.log na variável "mensagem".*/

const horarioAtual = 18
let mensagem = ""; 

if (horarioAtual >= 22){
    mensagem = "Não deveríamos comer nada, é hora de dormir!";
} else if (horarioAtual >= 18 && horarioAtual < 22){
    mensagem = "Rango da noite, vamos jantar!";
} else if (horarioAtual >= 14 && horarioAtual < 18){
    mensagem = "Vamos fazer um bolo para o café a tarde?";
} else if (horarioAtual >= 11 && horarioAtual < 14) {
    mensagem ="Hora do almoço!!";
} else {
    mensagem = "Huum. Cheiro de café recém passado!";
}

 console.log(mensagem)

/* 12) Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.

Siga essas regras:

-Porcentagem >= 90 -> A
-Porcentagem >= 80 -> B
-Porcentagem >= 70 -> C 
-Porcentagem >= 60 -> D 
-Porcentagem >= 50 -> E
-Porcentagem < 50 -> F

O código deve retornar uma mensagem de erro se a nota passada for menor que 0 ou maior que 100.*/

const nota2 = 72

if (nota2 > 100 || nota2 < 0){
    console.log("Nota inválida. Tente novamente.");
}else if (nota2 >= 90){
    console.log("A");
} else if (nota2 >= 80){
    console.log("B");
} else if (nota2 >= 70){
    console.log("C");
} else if (nota2 >= 60){
    console.log("D");
} else if (nota2 >= 50){
    console.log("E");
} else if (nota2 < 50){
    console.log("F")
}
    

/* 13) Utilize if/else para escrever um código que se inicie com duas constantes declaradas: uma para o custo de um produto e outra para o seu valor de venda. 
A partir desses valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos.

Seu código também deve mostrar um console com mensagem de erro caso algum dos seus valores de entrada seja menor que zero. */

const custoDoProduto = 1.55
const valorDeVenda = 5.00 

const produtosVendidos = 1000
const lucro = ((valorDeVenda - custoDoProduto) * produtosVendidos) 

console.log(lucro);

if (custoDoProduto === 0 || valorDeVenda === 0){
    console.log("ERRO!");
}

/* 14) tilize if/else para escrever um código que define três constantes com os valores dos três ângulos internos de um triângulo. 
O programa deve retornar true se os ângulos representarem os ângulos de um triângulo e false, caso contrário.

Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. 
Um ângulo será considerado inválido se não tiver um valor positivo.*/

const angulo1 = -2
const angulo2 = 50
const angulo3 = 80

somangulos = (angulo1 + angulo2 + angulo3)

if (somangulos > 180){
    console.log("ERRO! Valor inválido para a soma de angulos internos de um triângulo.");
} else if (angulo1 <= 0 || angulo2 <= 0 || angulo3 <= 0){
    console.log("ERRO! Âgulos com valores negativos são inválidos.");
} else {
    console.log("Esse triângulo é válido. A soma de seus ângulos é: " + somangulos);
}



