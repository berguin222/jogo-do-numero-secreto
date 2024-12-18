/*
//glossario secreto = ao numero que o jogador tera que acertar, aleatorio = ao numero que é gerado aleatoriamente para o jogador acertar//
let listaNumeros = [];
let numeroMaximo = 10;
let tentadiva = 1;
let secreto = aleatorio();

    let titulo = document.querySelector ("h1");
titulo.innerHTML = "Jogo do numero secreto";

let paragrafo = document.querySelector ("p");
paragrafo.innerHTML = "ESCOLHA UM NUMERO ENTRE 1 E 10";
/// esses dois codigos da linha 1 até a 5 são o mesmo codigo do que da linha 7/

function textoTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function textoInicial() {
    textoTela("h1","jogo do numero secreto");
    textoTela("p", `ESCOLHA UM NUMERO ENTRE 1 E 10`);
}

textoTela("h1","jogo do numero secreto");
textoTela("p", "ESCOLHA UM NUMERO ENTRE 1 E 10");

//input = entrada de usuario ou seja é a barrinha onde escrevemos//
//value vc utiliza ele quando quer so o valor especifico mas não a regão inteira (no caso do input)//
//console.log (chute == secreto); // == é usado para fazer comparações//

function verificarChute() {
    let chute = document.querySelector ("input"). value;
    if (chute == secreto) {
        let palavratentativa = tentadiva > 1 ? "tentativas" : "tentativa"; //escrever isso é a mesma coisa do que usar o "if" e o "else"
        textoTela("h1", "boa você acertou!!!");
        textoTela("p", `não foi tão dificil né!! vc acertou o numero secreto com ${tentadiva} ${palavratentativa}`);
        document.getElementById("reiniciar").removeAttribute("disabled"); //removeAtribute serve para "desbloquer o botão"

    } else {
       if (chute < secreto) {
        textoTela("p", "o numero secreto é maior");
       } else {
        textoTela("p", "o numero secreto é menor");
       }
       //tentadiva++ é igual a tentadiva = tentadiva + 1;
       tentadiva++;
       limparInput()
    }
    }

function aleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let elementosLista = listaNumeros.length;
    
    if (elementosLista == numeroMaximo) {
        listaNumeros = [];
    }

    if (listaNumeros.includes(numeroEscolhido)) { //includes serve para "verificar os valores de sua lista" eu acho
       return aleatorio();
    } else {
        listaNumeros.push(numeroEscolhido) //o push é usado para adicionar algo em sua lista (no caso do javaScript)
        console.log (listaNumeros);
        return numeroEscolhido;
    }
}
console.log (secreto)

//colocamos o ".value" pois queremos que o valor seja apagado e o input fica vazio por isso tb colocamos uma intringue vazia.
function limparInput() {
    chute = document.querySelector ("input");
    chute.value = "";
}

function reiniciarJogo() {
    limparInput();
    secreto = aleatorio();
    console.log (secreto);
    tentadiva = 1;
    textoInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);//acho q o setAttribute serve para escolher se vc quer abilitar ou n o tru é abilitar

}
*/
let listaGenerica = [];

let loinguagensDeProgramação = [ 'JavaScript','C','C++', 'Kotlin', 'Python',  'Java', 'Ruby', 'GoLang'];
let nomes = ['lara', 'mariana', 'santana'];
console.log (nomes [2]);
    