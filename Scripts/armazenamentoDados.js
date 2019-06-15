armazenar=function(){

    window.localStorage.removeItem('dadosFormulario')
    
            
    varivavelSelecionada = document.getElementById('formulario').variavel.value
    nomeVariavel = document.getElementById('formulario').nomevariavel.value


    objetoValoresFormulario={Variavel:varivavelSelecionada,vetorUsuario:entrada,nomeVar:nomeVariavel}

    if(varivavelSelecionada=="Ordinal"){
        
        objetoValoresFormulario['OrdemVariaveis']=ordemInserida
    }
    if(varivavelSelecionada=="Discreta"||varivavelSelecionada=="Continua"){
        objetoValoresFormulario['AP']=document.getElementById('formulario').AmostraOuPopulação.value
    }

    window.localStorage.setItem('dadosFormulario',JSON.stringify(objetoValoresFormulario))



}

