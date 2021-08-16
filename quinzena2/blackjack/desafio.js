/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    console.log("Boas vindas ao jogo de Blackjack!")
    if(confirm("Quer iniciar uma nova rodada?")) {
       let cartasJogador =[]
       cartasJogador.push(comprarCarta())
       cartasJogador.push(comprarCarta())

       while (cartasJogador[0].texto === cartasJogador[1].texto && cartasJogador[1].texto === "A") {
          cartasJogador[1] = comprarCarta()
       }
    
       let cartasMaquina = []
       cartasMaquina.push(comprarCarta())
       cartasMaquina.push(comprarCarta())
      
       while (cartasMaquina[0].texto === cartasMaquina[1].texto && cartasMaquina[1].texto === "A") {
         cartasMaquina[1] = comprarCarta()
      }
        
      function somaValor(array) {
         let valorSoma = 0
         let i = 0
         while (array.length > i) {
             valorSoma += array[i].valor
             i++
          } return valorSoma
       }

       function retornaArrayTexto (array) {
          let i = 0
          let arrayTexto = []
          while (array.length > i) {
             arrayTexto.push(array[i].texto)
             i++
          }
          return arrayTexto
       }

       let i = 0
       while (confirm(`
       Suas cartas são ${retornaArrayTexto(cartasJogador)}. Pontuacao: ${somaValor(cartasJogador)}
       A carta revelada pelo computador e: ${cartasMaquina[0].texto}.
       Deseja comprar mais uma carta?
       `) && somaValor(cartasJogador) <= 21 ) {
         cartasJogador.push(comprarCarta())
         i++
       }

       while (somaValor(cartasJogador) > somaValor(cartasMaquina)) {
          cartasMaquina.push(comprarCarta())
       }

       console.log(`
       Suas cartas sao ${retornaArrayTexto(cartasJogador)}. Sua pontuacao e ${somaValor(cartasJogador)}.
       As cartas do computador sao ${retornaArrayTexto(cartasMaquina)}. A pontuacao do computador e ${somaValor(cartasMaquina)}.
       `)

       if (somaValor(cartasJogador) === somaValor(cartasMaquina)) {
          console.log("Empate!") 
       } else if (somaValor(cartasMaquina) > 21 && somaValor(cartasJogador) <= 21) {
          console.log("O usuário ganhou!")
       } else if (somaValor(cartasMaquina) <= 21 && somaValor(cartasJogador) > 21) {
          console.log("O computador ganhou!")
       } else {
          console.log("Os dois perderam? Situacao nao prevista :^o")
       }
    } else {
       console.log("O jogo acabou.")
    }