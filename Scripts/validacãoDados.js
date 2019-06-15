validação = function () {
    //  if(document.getElementById('entradaArquivo') != null){
    //    document.getElementById('entradaArquivo').value=''
    //}modifiquei aquiii

    if (document.getElementById('entradaUsuario') == null && document.getElementById('entradaArquivo') == null) {
        alert('Por favor, Selecione um tipo de entrada de dados.')
    }

    if (document.getElementById('formulario').entrada.value == 'manual') {
        entrada = document.getElementById('entradaUsuario').value
    }
    VariavelSelecionada = document.getElementById('formulario').variavel.value
    link = document.getElementById('CarregamentoMaster')

    if (typeof (entrada) != 'object') {//modifiquei aquiiii
        PreEntrada = entrada.split('\n')

        entrada = ''
        for (i = 0; i < PreEntrada.length; i++) {
            entrada += PreEntrada[i] + ';'
        }

        entrada = entrada.split(';')
    }


    //remover espaços entre os dados do vetor
    for (i = 0; i < entrada.length; i++) {
        entrada[i] = entrada[i].trim()
    }

    //remover possiveis valores nulos no vetor

    i = 0
    do {
        if (entrada[i] == "") {
            entrada.splice(i, 1)
        }
        else {
            i++
        }
    } while (i < entrada.length)

    // substituir a "," de numeros decimais

    for (i = 0; i < entrada.length; i++) {
        dado = entrada[i]
        for (j = 0; j < dado.length; j++) {
            if (dado[j] == ',') {
                dado = dado.replace(dado[j], '.')
                entrada[i] = dado
            }
        }
    }




    if (entrada[0] == "" && entrada.length == 1) {
        alert('O entrada de dados está vazia ou só tem um elemento')
        if (document.getElementById('entradaArquivo') != null) {
            document.getElementById('entradaArquivo').value = ''
        }

    }

    else if (entrada.length == 1) {
        alert('Digite dados válidos no campo de entrada.\nCaso tenha importado um arquivo, verifique se é um arquivo .csv válido.')
        if (document.getElementById('entradaArquivo') != null) {
            document.getElementById('entradaArquivo').value = ''
        }
    }


    else {
        Palavras = 0
        Numeros = 0

        for (i = 0; i < entrada.length; i++) {
            if (isNaN(entrada[i])) {
                Palavras++
            }
            else {
                Numeros++
            }
        }

        if (Numeros == entrada.length && VariavelSelecionada == "Discreta") {

            armazenar()

            link.href = "VarialvelQuantitativaDiscretaNominalOrdinal.html"


        }




        else if (Numeros == entrada.length && VariavelSelecionada == "Continua") {
            armazenar()
            link.href = "VarialvelQuantitativaContinua.html"


        }





        else if (Palavras == entrada.length && VariavelSelecionada == "Nominal") {
            armazenar()
            link.href = "VarialvelQuantitativaDiscretaNominalOrdinal.html"





        }
        else if (Palavras == entrada.length && VariavelSelecionada == "Ordinal") {
            QuantidadeDeSelects = document.getElementById('formulario').querySelectorAll('select').length
            ordemInserida = []
            for (i = 0; i < QuantidadeDeSelects; i++) {
                if(document.getElementById(`CaixaId${i}`).value==''){
                    alert('Há campos de seleção em branco')
                    return
                }
                ordemInserida.push(document.getElementById(`CaixaId${i}`).value)
            }

            for (i = 0; i < ordemInserida.length; i++) {
                ordemInserida[i] = ordemInserida[i].trim()
            }

            repetidas = 0

            for (i = 0; i < ordemInserida.length; i++) {
                itemSelecionado = ordemInserida[i]
                for (j = 0; j < ordemInserida.length; j++) {
                    if (ordemInserida[j] == itemSelecionado) {
                        repetidas++
                    }
                }
            }
            if (repetidas > ordemInserida.length) {
                alert('Por Favor, verificar a ordenação das variaveis pois existem repetições nos campos!')
                return

            }
            else {
                armazenar()
                link.href = "VarialvelQuantitativaDiscretaNominalOrdinal.html"

            }

        }


        else if (VariavelSelecionada == "") {
            alert('Selecione algum tipo de váriavel')

        }



        else {
            alert('Para variaveis do tipo Discreta ou Continua, digite apenas numeros.\nPara variaveis do tipo Ordinal e Nominal, digite apenas palavras.')


        }
    }
    if (document.getElementById('entradaArquivo') != null) {
        document.getElementById('entradaArquivo').value = ''
    }
}


