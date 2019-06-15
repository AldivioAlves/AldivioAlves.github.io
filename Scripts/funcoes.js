
    function fechafundo(){
        if(document.getElementById('fundoOpaco')!=null){
        document.getElementById("fundoOpaco").style.display='none'
        }
        if(document.getElementById('descritiva')!=null){
        document.getElementById("descritiva").style.display='none'
        }
        if(document.getElementById('divCorrelação')!=null){
            document.body.removeChild(document.getElementById('divCorrelação'))
        }
        if(document.getElementById('caixaExterna')!=null){
            document.body.removeChild(document.getElementById('caixaExterna'))
        }
    }