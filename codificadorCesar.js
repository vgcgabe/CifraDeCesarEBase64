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


let inputNum = document.getElementById("capturaNumero");
let select = document.getElementById("opcoes");
select.addEventListener("click", function(){
    if(select.selectedIndex == 1){
        inputNum.style.display = 'none';
    }
    else{
        inputNum.style.display = 'flex';
    }
});  


function atualizaBotao(){
    let radioCode = document.getElementById("codificar");
    let radioDecode = document.getElementById("decodificar");

    if(radioCode.checked == true && radioDecode.checked == false){
        botaoEnviaTudo.value = "Codificar";
    }else{
        botaoEnviaTudo.value = "Decodificar";
    }
}


function verificar(){
    if(cesarOuMeiaquatro == 'cifraCesar'){
        if(codificar == '1')
        {
            codificaCesar(textoDigitado, parseInt(passoSelecionado));
        }
        else{
            decodificaCesar();
        }
    }
    else{
        if(codificar == '1'){
            codificador64(textoDigitado);
        }else{
            decodificador64(textoDigitado);
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