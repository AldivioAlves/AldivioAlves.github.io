medianaV2= function(vetor){
    if(vetor.length%2==0 && objetoDadosUsuario.Variavel=="Discreta"){
        p1=(vetor.length/2)-1
        p2=p1+1
        return ` A mediana é ${(vetor[p1]+vetor[p2])/2}`
    }
    else if(vetor.length%2!=0 && objetoDadosUsuario.Variavel=="Discreta"){
        return ` A mediana é ${vetor[parseInt((vetor.length/2)-1)]}`
    }
    else if(vetor.length%2==0 && objetoDadosUsuario.Variavel=="Ordinal" || vetor.length%2==0 && objetoDadosUsuario.Variavel=="Nominal" ){
        return `As medianas são: ${vetor[(vetor.length/2)-1]} e ${vetor[(vetor.length/2)]}`

    }
    else if(vetor.length%2!=0 && objetoDadosUsuario.Variavel=="Ordinal" || vetor.length%2!=0 && objetoDadosUsuario.Variavel=="Nominal" ){
        return `A mediana é: ${vetor[parseInt((vetor.length/2)-1)]}`
        
    }
}