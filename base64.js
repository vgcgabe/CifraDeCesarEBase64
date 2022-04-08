function codificador64(texto){
    let codificado = btoa(texto);

    let resultadoCod = document.getElementById("resposta");
    resultadoCod.value = codificado;
}

function decodificador64(texto){
    let decodificado = atob(texto);

    let resultadoCod = document.getElementById("resposta");
    resultadoCod.value = decodificado;
}