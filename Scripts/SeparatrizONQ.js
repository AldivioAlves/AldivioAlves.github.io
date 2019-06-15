sepatatrizONQ= function(separatriz){
    objetoValoresPercentual = {
        'Q1':0.25,'Q2':0.5,'Q3':0.75,'Q4':1,
        'k1':0.2,'k2':0.4,'k3':0.6,'k4':0.8,'k5':1,
        'D1':0.1,'D2':0.2,'D3':0.3,'D4':0.4,'D5':0.5,
		'D6':0.6,'D7':0.7,'D8':0.8,'D9':0.9,'D10':1
    }
    if(separatriz=='Q'){
          document.getElementById('resultadoQuartil').innerText=""
          Prequisitado = objetoValoresPercentual[document.getElementById('selectQ').value]*vetor.length
          idResultado = 'resultadoQuartil'
      }
      else if(separatriz=='K'){
         
          document.getElementById('resultadoQuintil').innerText=""
          Prequisitado = objetoValoresPercentual[document.getElementById('selectK').value]*vetor.length
          idResultado='resultadoQuintil'
      }
      else if(separatriz=='D'){

          document.getElementById('resultadoDecil').innerText=""
          Prequisitado = objetoValoresPercentual[document.getElementById('selectD').value]*vetor.length
          idResultado='resultadoDecil'
      }
    else{
        document.getElementById('resultadoPercentil').innerText=""
        valorDigitado = document.getElementById('EntradaPercentil').value
        if(valorDigitado.length ==0 || valorDigitado==0 || isNaN(valorDigitado)==true){
            alert('Digite um valor numérico acima de 0')
        }
        else{
            Prequisitado= (valorDigitado/100)* vetor.length
        } 
        idResultado='resultadoPercentil'
    }
    for (i=0;i< vetorFrequenciaSimplesAcumulada.length;i++){
		if(vetorFrequenciaSimplesAcumulada[i] >= Prequisitado){
			indiceLinha = i+1
			break
		}
	}
	linha = document.getElementById(`linha${indiceLinha}`).querySelectorAll('td')
	document.getElementById(idResultado).innerText= linha[0].innerText
}