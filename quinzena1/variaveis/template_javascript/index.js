/*
EXERCÍCIOS DE INTERPRETAÇÃO:
1.
let a = 10
let b = 10
console.log(b)
b = 5
console.log(a, b)
No console, será impresso:
10 (em roxo) --> linha 4
10 5 --> linhas 6 e 7
2.
let a = 10
let b = 20
let c
c = a
b = c
a = b
console.log(a, b, c)
No console:
20 undefined 10
3.
let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)
Esse programa calcula o pagamento/hora a partir do pagamento
diário e a quantidade de horas trabalhadas em um dia.
"p" poderia ser "horasDiarias", e "t" "pagamentoDiario"
*/


//EXERCÍCIOS DE ESCRITA:
/*
let nome
let idade
console.log(typeof(nome))
console.log(typeof(idade))
No console:
undefined
undefind
As variáveis foram declaradas, mas nenhum valor foi atribuido
a elas. Portanto, seu tipo é indefinido, "undefined".
*/


//Programa 1:
let nome=prompt("Qual o seu nome?")
let idade=(prompt("Qual a sua idade?"))

console.log(typeof(nome))
console.log(typeof(idade))

/*
Agora, o console retorna:
string
string
--> pq valores entrados no prompt sempre são strings
*/


//Programa 2:
let pergunta1 = prompt("Você é solteira?")
let pergunta2 = prompt("Quer namorar comigo?")
let pergunta3 = prompt("Tem certeza?")

console.log("Voce é solteira? --", pergunta1)
console.log("Quer namorar comigo? --", pergunta2)
console.log("Tem certeza? --", pergunta3)

//Programa 3:

let a = 10
let b = 25
let c = a

a = b
b = c

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10