modaContínua = function(objeto){
    // maior numero dos valores das chaves 

    maiorNumero  = 0 
    for(chave in objeto){
        if (objeto[chave]> maiorNumero){
            maiorNumero = objeto[chave]
        }

    }
    //inserção em um vetor as chaves que tem o maior valor 
    vetorChaves=[]
    for(chave in objeto){
        if (objeto[chave]==maiorNumero){
            vetorChaves.push(chave)

        }
    }

    // verificação se todas as chaves tem o mesmo valor. Se sim, não tem moda 
    tamanhoObjeto = 0 
    contadorMaiores = 0 
    for(chave in objeto){
        tamanhoObjeto++
        if (objeto[chave]==maiorNumero){
            contadorMaiores++
        }
    }

    if (contadorMaiores==tamanhoObjeto){
        return 'não há moda'
    }

    exibição =[]
    for(i=0;i<vetorChaves.length;i++){
        exibição.push(vetorChaves[i]+" ")
    }

    return exibição
}
    