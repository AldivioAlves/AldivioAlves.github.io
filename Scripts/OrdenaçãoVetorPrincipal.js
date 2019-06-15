InserçãoDireta = function(vetor){

    for(i=1;i<vetor.length;i++){
        selecionado = vetor[i]
        indiceSelecionado= i
        indicePrimeiroMaior = i 
        for(j=0;j<indiceSelecionado;j++){
            if(vetor[j]>=selecionado){
                indicePrimeiroMaior=j
                break
            }

            
        }
        if(indiceSelecionado != indicePrimeiroMaior){
            for(k=indiceSelecionado;k>indicePrimeiroMaior;k--){
                vetor[k]=vetor[k-1]
            }
            vetor[indicePrimeiroMaior]= selecionado
        }

    }


    return vetor

}