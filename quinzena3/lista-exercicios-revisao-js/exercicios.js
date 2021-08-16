// EXERCÍCIO 01
function inverteArray(array) {
  let arrayInvertido = []
  let i = array.length - 1
  while(i >= 0) {
    arrayInvertido.push(array[i])
    i--
  }
return arrayInvertido
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let arrayParesElevadosADois = []
    for (i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      arrayParesElevadosADois.push((array[i]*array[i]))
     }
    } return arrayParesElevadosADois
  } 

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let arraySoPares = []
  for (i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      arraySoPares.push(array[i])
      }
    } return arraySoPares

}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNumero = array[0]
  for (i = 0; i < array.length; i++) {
    if (array[i] > maiorNumero) {
      maiorNumero = array[i]
    }
  } return maiorNumero
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
  // Deve haver um jeito mais complicado de fazer isso...
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2 
  const booleano4 = !booleano3

  let respostas = [
    (booleano1 && booleano2 && !booleano4),
    ((booleano1 && booleano2) || !booleano3),
    ((booleano2 || booleano3) && (booleano4 || booleano1)),
    (!(booleano2 && booleano3) || !(booleano1 && booleano3)),
    (!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3))
  ]
  return respostas
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let numerosPares = []
  let i = 0
  while (numerosPares.length < n) {
    if (i % 2 === 0) {
      numerosPares.push(i)
      i += 2
    }
  } return numerosPares
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if (a !== b && b !== c && a !== c) {
    return 'Escaleno'
  }
  // return 'Escaleno'
  if (a === b && b === c) {
    return 'Equilátero'
  // return 'Equilátero'
  } else {return 'Isósceles'}
  // return 'Isósceles'
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  let maiorNumero = 0
  let menorNumero = 0
  if (num1 >= num2) {
    maiorNumero = num1
    menorNumero = num2
  } else {
    maiorNumero = num2
    menorNumero = num1
  }

  const maiorDivisivelPorMenor = maiorNumero % menorNumero === 0
  const diferenca = maiorNumero - menorNumero

  objeto = {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: maiorDivisivelPorMenor,
    diferenca: diferenca
  }
  return objeto
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  let segundoMaiorEMenor = []

  for (i = 0; i < array.length; i++) {
    if (array[i] > array[i+1]) {
      let temp = array[i]
      array[i] = array[i+1]
      array[i+1] = temp
      } 
    }
    segundoMaiorEMenor.push(array[array.length-2], array[1])
    return segundoMaiorEMenor
}



// EXERCÍCIO 11
function ordenaArray(array) {
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array.length; j++)
      if (array[j] > array[j+1]) {
        let temp = array[j]
        array[j] = array[j+1]
        array[j+1] = temp
      }
  }
return array
}

// EXERCÍCIO 12
function filmeFavorito() {
  filmeFavoritoAstroDev = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }
return filmeFavoritoAstroDev
}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
  filmeFavoritoAstroDev = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }
  return `Venha assistir ao filme ${filmeFavoritoAstroDev.nome}, de ${filmeFavoritoAstroDev.ano}, dirigido por ${filmeFavoritoAstroDev.diretor} e estrelado por ${filmeFavoritoAstroDev.atores[0]}, ${filmeFavoritoAstroDev.atores[1]}, ${filmeFavoritoAstroDev.atores[2]}, ${filmeFavoritoAstroDev.atores[3]}.`
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  objetoRetangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 + lado2),
    area: lado1 * lado2
  }
return objetoRetangulo
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
pessoaAnonimizada = {
  ...pessoa,
  nome: "ANÔNIMO"
}
return pessoaAnonimizada
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  arrayDePessoasMaioresDeIdade = arrayDePessoas.filter((pessoa, indice, array) => {if (pessoa.idade >= 18) return pessoa})
  return arrayDePessoasMaioresDeIdade
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  arrayDePessoasMenoresDeIdade = arrayDePessoas.filter((pessoa, indice, array) => {if (pessoa.idade < 18) return pessoa})
  return arrayDePessoasMenoresDeIdade
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  arrayVezesDois = array.map((item, indice, array) => item * 2)
  return arrayVezesDois
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  arrayVezesDoisEmString = array.map((item, indice, array) => (item * 2).toString())
  return arrayVezesDoisEmString
}

// EXERCÍCIO 17C
function verificaParidade(array) {
  arrayParEImpar = array.map((item, indice, array) => {if (item % 2 === 0) {return `${item} é par`} else {return `${item} é ímpar`}})
  return arrayParEImpar
}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
  arrayPessoasAutorizadas = pessoas.filter((pessoas, indice, array) => {if (pessoas.altura >= 1.5 && pessoas.idade > 14 && pessoas.idade < 60) {return pessoas}})
  return arrayPessoasAutorizadas
}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  arrayPessoasNaoAutorizadas = pessoas.filter((pessoas, indice, array) => {if (pessoas.altura < 1.5 || pessoas.idade <= 14 || pessoas.idade > 60) {return pessoas}})
  return arrayPessoasNaoAutorizadas
}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {
consultasNome.sort((a, b) => {
  if (a.nome < b.nome) {return -1}
  if (a.nome > b.nome) {return 1}
  return 0
})
return consultasNome
// Não consegui fazer sem a função sort(), e tive que pesquisar o código.
}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {
  consultasData.sort((a, b) => {
    if (new Date(a.dataDaConsulta) < new Date(b.dataDaConsulta)) {return -1}
    if (new Date(a.dataDaConsulta) > new Date(b.dataDaConsulta)) {return 1}
    else return 0
  })
  return consultasData
}

// EXERCÍCIO 20
function calculaSaldo(contas) {
return contas.map((cliente, indice, array) => {
  for (indice = 0; indice < cliente.compras.length; indice++) {
  cliente.saldoTotal =- cliente.compras[indice]
}
})
}
