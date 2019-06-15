
    media = function(objeto){

        acumulador = 0 
    
        for(i=0;i<listaVetor.length;i++){
            acumulador+=parseFloat(listaVetor[i])*objeto[listaVetor[i]]
        }
    
        MediaPonderadaSimplesDiscreta= acumulador/vetor.length
    
        return MediaPonderadaSimplesDiscreta
    }
    