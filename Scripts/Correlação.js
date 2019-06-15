ElementosCorrelação = function () {
    if(document.getElementById("divCorrelação") == null)
    {
        document.getElementById("fundoOpaco").style.display='block'
        if(document.getElementById('descritiva')!=null){
            document.getElementById('descritiva').style.display='none'
        }
            if(document.getElementById('caixaExterna')!=null){
        
                document.body.removeChild(document.getElementById('caixaExterna'))
            }

        criarElementos = function (tipo, id, texto = '', onclick = '', classe = '', valor = '') {
            elemento = document.createElement(tipo)

            elemento.setAttribute('id', id)
            elemento.innerText = texto
            elemento.setAttribute('onclick', onclick)
            elemento.setAttribute('class', classe)
            elemento.setAttribute('value', valor)

            return elemento
        }



        divCorrelação = document.body.appendChild(criarElementos('div', 'divCorrelação'))
        divCorrelação.style.width='700px'
        divCorrelação.style.height='285px'




        animar ('divCorrelação')

        fecharCorrelação = divCorrelação.appendChild(criarElementos('p', 'pFechar', 'X',"fechafundo()" ))
        
        instrução = divCorrelação.appendChild(criarElementos('p', 'pInstrução', 'Slecione o tipo de entrada:'))

        botãoManual = divCorrelação.appendChild(criarElementos('button', 'botãoManualCorrelação', 'Manual', 'plotarEntrada("manual")'))
        botãoManual.style.marginRight='20px'
        botãoManual.style.marginBottom="10px"
        botãoArquivo = divCorrelação.appendChild(criarElementos('button', 'botãoArquivoCorrelação', 'Arquivo', 'plotarEntrada("arquivo")'))

        divEntrada = divCorrelação.appendChild(criarElementos('div', 'divEntrada'))


        plotarEntrada('manual')
        janelaManual=true
    }
}

plotarEntrada = function (tipo) {
    divEntrada.innerHTML = ''

    if (tipo == 'manual') {
        
        instruçãoManual = divEntrada.appendChild(criarElementos('p', 'instruçãoManual', 'digite os dados nas entradas das variaveis separando-os com ";"'))
        NomeX = divEntrada.appendChild(criarElementos('p', 'nomeX', 'Nome da var. X: '))
        InputNomeX = NomeX.appendChild(criarElementos('input', 'NomeIndependente'))
        Px = NomeX.appendChild(criarElementos('p', 'Px', 'valores: '))
        Px.style.display = 'inline'
        x = NomeX.appendChild(criarElementos('input', 'valoresIndependente'))
        NomeY = divEntrada.appendChild(criarElementos('p', 'nomeY', 'Nome da var. Y: '))
        InputNomeY = NomeY.appendChild(criarElementos('input', 'NomeDependente'))
        Py = NomeY.appendChild(criarElementos('p', 'Py', 'valores: '))
        Py.style.display = 'inline'
        y = NomeY.appendChild(criarElementos('input', 'valoresDependente'))
        submeter = divEntrada.appendChild(criarElementos('a', 'calculaC', 'Calcular', 'validarEntradasC("manual")'))
        submeter.setAttribute('href', '#')
        submeter.setAttribute('class','btn btn-info')
        animarCorrelação('manual')
        janelaManual=true
        janelaArquivo=false

    }
    else {
        
        instruçãoArquivo = divEntrada.appendChild(criarElementos('p', '', 'Selecione um arquivo do tipo .csv ou .txt:'))

        botaoCarregarArquivo = divEntrada.appendChild(criarElementos('input', 'arquivoC'))
        botaoCarregarArquivo.setAttribute('type', 'file')
        botaoCarregarArquivo.setAttribute('onchange', 'carregarArquivoC()')


        NomeX = divEntrada.appendChild(criarElementos('p', 'nomeX', 'Nome da var. X: '))
        InputNomeX = NomeX.appendChild(criarElementos('input', 'NomeIndependente'))
        NomeY = divEntrada.appendChild(criarElementos('p', 'nomeY', 'Nome da var. Y: '))
        InputNomeY = NomeY.appendChild(criarElementos('input', 'NomeDependente'))

        submeter = divEntrada.appendChild(criarElementos('a', 'calcularC', 'Calcular', 'validarEntradasC("arquivo")'))
        submeter.setAttribute('href', '#')
        submeter.setAttribute('class','btn btn-info')
        animarCorrelação('arquivo')
        janelaArquivo= true
        janelaManual=false
    }


}


