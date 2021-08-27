```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let contagemOcorrencias = 0
  for (i=0;i<arrayDeNumeros.length;i++) {
    if (arrayDeNumeros[i]===numeroEscolhido) {
      contagemOcorrencias++
    }
  }
  if (contagemOcorrencias > 0) {
    return `O número ${numeroEscolhido} aparece ${contagemOcorrencias}x`
  } else {return `Número não encontrado`}
}
```
