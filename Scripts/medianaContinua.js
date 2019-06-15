MedianaContinua = function(){
    //Mposição da mediana 
    posição =vetor.length/2

    //localização da classe-1 que contem a mediana 
    indiceposição=0
    for (i=1;i<=vetorFrequenciaSimplesAcumulada.length;i++){
        if (posição<=vetorFrequenciaSimplesAcumulada[i-1]){
            classeMediana = i-1
            break
        }
        indiceposição++
    }
    //frequencia da classe da mediana
    fiClasseMediana = objetoVetor[`${vetorIntervalos[classeMediana][0]} |-- ${vetorIntervalos[classeMediana][1]}`].length
    
    //limite inferior da classe da mediana
    I= vetorIntervalos[classeMediana][0]

    // frequencia acumulada da classa anterior a mediana
    if (indiceposição==0){
        facAnterior = 0
    }
    else{
        facAnterior = vetorFrequenciaSimplesAcumulada[classeMediana-1]
    }

    // intervalo de classes

    h = IntervaloClasses

    Mediana = I + (((posição - facAnterior)/fiClasseMediana)*h)

    console.log(`####### Mediana Implementada ########\n
    valor =${Mediana.toFixed(2)}\n
    posição da Mediana = ${posição}\n
    Limite inferior da classe da Mediana=${I}\n
    Intervalo/ classe da Mediana = ${classeMediana}// ${vetorIntervalos[classeMediana]}\n
    Frequencia acumulada anterior = ${facAnterior}\n
    Intervalo classes = ${h}\n
    frequencia simples da classe da mediana =${fiClasseMediana}\n\n
    `
    
    )
    return Mediana.toFixed(2)

}