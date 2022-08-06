var jogadorEscolha = 0;
var computadorEscolha = 0;
var pontosJogador = 0;
var pontosComputador = 0;

function jogar(escolha) {
    jogadorEscolha = escolha;

    computadorEscolha = Math.floor(Math.random() * 3);


    if ((jogadorEscolha == 0 && computadorEscolha == 0) || (jogadorEscolha == 1 && computadorEscolha == 1) || (jogadorEscolha == 2 && computadorEscolha == 2)) {
        document.getElementById("mensagens").innerHTML = "Empate !";
        pontosComputador += 1;
        pontosJogador += 1;
        document.getElementById("jogador-pontos").innerHTML = pontosJogador;
        document.getElementById("computador-pontos").innerHTML = pontosComputador;
    }

    else if ((jogadorEscolha == 0 && computadorEscolha == 2) || (jogadorEscolha == 1 && computadorEscolha == 0) || (jogadorEscolha == 2 && computadorEscolha == 1)) {
        document.getElementById("mensagens").innerHTML = "Jogador Ganhou !";
        pontosJogador += 2;
        document.getElementById("jogador-pontos").innerHTML = pontosJogador;
    }

    else {
        document.getElementById("mensagens").innerHTML = "Computador Ganhou !";
        pontosComputador += 2;
        document.getElementById("computador-pontos").innerHTML = pontosComputador;
    }

    document.getElementById("jogador-escolha-0").classList.remove('selecionado');
    document.getElementById("jogador-escolha-1").classList.remove('selecionado');
    document.getElementById("jogador-escolha-2").classList.remove('selecionado');

    document.getElementById("computador-escolha-0").classList.remove('selecionado');
    document.getElementById("computador-escolha-1").classList.remove('selecionado');
    document.getElementById("computador-escolha-2").classList.remove('selecionado');

    document.getElementById("jogador-escolha-" + jogadorEscolha).classList.add('selecionado');
    document.getElementById("computador-escolha-" + computadorEscolha).classList.add('selecionado');

}

function resetar() {

    document.getElementById("mensagens").innerHTML = "Novo Jogo !";


    document.getElementById("jogador-escolha-0").classList.remove('selecionado');
    document.getElementById("jogador-escolha-1").classList.remove('selecionado');
    document.getElementById("jogador-escolha-2").classList.remove('selecionado');

    document.getElementById("computador-escolha-0").classList.remove('selecionado');
    document.getElementById("computador-escolha-1").classList.remove('selecionado');
    document.getElementById("computador-escolha-2").classList.remove('selecionado');

    pontosComputador = 0;
    pontosJogador = 0;

    document.getElementById("jogador-pontos").innerHTML = pontosJogador;
    document.getElementById("computador-pontos").innerHTML = pontosComputador;


}

