// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
const alturaRetangulo = Number(prompt("Qual a altura do retângulo?"))
const larguraRetangulo = Number(prompt("Qual a largura do retângulo?"))
const areaRetangulo = alturaRetangulo * larguraRetangulo
console.log(areaRetangulo)
}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  const anoAtual = Number(prompt("Em que ano estamos?"))
  const anoNascimento = Number(prompt("Em que ano você nasceu?"))
  const idade = anoAtual - anoNascimento
  console.log(idade)
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  const pesoUsuario = Number(prompt("Quanto você pesa?"))
  const alturaUsuario = Number(prompt("Qual a sua altura?"))
  const imcUsuario = pesoUsuario / (alturaUsuario * alturaUsuario)
  console.log(imcUsuario)
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  const nomeUsuario = prompt("Qual o seu nome?")
  const idadeUsuario = prompt("Qual a sua idade?")
  const emailUsuario = prompt("Qual o seu endereço de email?")
  console.log("Meu nome é " + nomeUsuario + ", tenho " + idadeUsuario + " anos, e o meu email é " + emailUsuario + ".")
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  let coresFavoritas = []
  cor1 = prompt("Qual a sua cor favorita?")
  cor2 = prompt("Qual a sua segunda cor favorita?")
  cor3 = prompt("Qual a sua terceira cor favorita?")
  coresFavoritas.push(cor1, cor2, cor3)
  console.log(coresFavoritas)
}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  frase = prompt("Digite uma frase qualquer:")
  fraseMaiuscula = frase.toUpperCase()
  console.log(fraseMaiuscula)
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  var custoEspetaculo = Number(prompt("Quanto custa realizar o espetáculo?"))
  var valorIngresso = Number(prompt("Quanto custará cada ingresso?"))
  numeroIngressos = Math.ceil(custoEspetaculo / valorIngresso)
  console.log(numeroIngressos)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  const primeiraFrase = prompt("Digite a primeira frase:")
  const segundaFrase = prompt("Digite a segunda frase:")

  mesmoTamanho = primeiraFrase.length === segundaFrase.length
  console.log(mesmoTamanho)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  const primeiraFrase = prompt("Digite a primeira frase:").toUpperCase()
  const segundaFrase = prompt("Digite a segunda frase:").toUpperCase()

  saoIguais = primeiraFrase === segundaFrase
  console.log(saoIguais)
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  const anoAtual = prompt("Em que ano estamos?")
  const anoNascimento = prompt("Em que ano você nasceu?")
  const anoEmissaoId = prompt("Em que ano sua carteira de identidade foi emitida?")

  const idade = anoAtual - anoNascimento
  const anosDesdeEmissao = anoAtual - anoEmissaoId

  const renovacaoAteVinteAnos = (idade <= 20 && anosDesdeEmissao >= 5)
  const renovacaoVinteACinquenta = (idade > 20 && idade <= 50 && anosDesdeEmissao >= 10)
  const renovacaoAcimaCinquenta = (idade > 50 && anosDesdeEmissao >= 15)

  const precisaRenovar = renovacaoAteVinteAnos || renovacaoVinteACinquenta || renovacaoAcimaCinquenta
  console.log(precisaRenovar)
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
  const ano = prompt("Digite um ano qualquer:")
  const condicao1 = ano % 400 === 0
  const condicao2 = ano % 4 === 0
  const condicao3 = ano % 100 === 0 && ano % 400 !== 0
  bissexto = condicao1 || condicao2 && !condicao3
  console.log(bissexto)
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
  const pergunta1 = prompt(`Voce tem mais de 18 anos?`) === `sim`
  const pergunta2 = prompt(`Voce possui ensino medio completo?`) === `sim`
  const pergunta3 = prompt(`Voce possui disponibilidade exclusiva durante os horarios do curso?`) === `sim`

  const validade = pergunta1 && pergunta2 && pergunta3
  console.log(validade)
}