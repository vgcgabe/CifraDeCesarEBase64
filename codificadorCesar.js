var textoDigitado;
var passoSelecionado;
var cesarOuMeiaquatro;
var codificar;

//maracutaias para capturar o teto digitado pelo user
var botaoEnviaTudo = document.querySelector("#botaoEnviaTudo");
botaoEnviaTudo.addEventListener("click", function(event){
    event.preventDefault();
    textoDigitado = capturaTexto();
    passoSelecionado = capturaNum();
    cesarOuMeiaquatro = capturaCesar();
    codificar = capturaCodificar();
    verificar();
});

function verificar(){
    if(cesarOuMeiaquatro == 'cifraCesar'){
        if(codificar == '1')
        {
            codificaCesar(textoDigitado);
        }
        else{
            decodificaCesar();
        }
    }
    else{
        if(codificar == '1'){

        }else{

        }
    }
}

//funções usadas nas maracutaias
var option=0;
var item=0;
var op=0;

function capturaCesar(){
    option = document.getElementById("opcoes");
    item = opcoes.options[option.selectedIndex].value;
    return item;
}
function capturaCodificar(){
    op = document.querySelector('input[name="cifra"]:checked').value;
    return op;
}
function capturaNum(){
    var passo = document.querySelector("#passo").value;
    return passo;
}
function capturaTexto(){
    var texto = document.querySelector("#entradaTexto").value;
    return texto;
}