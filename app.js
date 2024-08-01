//let titulo = document.querySelector('h1')
//let paragrafo = document.querySelector('p')

//titulo.innerHTML = 'Secret Number Game'
//paragrafo.innerHTML = 'Choose a number between 1 and 10'

let listadeNumeroAleatorio = []
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
    responsiveVoice.speak(texto, 'Brasilian Portuguese Female', {rate: 1.5})
}


function mensagemInicial () {
    exibirTextoNaTela('h1', 'Jogo do numero secreto ')
    exibirTextoNaTela ('p', 'Escolha um numero de 1 e 10' )
}
mensagemInicial ()


function verificarChute() {
    let chute = document.querySelector('input').value
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou')
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativa = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}! `
        exibirTextoNaTela ('p', mensagemTentativa)


        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if(chute > numeroSecreto){
            exibirTextoNaTela ('p', 'o numero secreto e menor' )
        } else{
            exibirTextoNaTela('p', 'O numero secreto e maior')
        }

        tentativas ++
        limparCampo()
    }

}

function gerarNumeroAleatorio () {
    let numeroEscolhido= parseInt(Math.random() * numeroLimite + 1)
    let quantidadeDeElementosNaLista = listadeNumeroAleatorio.length

    if (quantidadeDeElementosNaLista == numeroLimite)
        listadeNumeroAleatorio = []
    if (listadeNumeroAleatorio.includes (numeroEscolhido)){
        return gerarNumeroAleatorio()
    }else {
        listadeNumeroAleatorio.push(numeroEscolhido)
        console.log(listadeNumeroAleatorio)
        return numeroEscolhido
    }
}

function limparCampo() {
    chute = document.querySelector('input') 
    chute.value = ''
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio()
    limparCampo()
    tentativas = 1
    mensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)
  

}

