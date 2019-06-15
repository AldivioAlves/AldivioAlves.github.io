variaveisOrdem = function () {

    if (document.getElementById('formulario').entrada.value == '') {
        alert('Por favor, Selecione um tipo de entrada de dados.')
        return
    }
    if (document.getElementById('formulario').entrada.value == 'arquivo') {
      
        if (document.getElementById('entradaArquivo').value =='') {
            alert('Nenhum arquivo selecionado, por favor, selecione um arquivo válido.')
            return
        }
    }
    if (document.getElementById('formulario').entrada.value == 'manual') {
        if (document.getElementById('entradaUsuario').value == '') {
            alert('Por favor, informe dados válidos no campo de entrada')
            return
        }
    }


    if (document.getElementById('caixa') != null) {
        document.getElementById('formulario').removeChild(document.getElementById('caixa'))
    }
    if (document.getElementById('caixaAP') != null) {
        document.getElementById('formulario').removeChild(caixaAP)
    }
    if (document.getElementById('entradaUsuario') != null) {
        vetorInteiro = document.getElementById('entradaUsuario').value
    }
    else {
        vetorInteiro = entrada
    }

    vetorInteiro = vetorInteiro.split(';')
    for (i = 0; i < vetorInteiro.length; i++) {
        if (vetorInteiro[i] == "") {
            vetorInteiro.splice(i, 1)

        }
    }

    for (i = 0; i < vetorInteiro.length; i++) {
        vetorInteiro[i] = vetorInteiro[i].trim()
    }

    //remover possiveis entradas entre ; em branco

    i = 0
    do {
        if (vetorInteiro[i] == "") {
            vetorInteiro.splice(i, 1)
        }
        else {
            i++
        }
    } while (i < vetorInteiro.length)

    // verificando se existe algum numero no vetor
    numerosNoVetor = 0
    for (i = 0; i < vetorInteiro.length; i++) {
        if (isNaN(vetorInteiro[i]) == false) {
            numerosNoVetor++
        }
    }
    if (numerosNoVetor > 0) {
        alert('Para variaveis do tipo Ordinal, apenas nomes na entrada.')
    }

    else {

        vetorVariaveis = []
        for (i = 0; i < vetorInteiro.length; i++) {
            if (vetorVariaveis.indexOf(vetorInteiro[i]) == -1) {
                vetorVariaveis.push(vetorInteiro[i])

            }
        }
        caixaVariaveisOrdem = document.createElement('div')
        caixaVariaveisOrdem.id = "caixa"
        document.getElementById('formulario').insertBefore(caixaVariaveisOrdem, document.getElementById("CarregamentoMaster"))


        instrução = document.getElementById('caixa').appendChild(document.createElement('p'))
        instrução.innerText = "Ordem das variáveis:"
        selets = document.getElementById('caixa').appendChild(document.createElement('div'))
        selets.id = 'caixaSelets'
        inserirValores()
        animarDescritiva('ordinal')
        reset = document.getElementById('caixa').appendChild(document.createElement('button'))
        reset.setAttribute('type', 'button')
        reset.setAttribute('onclick', 'variaveisOrdem()')
        reset.innerText = "resetar"

        seletores = document.getElementById('caixa').querySelectorAll('select')



    }



}

inserirValores = function () {
    objetoIdeElemento = {}

    for (i = 0; i < vetorVariaveis.length; i++) {
        divPS=document.getElementById('caixaSelets').appendChild(document.createElement('div'))
        divPS.style.display='inline-block'
        divPS.style.marginBottom='10px'

        pLinha=divPS.appendChild(document.createElement('p'))

        pLinha.innerText=`${i+1}ª`
        pLinha.style.display='inline'
        CaixaDeSeleção = divPS.appendChild(document.createElement('select'))
        CaixaDeSeleção.id = `CaixaId${i}`
        CaixaDeSeleção.setAttribute('onchange', "restaurarOpção(this.id)")
        objetoIdeElemento[CaixaDeSeleção.id] = ''
        opçãoNula = document.getElementById(`CaixaId${i}`).appendChild( document.createElement('option'))
        opçãoNula.innerText=''
        for (j = 0; j < vetorVariaveis.length; j++) {
            opção = document.getElementById(`CaixaId${i}`).appendChild( document.createElement('option'))
            opção.innerText = `${vetorVariaveis[j]}`
        }

    }
}


restaurarOpção = function (id) {

    if (objetoIdeElemento[id] == '') {
        removerEntradas(id)
    }

    else {
        for (i = 0; i < seletores.length; i++) {
            if (seletores[i].id != id) {

                document.getElementById(seletores[i].id).appendChild(document.createElement('option')).innerText = objetoIdeElemento[id].innerText
            }
        }
        removerEntradas(id)
    }

}

removerEntradas = function (id) {
    // alert('entrou na remoção de valores ')

    selecionado = document.getElementById(id).value
    // objetoIdeElemento[id]=document.getElementById(id)
    seletores = document.getElementById('caixa').querySelectorAll('select')
    for (i = 0; i < seletores.length; i++) {
        if (seletores[i].id != id) {
            opções = document.getElementById(seletores[i].id).querySelectorAll('option')//vetor com as opções de cada select
            for (j = 0; j < opções.length; j++) {
                if (opções[j].innerText == selecionado) {
                    objetoIdeElemento[id] = opções[j]//o objeto em questão está recebendo mais de uma vez o elemento com diferente id pois a condição é verdadeira quando selecionado...
                    opções[j].id = 'remover'

                    document.getElementById(seletores[i].id).removeChild(document.getElementById(opções[j].id))
                }
            }

        }

    }



}






