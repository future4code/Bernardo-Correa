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

// console.log("Boas vindas ao jogo de Blackjack!")
// if(confirm("Quer iniciar uma nova rodada?")) {
//    const cartaJogador1 = comprarCarta()
//    const cartaJogador2 = comprarCarta()
//    const somaPontuacaoJogador = cartaJogador1.valor + cartaJogador2.valor
//    console.log(`Carta do jogador: ${cartaJogador1.texto} e ${cartaJogador2.texto} - pontuação ${somaPontuacaoJogador}`)

//    const cartaMaquina1 = comprarCarta()
//    const cartaMaquina2 = comprarCarta()
//    const somaPontuacaoMaquina = cartaMaquina1.valor + cartaMaquina2.valor
//    console.log(`Carta da máquina: ${cartaMaquina1.texto} e ${cartaMaquina2.texto} - pontuação ${somaPontuacaoMaquina}`)

//    if (somaPontuacaoJogador === somaPontuacaoMaquina) {
//       console.log("Empate!") 
//    } else if (somaPontuacaoJogador > somaPontuacaoMaquina) {
//       console.log("O usuário ganhou")
//    } else if (somaPontuacaoJogador < somaPontuacaoMaquina) {
//       console.log("O computador ganhou!")
//    }
// } else {
//    console.log("O jogo acabou.")
// }