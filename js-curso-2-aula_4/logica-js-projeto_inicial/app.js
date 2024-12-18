


alert("bem vindo ao jogo do numero secreto!");
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo) + 1;
console.log (numeroSecreto);
let chute;
let tentativas = 1;





//funcionamento do jogo
while ((chute != numeroSecreto) && (tentativas <= 10)) {
    chute = prompt (`adivinhe qual o numero secreto entre 1 e ${numeroMaximo}:`);
    if (chute == numeroSecreto) {
        break;
        
    } else { 
        if (chute > numeroSecreto) {
            alert (`o numero secreto é menor que ` + chute );
        } else {
            alert (`o numero secreto é maior que ` + chute );
        }
    tentativas++;

    }
       
}


if (chute != numeroSecreto) {
    alert ("seu numero de tentativas acabou HAHAHAHAHAH");    
} else {
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    alert (`isso ai vc descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
}

if (chute != numeroSecreto) {
    alert ("seu numero de tentativas acabou HAHAHAHAHAH");    
} else {
    if (tentativas > 1) {
        alert (`isso ai vc descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas`);
    }
    else {
        alert (`isso ai vc descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativa`);
    }
} 

    
 
let temMaça = true;
let temBanana = true;

// se tem maça ou tem banana…
if (temMaça && temBanana) {
  console.log("Você tem frutas!");
} else {
  console.log("Não tem frutas.");
}



//treino

console.log ("boas vindas");
let nome = "lara"
console.log (`ola,` + nome);
    
alert (`ola,` + nome);


let linguagem;
linguagem = prompt ("qual a linguagem de programação que você mais gosta?");

console.log (linguagem);

let valor1 = 5;
let valor2 = 5;
let resultado = 0 
resultado =  (valor1 - valor2);
console.log (`a subitração de ${valor1} menos ${valor2} é igual á ${resultado}`);

let idade = 25;

idade = prompt ("qual sua idade?");
if (idade >= 18) {
    console.log ("você é maior de idade.");
} else {
    console.log ("você é menor de idade.");
}
    
let nota;
 nota = prompt ("coleque um numero.");
 if (nota < 0) {
    console.log ("numero negativo");
 } else if (nota > 0) {
    console.log ("numero positivo");
    
 } else {
    console.log ("o numero é zero");
 }
    

let soma = 1
while (soma <= 10) {
    console.log (soma);  
    soma++
}
 
let x = 10
if (x >= 7) {
    console.log ("aprovado");
} else {
    console.log ("reprovado");
}


let aleatorio = parseInt(Math.random() * 1000 ) + 1;
console.log (aleatorio);







 
    
    


   


