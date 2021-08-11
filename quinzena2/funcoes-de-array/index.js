/*
EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO:

1.
const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }
]

const novoArrayA = usuarios.map((item, index, array) => {
   console.log(item, index, array)
})

a) Será impresso:
Os elementos do array (as pessoas, suas informações completas)
Os índices desses elementos: 0 1 2
O array inteiro, três vezes

2.
const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayB = usuarios.map((item, index, array) => {
   return item.nome
})

console.log(novoArrayB)

a) Será impresso:
"Amanda Rangel"
"Laís Petra"
"Letícia Chijo"

3.
const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayC = usuarios.filter((item, index, array) => {
   return item.apelido !== "Chijo"
})

console.log(novoArrayC)

a) Será impresso:
true
true
false
-> A arrow function retorna false se a propriedade apelido do objeto item/usuario for igual a "Chijo".

*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// 1.

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const petsApenasNomes = pets.map((cachorro, indice, array) => {return cachorro.nome})
 console.log(petsApenasNomes)

 const petsApenasSalsicha = pets.filter((cachorro, indice, array) => {if (cachorro.raca === "Salsicha") {return cachorro} })
 console.log(petsApenasSalsicha)

 const petsPromocaoPoodle = pets.filter((cachorro, indice, array) => {if (cachorro.raca === "Poodle") {return cachorro} }).map((cachorro, indice, array) => {if (cachorro.raca === "Poodle") {return `Você ganhou um cupom de descontro de 10% para tosar o ${cachorro.nome}`}})
 console.log(petsPromocaoPoodle)

 // 2.

 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 const produtosApenasNomes = produtos.map((produto, indice, array) => {return produto.nome})
 console.log(produtosApenasNomes)

 const produtosDescontados = produtos.map((produto, indice, array) => {return [produto.nome, (produto.preco * 0.95)]})
 console.log(produtosDescontados)

 const produtosApenasBebidas = produtos.filter((produto, indice, array) => {if (produto.categoria === "Bebidas") {return produto}})
 console.log(produtosApenasBebidas)

 const produtosApenasYpe = produtos.filter((produto, indice, array) => {if (produto.nome.includes("Ypê") === true) {return produto}})
 console.log(produtosApenasYpe)

 const produtosAnuncioYpe = produtosApenasYpe.map((produto, indice, array) => {return `Compre ${produto.nome} por ${produto.preco} reais!`})
 console.log(produtosAnuncioYpe)