tratamento = function (vetor) {
    //remover espaços entre os dados do vetor
    for (i = 0; i < vetor.length; i++) {
        vetor[i] = vetor[i].trim()
    }
    i = 0
    do {
        if (vetor[i] == "") {
            vetor.splice(i, 1)
        }
        else {
            i++
        }
    } while (i < vetor.length)

    // substituir "," por "." em possiveis digitações de decimais com virgulas.
    for (i = 0; i < vetor.length; i++) {
        dado = vetor[i]
        for (j = 0; j < dado.length; j++) {
            if (dado[j] == ',') {
                dado = dado.replace(dado[j], '.')
                vetor[i] = dado
            }
        }
    }

    for (i = 0; i < vetor.length; i++) {
        vetor[i] = parseFloat(vetor[i])
    }

    return vetor
}

//carregar dados do arquivo importado 

carregarArquivoC = function () {

    entradaC = document.getElementById('arquivoC')
    entradaC = entradaC.files[0]
    if (entradaC.type != 'application/vnd.ms-excel' && entradaC.type != 'text/plain') {
        alert('Tipo de arquivo inválido.Selecione um arquivo do tipo .txt ou .csv')
        document.getElementById('arquivoC').value = ''
    }
    leitorC = new FileReader()
    leitorC.readAsText(entradaC)

    leitorC.onload = function () {
        entradaC = leitorC.result

    }

}

validarEntradasC = function (tipo) {

    if (tipo == 'manual') {

        //entradas vazias
        if (x.value == '') {
            alert('Digite valores no campo da variavel independente.')

            return
        }
        else if (y.value == '') {
            alert('Digite valores no campo da variavel dependente.')
            return
        }
        vetorX = x.value.split(';')
        vetorY = y.value.split(';')
    }


    else {

        //dividindo a entrada em um vetor onde os elementos serão separados a partir da quebra de linha


        entradaC = entradaC.split('\n')

        //verificando se existe algum elemento vazio no vetor, se sim: excluir

        for (i = 0; i < entradaC.length; i++) {
            if (entradaC[i].length == 0) {
                entradaC.splice(i, 1)
            }
        }
        //se a entrada estiver apenas um elemento.
        if (entradaC.length == 1) {
            alert('O arquivo tem apenas uma linha de dados.\nEle deve ser composto por 2 linhas válidas.')
            document.getElementById('arquivoC').value = ''
            return
        }
        //se a entrada estiver mais de 2 elementos 
        else if (entradaC.length > 2) {
            alert('O arquivo tem mais de duas linhas válidas. Ele deve ser composto por apenas 2 linhas validas com dados.')
            document.getElementById('arquivoC').value = ''
            return

        }
        else {
            vetorX = entradaC[0].split(';')
            vetorY = entradaC[1].split(';')
        }

    }


    //tratamento e verificação do vetorX
    vetorX = tratamento(vetorX)

    for (i = 0; i < vetorX.length; i++) {
        if (isNaN(vetorX[i])) {
            alert('Verifique os dados da variavel independente:\napenas numeros separados por";".')
           // document.getElementById('arquivoC').value = ''
            return

        }
    }

    //tratamento e verificação do vetorY
    vetorY = tratamento(vetorY)
    for (i = 0; i < vetorY.length; i++) {

        if (isNaN(vetorY[i])) {
            alert('Verifique os dados da variavel dependente:\napenas numeros separados por";"')
           // document.getElementById('arquivoC').value = ''
            return
        }
    }
    //verificação se os vetores tem a mesma quantidade de elementos válidos
    if (vetorX.length != vetorY.length) {
        alert('A quantidade de dados da variavel independente e da variavel\ndependente deve ser a mesma.')
        document.getElementById('arquivoC').value = ''
        return
    }


    window.localStorage.removeItem('dadosCorrelação')

    if (document.getElementById('NomeIndependente').value =='') {
        InputNomeX = 'X'
    }
    else{
        InputNomeX=document.getElementById('NomeIndependente').value 
    }
    if (document.getElementById('NomeDependente').value == '') {
        InputNomeY = 'Y'
    }
    else{
        InputNomeY= document.getElementById('NomeDependente').value 
    }

    objetoCorrelação = {
        x: vetorX,
        y: vetorY,
        
        nomeX: InputNomeX+':',
        nomeY: ':'+InputNomeY
    }
    window.localStorage.setItem('dadosCorrelação', JSON.stringify(objetoCorrelação))
    submeter.setAttribute('href', 'correlação.html')

}


