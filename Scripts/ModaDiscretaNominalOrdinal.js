moda = function(objeto){         
    maior = 0 

    for (chave in objeto){
        if (objeto[chave]>maior){
            maior = objeto[chave]
            nome = chave
        }
    }
    vetor_numeros= [ ]

    for (chave in objeto){
        vetor_numeros.push(objeto[chave])
    }

    contador = 0 

    for (i= 0; i<vetor_numeros.length;i++){

        if (vetor_numeros[i]==maior){
            contador+=1
        }

    }

    modas= []

    for (chave in objeto){
        if (objeto[chave]==maior){
            modas.push(chave)
        }
    }
    //apresentação com espaços entre modas caso mais de uma. :)
    for (i=0;i<modas.length;i++){
        modas[i]=" "+modas[i]
    }

    if (contador==vetor_numeros.length){

    return 'Sem moda'
    }
    else{
        return modas

    }
}
