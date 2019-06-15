DesvioPadrão = function(objeto){
    acmDesvio = 0

    if (objetoDadosUsuario.Variavel=="Discreta"){

        for(chave in objeto){
            acmDesvio += Math.pow((parseInt(chave)-mediaFloat), 2)* objeto[chave]
        }
    
    }
    else{
        for(chave in objeto){
            acmDesvio += Math.pow((ObjetoMediaParaDispersão[chave]-media),2) *objetoVetor[chave].length
        }
    }

    if (objetoDadosUsuario['AP']=='Amostra'){
        divDesvio = acmDesvio/(vetor.length-1)
    }
    else{
        divDesvio=acmDesvio/vetor.length
    }
    desvio = Math.sqrt(divDesvio).toFixed(2)

    return desvio

}

CoeficienteDeVariação = function(){
    if (objetoDadosUsuario.Variavel=="Discreta"){

        Coeficiente = (desvio/mediaFloat)*100}
    else{
        Coeficiente = (desvio/media)*100
    }

    return Coeficiente.toFixed(2)

}




