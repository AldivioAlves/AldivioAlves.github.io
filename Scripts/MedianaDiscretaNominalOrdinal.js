mediana = function(){

    if(objetoDadosUsuario.Variavel=="Discreta"){
        if (vetor.length%2==0){        
            return (vetor[vetor.length/2-1]+vetor[vetor.length/2])/2
        }
        else{
            return vetor[parseInt(vetor.length/2)]  
        }
    }



    if (objetoDadosUsuario.Variavel=="Nominal" ||objetoDadosUsuario.Variavel=="Ordinal" ){
        if(vetor.length%2==0){
            if(vetor[vetor.length/2-1]==vetor[vetor.length/2]){
                return vetor[vetor.length/2-1]
            }
            else{
                return `${vetor[vetor.length/2-1]}, ${vetor[vetor.length/2]}`
            }
        }
        else{
            return vetor[parseInt(vetor.length/2)]
        }
    }


           

        

    
}