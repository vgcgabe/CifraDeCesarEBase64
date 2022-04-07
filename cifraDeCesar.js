var charCodes=[];
var alfabeto=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function codificaCesar(texto){
    console.log("Entra na função cifra de cesar codificador"); 
    var textoCodificado = [];
    let textinho = texto.toLowerCase();

    for(let i=0; i<textinho.length; i++){
        if(textinho.charCodeAt(i)>=97 && textinho.charCodeAt(i)<=122){ 
            
            passoSelecionado = parseInt(passoSelecionado) % 26;

            charCodes[i] = ((parseInt(textinho.charCodeAt(i)) + parseInt(passoSelecionado) - 97) % 26);

            textoCodificado.push(alfabeto[charCodes[i]]);
        }
    }
    var textoFinal = textoCodificado.join("");
    console.log(textoFinal);
    console.log(textoCodificado);
    // return textoFinal;
    
}


function decodificaCesar(texto){
    console.log("função cifra de cesar decodificador");



}
