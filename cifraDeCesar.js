var charCodes=[];
var alfabeto=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var alfabetao=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
function codificaCesar(texto, passo){
    console.log("Entra na função cifra de cesar codificador"); 
    var textoCodificado = [];
    //let textinho = texto.toLowerCase();

    passo = parseInt(passo) % 26;
    if(passo<0){
        passo += 26;
    }

    for(let i=0; i<texto.length; i++){
        if(texto.charCodeAt(i)>=97 && texto.charCodeAt(i)<=122){
            charCodes[i] = ((parseInt(texto.charCodeAt(i)) + parseInt(passo) - 97) % 26);
            textoCodificado.push(alfabeto[charCodes[i]]);
        }
        if(texto.charCodeAt(i)>=65 && texto.charCodeAt(i)<=90){
            charCodes[i] = ((parseInt(texto.charCodeAt(i)) + parseInt(passo) - 65) % 26);
            textoCodificado.push(alfabetao[charCodes[i]]);
        }
        if(texto.charCodeAt(i) == 32){
            textoCodificado.push(' ');
        }
    }
    var textoFinal = textoCodificado.join("");
    let resultadoCod = document.getElementById("resposta");
    resultadoCod.value = textoFinal;

    console.log(textoFinal);
    console.log(textoCodificado);
    
}

function decodificaCesar(){
    console.log("função cifra de cesar decodificador");
    codificaCesar(textoDigitado,-passoSelecionado);
}
