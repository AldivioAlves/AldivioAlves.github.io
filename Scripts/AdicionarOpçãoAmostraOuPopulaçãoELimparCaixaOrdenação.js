limpaDiv=function(){
    
    if(document.getElementById('formulario').variavel.value=="Nominal"){
        animarDescritiva('nominal')
    }
    else{

        animarDescritiva('AP')
    }
    if(document.getElementById('caixa')!=null){
        document.getElementById('formulario').removeChild(document.getElementById('caixa'))
    }


    if(document.getElementById('formulario').variavel.value=="Nominal"&& document.getElementById('caixaAP')!=null){
        document.getElementById('formulario').removeChild(caixaAP)

    }


    if(document.getElementById('caixaAP')==null){

        if (document.getElementById('formulario').variavel.value=="Discreta"||document.getElementById('formulario').variavel.value=="Continua" ){
            caixaAP = document.createElement('div')
            caixaAP.id="caixaAP"
            document.getElementById('formulario').insertBefore(caixaAP,document.getElementById('CarregamentoMaster'))

            pAP=document.createElement('p')
            pAP.innerText="Selecione se os dados são de uma amostra ou população:"
            document.getElementById('caixaAP').appendChild(pAP)

            radioA=document.createElement('input')
            radioA.type="radio"
            radioA.name='AmostraOuPopulação'
            radioA.value="Amostra"
            radioA.id="amostra"
            document.getElementById('caixaAP').appendChild(radioA)

            labelA=document.createElement('label')
            labelA.setAttribute("for", "amostra")
            labelA.innerText="Amostra"
            document.getElementById('caixaAP').appendChild(labelA)


            radioP=document.createElement('input')
            radioP.type="radio"
            radioP.name="AmostraOuPopulação"
            radioP.value="População"
            radioP.id="população"
            document.getElementById('caixaAP').appendChild(radioP)

            labelP=document.createElement('LABEL')
            labelP.setAttribute("for", "população")
            labelP.innerText="População"
            document.getElementById('caixaAP').appendChild(labelP)

        }

    }

}