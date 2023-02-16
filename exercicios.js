// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  const numeral1 = 4
  const numeral2 = 6

  console.log(soma)
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
   const mensagem = prompt('Olá!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt(`digite a altura`))
  const largura = Number(prompt(`digite a largura`))
  const area = altura*largura;
  console.log(area);
}

 
// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt(`digite o ano atual`))
  const anoDeNascimento = Number(prompt(`digite o seu ano de nascimento`))
  const suaIdade = (anoAtual - anoDeNascimento)
  console.log(suaIdade);
  }
  
  
// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const calculaIMC = peso / (altura * altura)
 
  return calculaIMC
}


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt('Qual seu nome?')
  const idade = Number(prompt('Qual sua idade?'))
  const email = prompt('Qual seu email?')
  const frase = 'Meu nome é ' + nome + ', tenho ' + idade + ' anos, e o meu email é ' + email + '.'

  console.log(frase)
    
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Informe sua primeira cor")
  const cor2 = prompt("Informe sua segunda cor")
  const cor3 = prompt("Informe sua terceira cor")
  const tresCoresFavoritas = [cor1, cor2, cor3]

  console.log(tresCoresFavoritas)
}
  



// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
      const maiuscula = string.toUpperCase()

  return maiuscula
 
}



// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const quantDeIngressos = custo / valorIngresso
  

  return quantDeIngressos
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const comparacao = string1.length === string2.length
  return comparacao
  
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const primeiro = array[0]
  return primeiro

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const ultimoItem = array[array.length - 1]
  return ultimoItem

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const primeiroItem = array[0]
  const ultimoItem = array[array.length - 1]
   array[0] = ultimoItem
   array[array.length - 1] = primeiroItem

  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const igualdade = string1.toLowerCase() === string2.toLowerCase()
  return igualdade

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  let anoAtual = Number(prompt('Digite o ano atual'))
  const anoNascimento = Number(prompt('Digite seu ano de Nascimento'))
  let anoIdentidade = Number(prompt('Digite o ano de emissão da sua carteira de identidade.'))
  // os de 20 anos
    let primeiraCondicao = ((anoAtual - anoNascimento) <= 20 && (anoAtual - anoIdentidade) >= 5) ||
    ((anoAtual - anoNascimento) > 20 && (anoAtual - anoNascimento) <= 50 && (anoAtual - anoIdentidade) >= 10) ||
    ((anoAtual - anoNascimento) > 50 && (anoAtual - anoIdentidade) > 15)

    console.log(primeiraCondicao)


}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const bissexto = ((ano % 400 === 0) || ((ano % 4 === 0) && (ano % 100 !== 0)))

  return bissexto

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const idade = prompt('Você tem mais de 18 anos? Responda sim ou não.')
  const ensinoMedio = prompt('Você possui ensino médio completo? Responda sim ou não')
  const disponibilidade = prompt('Você possui disponibilidade exclusiva durante os horários do curso? Responda sim ou não')

  let validade = (idade === 'sim') && (ensinoMedio === 'sim') && (disponibilidade === 'sim')
  console.log(validade)
  
}
checaValidadeInscricaoLabenu(validade)

