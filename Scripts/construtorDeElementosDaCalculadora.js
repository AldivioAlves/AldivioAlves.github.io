construtor = function(tipo){
    document.getElementById("fundoOpaco").style.display='block'
    if(tipo=='caixa'){
        if(document.getElementById('descritiva')!=null){
            document.getElementById('descritiva').style.display='none'
           
        }
        if(document.getElementById('divCorrelação')!=null){
            document.body.removeChild(document.getElementById('divCorrelação'))
        }

        caixaExterna = document.body.insertBefore(document.createElement('div'),document.getElementById('calc'))
        caixaExterna.setAttribute('id', 'caixaExterna')
        caixaExterna.setAttribute('class', 'frente')
        caixaExterna.style.overflow='hidden'
        animar('caixaExterna')

        fechar = document.getElementById('caixaExterna').appendChild(document.createElement('p'))
        fechar.setAttribute('id', 'fechar')
        fechar.innerText = "X"
        fechar.setAttribute('onclick', "fechafundo()")

        tituloh2 = document.getElementById('caixaExterna').appendChild(document.createElement('h2'))
        tituloh2.innerText = "Probabilidade"

        caixaBotões = document.getElementById('caixaExterna').appendChild(document.createElement('div'))
        caixaBotões.setAttribute('id', 'caixaBotões')

        bUniforme = document.getElementById('caixaBotões').appendChild(document.createElement('p'))
        bUniforme.setAttribute('class', 'botões')
        bUniforme.innerText = "Uniforme"
        bUniforme.setAttribute('onclick', 'fUniforme()')
        bUniforme.style.background = '#ddds'

        bBinomial = document.getElementById('caixaBotões').appendChild(document.createElement('p'))
        bBinomial.setAttribute('class', 'botões')
        bBinomial.innerText = "Binominal"
        bBinomial.setAttribute('onclick', 'fBinominal()')

        bNormal = document.getElementById('caixaBotões').appendChild(document.createElement('p'))
        bNormal.setAttribute('class', 'botões')
        bNormal.innerText = 'Normal'
        bNormal.setAttribute('onclick', 'fNormal()')

        caixaInterna = document.getElementById('caixaExterna').appendChild(document.createElement('div'))
        caixaInterna.setAttribute('id', 'caixaInterna')


    }
    if(tipo=='uniforme'){

        caixaInterna.innerHTML = ''

        bNormal.style.background='none'
        bNormal.style.border='1px solid black'
        bBinomial.style.border='1px solid black'
        bBinomial.style.background='none'
        bBinomial.style.padding='3px'
        bUniforme.style.background='deepskyblue'
        bUniforme.style.border='1px solid black'
        bUniforme.style.padding='3px'


        pMaximoMinimo = document.getElementById('caixaInterna').appendChild(document.createElement('p'))
        pMaximoMinimo.setAttribute('id', 'Maximo&Minimo')
        text1 = document.getElementById('Maximo&Minimo').appendChild(document.createElement('p'))
        text1.style.display = 'inline-block'
        text1.innerText = 'valor minimo: '
        text2 = document.getElementById('Maximo&Minimo').appendChild(document.createElement('p'))
        text2.innerText = 'valor maximo: '
        text2.style.display = 'inline-block'
        document.getElementById('Maximo&Minimo').appendChild(text1)
        inputValorMinimo = document.getElementById('Maximo&Minimo').appendChild(document.createElement('input'))
        inputValorMinimo.setAttribute('id', 'inputValorMinimo')
        inputValorMinimo.setAttribute('type', 'text')
        inputValorMinimo.setAttribute('class', 'inputValores') 
        document.getElementById('Maximo&Minimo').appendChild(text2)
        inputvalorMaximo = document.getElementById('Maximo&Minimo').appendChild(document.createElement('input'))
        inputvalorMaximo.setAttribute('id', 'inputValorMaximo')
        inputvalorMaximo.setAttribute('class', 'inputValores')
        inputvalorMaximo.setAttribute('type', 'text')


        pMediaDesvioUniforme = document.getElementById('caixaInterna').appendChild(document.createElement('p'))
        pMediaDesvioUniforme.setAttribute('id', 'pMediaDesvioUniforme')
        text7 = document.getElementById('pMediaDesvioUniforme').appendChild(document.createElement('p'))
        text7.innerText = 'Media: '
        text7.style.display = 'inline-block'
        inputMediaUniforme = document.getElementById('pMediaDesvioUniforme').appendChild(document.createElement('input'))
        inputMediaUniforme.setAttribute('type', 'button')
        inputMediaUniforme.setAttribute('value', 'calcular')
        inputMediaUniforme.setAttribute('class', 'inputCalc btn btn-info')
        inputMediaUniforme.setAttribute('onclick', 'mediaEdesvio("media")')
        inputResultadoMediaUniforme = document.getElementById('pMediaDesvioUniforme').appendChild(document.createElement('input'))
        inputResultadoMediaUniforme.setAttribute('type', 'text')
        inputResultadoMediaUniforme.setAttribute('class', 'inputValores')
        inputResultadoMediaUniforme.setAttribute('id', 'ResultadoMediaUniforme')

        text8 = document.getElementById('pMediaDesvioUniforme').appendChild(document.createElement('p'))
        text8.innerText = 'Desvio Padrão:'
        text8.style.display = 'inline-block'
        inputDesvioUniforme = document.getElementById('pMediaDesvioUniforme').appendChild(document.createElement('input'))
        inputDesvioUniforme.setAttribute('type', 'button')
        inputDesvioUniforme.setAttribute('value', 'calcular')
        inputDesvioUniforme.setAttribute('class', 'inputCalc  btn btn-info')
        inputDesvioUniforme.setAttribute('onclick', 'mediaEdesvio("desvio")')
        inputResultadoDesvio = document.getElementById('pMediaDesvioUniforme').appendChild(document.createElement('input'))
        inputResultadoDesvio.setAttribute('type', 'text')
        inputResultadoDesvio.setAttribute('class', 'inputValores')
        inputResultadoDesvio.setAttribute('id', 'resultadoDesvio')


        pAcimaDe = document.getElementById('caixaInterna').appendChild(document.createElement('p'))
        pAcimaDe.setAttribute('id', 'pAcimaDe')
        text3 = document.getElementById('pAcimaDe').appendChild(document.createElement('p'))
        text3.innerText = 'Acima de:'
        text3.style.display = 'inline-block'

        inputAcimaDe = document.getElementById('pAcimaDe').appendChild(document.createElement('input'))
        inputAcimaDe.setAttribute('id', 'AcimaDe')
        inputAcimaDe.setAttribute('class', 'inputValores')
        inputAcimaDe.setAttribute('type', 'text')

        calcular3 = document.getElementById('pAcimaDe').appendChild(document.createElement('input'))
        calcular3.setAttribute('value', 'calcular')
        calcular3.setAttribute('type', 'button')
        calcular3.setAttribute('class', 'inputCalc  btn btn-info')
        calcular3.setAttribute('onclick', 'calcularUniforme("acima")')
        inputresultado3 = document.getElementById('pAcimaDe').appendChild(document.createElement('input'))
        inputresultado3.setAttribute('type', 'text')
        inputresultado3.setAttribute('id', 'resultadoAcimaDe')
        inputresultado3.setAttribute('class', 'inputValores')


        pAbaixoDe = document.getElementById('caixaInterna').appendChild(document.createElement('p'))
        pAbaixoDe.setAttribute('id', 'pAbaixoDe')
        text4 = document.getElementById('pAbaixoDe').appendChild(document.createElement('p'))
        text4.innerText = 'Abaixo de:'
        text4.style.display = 'inline-block'
        inputAbaixoDe = document.getElementById('pAbaixoDe').appendChild(document.createElement('input'))
        inputAbaixoDe.setAttribute('id', 'AbaixoDe')
        inputAbaixoDe.setAttribute('class', 'inputValores')
        inputAbaixoDe.setAttribute('type', 'text')
        calcular4 = document.getElementById('pAbaixoDe').appendChild(document.createElement('input'))
        calcular4.setAttribute('value', 'calcular')
        calcular4.setAttribute('type', 'button')
        calcular4.setAttribute('class', 'inputCalc btn btn-info')
        calcular4.setAttribute('onclick', 'calcularUniforme("abaixo")')
        inputresultado1 = document.getElementById('pAbaixoDe').appendChild(document.createElement('input'))
        inputresultado1.setAttribute('type', 'text')
        inputresultado1.setAttribute('id', 'resultadoAbaixoDe')
        inputresultado1.setAttribute('class', 'inputValores')

        pEntre = document.getElementById('caixaInterna').appendChild(document.createElement('p'))
        pEntre.setAttribute('id', 'entre')
        text5 = document.getElementById('entre').appendChild(document.createElement('p'))
        text5.innerText = 'Entre: '
        text5.style.display = 'inline-block'
        text6 = document.getElementById('entre').appendChild(document.createElement('p'))
        text6.innerText = 'E: '
        text6.style.display = 'inline-block'
        document.getElementById('entre').appendChild(text5)
        inputEntre = document.getElementById('entre').appendChild(document.createElement('input'))
        inputEntre.setAttribute('id', 'valorEntre')
        inputEntre.setAttribute('type', 'text')
        inputEntre.setAttribute('class', 'inputValores')
        document.getElementById('entre').appendChild(text6)
        inputE = document.getElementById('entre').appendChild(document.createElement('input'))
        inputE.setAttribute('id', 'valorE')
        inputE.setAttribute('type', 'text')
        inputE.setAttribute('class', 'inputValores')
        calcular2 = document.getElementById('entre').appendChild(document.createElement('input'))
        calcular2.setAttribute('type', 'button')
        calcular2.setAttribute('value', 'calcular')
        calcular2.setAttribute('class', 'inputCalc btn btn-info')
        calcular2.setAttribute('onclick', 'calcularUniforme("entre")')
        inputresultado2 = document.getElementById('entre').appendChild(document.createElement('input'))
        inputresultado2.setAttribute('type', 'text')
        inputresultado2.setAttribute('id', 'resultadoEntre')
        inputresultado2.setAttribute('class', 'inputValores')

    }
    else if(tipo=='binominal'){

        caixaInterna.innerHTML = ''

        bNormal.style.background='none'
        bNormal.style.border='1px solid black'
        bUniforme.style.background='none'
        bUniforme.style.border='1px solid black'
        bBinomial.style.background='deepskyblue'
        bBinomial.style.border='1px solid black'
        bBinomial.style.padding='3px'

        // paragrafo tamanho da amostra 
        pTamanhoAmostra = document.getElementById('caixaInterna').appendChild(document.createElement('p'))
        pTamanhoAmostra.setAttribute('id', 'pTamanhoAmostra')
        text9 = document.getElementById('pTamanhoAmostra').appendChild(document.createElement('p'))
        text9.style.display = 'inline'
        text9.innerText = 'Tamanho da amostra: '
        inputTamanhoDaAmostra = document.getElementById('pTamanhoAmostra').appendChild(document.createElement('input'))
        inputTamanhoDaAmostra.setAttribute('id', 'inputTamanhoDaAmostra')
        inputTamanhoDaAmostra.setAttribute('type', 'text')
        inputTamanhoDaAmostra.setAttribute('class', 'inputValores')

        //paragrafo sucesso e fracasso
        pSucesso = document.getElementById('caixaInterna').appendChild(document.createElement('p'))
        pSucesso.setAttribute('id', 'pSucesso')
        text10 = document.getElementById('pSucesso').appendChild(document.createElement('p'))
        text10.style.display = 'inline'
        text10.innerText = 'Sucesso: '
        inputSucesso = document.getElementById('pSucesso').appendChild(document.createElement('input'))
        inputSucesso.setAttribute('id', 'inputSucesso')
        inputSucesso.setAttribute('type', 'text')
        inputSucesso.setAttribute('class', 'inputValores')

        //paragrafo fracasso
        text11 = document.getElementById('pSucesso').appendChild(document.createElement('p'))
        text11.style.display = 'inline'
        text11.innerText = 'Fracasso: '
        inputFracasso = document.getElementById('pSucesso').appendChild(document.createElement('input'))
        inputFracasso.setAttribute('id', 'inputFracasso')
        inputFracasso.setAttribute('type', 'text')
        inputFracasso.setAttribute('class', 'inputValores')

        //paragrafo eventos
        pEvento = document.getElementById('caixaInterna').appendChild(document.createElement('p'))
        pEvento.setAttribute('id', 'pEvento')
        text12 = document.getElementById('pEvento').appendChild(document.createElement('p'))
        text12.style.display = 'inline'
        text12.innerText = 'Evento (separar com ; se mais de 1): '
        inputEventos = document.getElementById('pEvento').appendChild(document.createElement('input'))
        inputEventos.setAttribute('id', 'inputEventos')
        inputEventos.setAttribute('type', 'text')
        inputEventos.setAttribute('class', 'inputValores')

        //paragrafo Resultado
        pResultadoBinominal = document.getElementById('caixaInterna').appendChild(document.createElement('p'))
        pResultadoBinominal.setAttribute('id', 'pResultadoBinominal')
        botaoResultadoBinominal = document.getElementById('pResultadoBinominal').appendChild(document.createElement('input'))
        botaoResultadoBinominal.setAttribute('value', 'Probabilidade')
        botaoResultadoBinominal.setAttribute('onclick', 'calcularBinominal("probabilidade")')
        botaoResultadoBinominal.setAttribute('class', 'btn btn-info')
        botaoResultadoBinominal.style.heigth = "15px;"
        botaoResultadoBinominal.setAttribute('type', 'button')
        inputEventos = document.getElementById('pResultadoBinominal').appendChild(document.createElement('input'))
        inputEventos.setAttribute('id', 'inputResultadoBinominal')
        inputEventos.setAttribute('type', 'text')
        inputEventos.setAttribute('class', 'inputValores')



        //media e desvio padrão 
        pDesvioMedia = document.getElementById('caixaInterna').appendChild(document.createElement('p'))
        pDesvioMedia.setAttribute('id', 'pDesvio&Media')

        text13 = document.getElementById('pDesvio&Media').appendChild(document.createElement('p'))
        text13.innerText = 'Media: '
        text13.style.display = 'inline-block'
        inputMediaBinominal = document.getElementById('pDesvio&Media').appendChild(document.createElement('input'))
        inputMediaBinominal.setAttribute('type', 'button')
        inputMediaBinominal.setAttribute('value', 'calcular')
        inputMediaBinominal.setAttribute('class', 'inputCalc btn btn-info')
        inputMediaBinominal.setAttribute('onclick', 'calcularBinominal("media")')
        inputResultadoMediaBinominal = document.getElementById('pDesvio&Media').appendChild(document.createElement('input'))
        inputResultadoMediaBinominal.setAttribute('type', 'text')
        inputResultadoMediaBinominal.setAttribute('class', 'inputValores')
        inputResultadoMediaBinominal.setAttribute('id', 'ResultadoMediaBinominal')

        text14 = document.getElementById('pDesvio&Media').appendChild(document.createElement('p'))
        text14.innerText = 'Desvio Padrão:'
        text14.style.display = 'inline-block'
        inputDesvioBinominal = document.getElementById('pDesvio&Media').appendChild(document.createElement('input'))
        inputDesvioBinominal.setAttribute('type', 'button')
        inputDesvioBinominal.setAttribute('value', 'calcular')
        inputDesvioBinominal.setAttribute('class', 'inputCalc btn btn-info')
        inputDesvioBinominal.setAttribute('onclick', 'calcularBinominal("desvio")')
        inputResultadoDesvio = document.getElementById('pDesvio&Media').appendChild(document.createElement('input'))
        inputResultadoDesvio.setAttribute('type', 'text')
        inputResultadoDesvio.setAttribute('class', 'inputValores')
        inputResultadoDesvio.setAttribute('id', 'resultadoDesvio')

    }
    else{
        caixaInterna.innerHTML = ''

        bUniforme.style.background='none'
        bUniforme.style.border='1px solid black'
        bBinomial.style.background='none'
        bBinomial.style.border='1px solid black'
        bNormal.style.background='deepskyblue'
        bNormal.style.border='1px solid black'
        bNormal.style.padding='3px'

        pMediaDesvioNormal = document.getElementById('caixaInterna').appendChild(document.createElement('p'))
        pMediaDesvioNormal.setAttribute('id', 'pMediaDesvioNormal')
        text15 = document.getElementById('pMediaDesvioNormal').appendChild(document.createElement('p'))
        text15.innerText = 'Media: '
        text15.style.display = 'inline-block'

        inputMediaNormal = document.getElementById('pMediaDesvioNormal').appendChild(document.createElement('input'))
        inputMediaNormal.setAttribute('type', 'text')
        inputMediaNormal.setAttribute('class', 'inputValores')
        inputMediaNormal.setAttribute('id', 'inputMediaNormal')

        text16 = document.getElementById('pMediaDesvioNormal').appendChild(document.createElement('p'))
        text16.innerText = 'Desvio Padrão:'
        text16.style.display = 'inline-block'
        inputDesvioNormal = document.getElementById('pMediaDesvioNormal').appendChild(document.createElement('input'))
        inputDesvioNormal.setAttribute('type', 'text')
        inputDesvioNormal.setAttribute('class', 'inputValores')
        inputDesvioNormal.setAttribute('id', 'inputDesvioNormal')


        pAcimaDe = document.getElementById('caixaInterna').appendChild(document.createElement('p'))
        pAcimaDe.setAttribute('id', 'pAcimaDe')
        text17 = document.getElementById('pAcimaDe').appendChild(document.createElement('p'))
        text17.innerText = 'Acima de:'
        text17.style.display = 'inline-block'

        inputAcimaDe = document.getElementById('pAcimaDe').appendChild(document.createElement('input'))
        inputAcimaDe.setAttribute('id', 'AcimaDe')
        inputAcimaDe.setAttribute('class', 'inputValores')
        inputAcimaDe.setAttribute('type', 'text')

        calcular3 = document.getElementById('pAcimaDe').appendChild(document.createElement('input'))
        calcular3.setAttribute('value', 'calcular')
        calcular3.setAttribute('type', 'button')
        calcular3.setAttribute('class', 'inputCalc btn btn-info')
        calcular3.setAttribute('onclick', 'calcularNormal("acima")')
        inputResultadoAcimaDe = document.getElementById('pAcimaDe').appendChild(document.createElement('input'))
        inputResultadoAcimaDe.setAttribute('type', 'text')
        inputResultadoAcimaDe.setAttribute('id', 'resultadoAcimaDe')
        inputResultadoAcimaDe.setAttribute('class', 'inputValores')


        pAbaixoDe = document.getElementById('caixaInterna').appendChild(document.createElement('p'))
        pAbaixoDe.setAttribute('id', 'pAbaixoDe')
        text18 = document.getElementById('pAbaixoDe').appendChild(document.createElement('p'))
        text18.innerText = 'Abaixo de:'
        text18.style.display = 'inline-block'
        inputAbaixoDe = document.getElementById('pAbaixoDe').appendChild(document.createElement('input'))
        inputAbaixoDe.setAttribute('id', 'AbaixoDe')
        inputAbaixoDe.setAttribute('class', 'inputValores')
        inputAbaixoDe.setAttribute('type', 'text')
        calcular4 = document.getElementById('pAbaixoDe').appendChild(document.createElement('input'))
        calcular4.setAttribute('value', 'calcular')
        calcular4.setAttribute('type', 'button')
        calcular4.setAttribute('class', 'inputCalc btn btn-info')
        calcular4.setAttribute('onclick', 'calcularNormal("abaixo")')
        inputResultadoAbaixoDe = document.getElementById('pAbaixoDe').appendChild(document.createElement('input'))
        inputResultadoAbaixoDe.setAttribute('type', 'text')
        inputResultadoAbaixoDe.setAttribute('id', 'resultadoAbaixoDe')
        inputResultadoAbaixoDe.setAttribute('class', 'inputValores')

        pEntre = document.getElementById('caixaInterna').appendChild(document.createElement('p'))
        pEntre.setAttribute('id', 'entre')
        text19 = document.getElementById('entre').appendChild(document.createElement('p'))
        text19.innerText = 'Entre: '
        text19.style.display = 'inline-block'
        text6 = document.getElementById('entre').appendChild(document.createElement('p'))
        text6.innerText = 'E: '
        text6.style.display = 'inline-block'
        document.getElementById('entre').appendChild(text19)
        inputEntre = document.getElementById('entre').appendChild(document.createElement('input'))
        inputEntre.setAttribute('id', 'valorEntre')
        inputEntre.setAttribute('type', 'text')
        inputEntre.setAttribute('class', 'inputValores')
        document.getElementById('entre').appendChild(text6)
        inputE = document.getElementById('entre').appendChild(document.createElement('input'))
        inputE.setAttribute('id', 'valorE')
        inputE.setAttribute('type', 'text')
        inputE.setAttribute('class', 'inputValores')
        calcular2 = document.getElementById('entre').appendChild(document.createElement('input'))
        calcular2.setAttribute('type', 'button')
        calcular2.setAttribute('value', 'calcular')
        calcular2.setAttribute('class', 'inputCalc btn btn-info')
        calcular2.setAttribute('onclick', 'calcularNormal("entre")')
        inputResultadoEntre = document.getElementById('entre').appendChild(document.createElement('input'))
        inputResultadoEntre.setAttribute('type', 'text')
        inputResultadoEntre.setAttribute('id', 'resultadoEntre')
        inputResultadoEntre.setAttribute('class', 'inputValores')


    }
}