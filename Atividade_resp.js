function positivos(){
    var x = ler_entrada('entrada1')
    var y = ler_entrada('entrada2')
    escrever_saida('saida', maior(x, y))
}

function ler_entrada(campo){
    return Number(document.getElementById(campo).value)
}

function escrever_saida(campo, valor){
    document.getElementById(campo).innerHTML = valor
}

function maior(valor1, valor2){
    if (valor1 > 0 && valor2 > 0) {
        return 'true'
    }
    else {
        return 'false'
    }
}