animarCorrelação = function(tipoEntrada){
    caixaC = document.getElementById('divCorrelação')
    valorInicialAltura = caixaC.offsetHeight
    valorInicialLargura= caixaC.offsetWidth
    caixaC.style.height = "310px"

    if(tipoEntrada=='manual'){
       
        if(janelaManual){

            return
        }


        valorFinalAltura=310
        valorFinalLargura= 700

        janelaManual=true
        janelaArquivo=false


    }
    else if(tipoEntrada=='arquivo'){
        
        if(janelaArquivo){
            valorFinalAltura= 340
            return
        }

        valorFinalLargura=400   
        valorFinalAltura= 355


        janelaArquivo=true 
        janelaManual=false
    }

caixaC.animate([{ height: String(valorInicialAltura) + 'px',width:String(valorInicialLargura)+'px'}, { height: String(valorFinalAltura) + 'px' ,width:String(valorFinalLargura)+'px'}], { duration:200 })
caixaC.style.width=String(valorFinalLargura)+'px'
caixaC.style.height=String(valorFinalAltura)+'px'
}