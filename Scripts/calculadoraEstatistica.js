abriuBinominal = false
abriuUniforme = false
abriuNormal = false

animarCaixaExterna = function (x) {

    animarCaixa = document.getElementById('caixaExterna')
    altura = animarCaixa.offsetHeight + 'px'
    if (x == 'binominal') {
        if (!abriuBinominal) {
            // animarCaixa = document.getElementById('caixaExterna')
            // animarCaixa.animate([{ height: altura }, { height: '380px' }], { duration: 200 })
            alturaFinal = 400
            abriuUniforme = false
            abriuNormal = false

        }
    }
    if (x == 'uniforme') {
        if (!abriuUniforme) {
            //   animarCaixa = document.getElementById('caixaExterna')
            //  animarCaixa.animate([{ height: altura }, { height: '480px' }], { duration: 200 })
            alturaFinal = 440
            abriuNormal = false
            abriuBinominal = false
        }
    }
    if (x == 'normal') {
        if (!abriuUniforme) {
            //    animarCaixa = document.getElementById('caixaExterna')
            alturaFinal = 380
            abriuBinominal = false
            abriuUniforme = false
        }

    }
    animarCaixa.animate([{ height: altura }, { height: alturaFinal + 'px' }], { duration: 200 })
    animarCaixa.style.height = `${alturaFinal}px`


}



calculadora = function () {
    if (document.getElementById('caixaExterna') == null) {

        construtor('caixa')
    }

    VtoP = function (n) {

        for (j = 0; j < n.length; j++) {
            if (n[j] == ',') {
                n = n.replace(n[j], '.')

            }
        }
        return n
    }

    fUniforme = function () {


        animarCaixaExterna('uniforme')

        construtor('uniforme')

        mediaEdesvio = function (x) {
            minimoValorUniforme = parseFloat(VtoP(document.getElementById('inputValorMinimo').value))
            maximoValorUniforme = parseFloat(VtoP(document.getElementById('inputValorMaximo').value))
            console.log(`Variancia = ${Math.pow(maximoValorUniforme - minimoValorUniforme, 2) / 12}`)
            if (x == 'media') {
                teste = verificadorEntradas('Umedia')
                if (teste != -1) {
                    inputResultadoMediaUniforme.value = (minimoValorUniforme + maximoValorUniforme) / 2
                }
            }
            else {
                teste = verificadorEntradas('Udesvio')
                if (teste != -1) {
                    desvioPadraoUniforme = Math.sqrt(Math.pow(maximoValorUniforme - minimoValorUniforme, 2) / 12)
                    desvioPadraoUniforme = desvioPadraoUniforme.toFixed(2)
                    inputResultadoDesvio.value = String(desvioPadraoUniforme)
                }
            }
        }

        calcularUniforme = function (x) {
            minimoValorUniforme = parseFloat(document.getElementById('inputValorMinimo').value)
            maximoValorUniforme = parseFloat(document.getElementById('inputValorMaximo').value)
            console.log(`Variancia = ${Math.pow(maximoValorUniforme - minimoValorUniforme, 2) / 12}`)


            if (x == 'acima') {
                Uacima = parseFloat(VtoP(document.getElementById('AcimaDe').value))
                teste = verificadorEntradas('Uacima')

                if (teste != -1) {
                    idUniforme = 'resultadoAcimaDe'

                    intervaloUniforme = maximoValorUniforme - Uacima
                }
            }
            else if (x == 'abaixo') {

                Uabaixo = parseFloat(VtoP(document.getElementById('AbaixoDe').value))
                teste = verificadorEntradas('Uabaixo')
                if (teste != -1) {
                    idUniforme = 'resultadoAbaixoDe'
                    intervaloUniforme = Uabaixo - minimoValorUniforme
                }
            }
            else if (x == 'entre') {
                valorEntre = parseFloat(VtoP(document.getElementById('valorEntre').value))
                valorE = parseFloat(VtoP(document.getElementById('valorE').value))
                teste = verificadorEntradas('Uentre')
                if (teste != -1) {
                    idUniforme = 'resultadoEntre'
                    intervaloUniforme = Math.abs(valorEntre - valorE)
                }
            }
            if (teste != -1) {
                resultUniforme = (1 / (maximoValorUniforme - minimoValorUniforme) * intervaloUniforme) * 100
                resultUniforme = resultUniforme.toFixed(2)

                document.getElementById(idUniforme).value = String(resultUniforme + '%')
            }
        }
    }
    fBinominal = function () {


        animarCaixaExterna('binominal')


        construtor('binominal')
        calcularBinominal = function (x) {
            n = parseFloat(VtoP(document.getElementById('inputTamanhoDaAmostra').value))
            p = parseFloat(VtoP(document.getElementById('inputSucesso').value))
            q = parseFloat(VtoP(document.getElementById('inputFracasso').value))
            k = document.getElementById('inputEventos').value.split(';')
            console.log(`variancia Distribuição Binominal dos dados inseridos= ${n * q * p}`)
            //para retirar possiveis espaços entra o ";" ou no final da entrada
            t = 0
            do {
                if (k[t] == "") {
                    k.splice(t, 1)
                }
                else {
                    t++
                }
            } while (t < k.length)
            // substituir "," por "." em possiveis digitações de decimais com virgulas.
            for (i = 0; i < k.length; i++) {
                dado = k[i]
                for (j = 0; j < dado.length; j++) {
                    if (dado[j] == ',') {
                        dado = dado.replace(dado[j], '.')
                        k[i] = dado
                    }
                }
            }
            for (i = 0; i < k.length; i++) {
                k[i] = parseFloat(k[i])
            }
            fat = function (n) {
                if (n < 0) {
                    return -1
                }
                else if (n == 0) {
                    return 1
                }
                else {
                    return n * fat(n - 1)
                }
            }
            if (x == 'media') {
                teste = verificadorEntradas('Bmedia')
                if (teste != -1) {
                    document.getElementById('ResultadoMediaBinominal').value = String((n * p).toFixed(2))
                }
            }
            else if (x == 'desvio') {
                teste = verificadorEntradas('Bdesvio')
                if (teste != -1) {
                    document.getElementById('resultadoDesvio').value = String(Math.sqrt(n * p * q).toFixed(2))
                }
            }
            else {
                teste = verificadorEntradas('Bprob')
                if (teste != -1) {
                    resultado = 0

                    for (i = 0; i < k.length; i++) {
                        resultado += ((fat(n) / (fat(k[i]) * fat(n - k[i]))) * Math.pow(p, k[i]) * Math.pow(q, n - k[i])) * 100
                        alert(resultado)
                    }
                    resultado = resultado.toFixed(2)

                    document.getElementById('inputResultadoBinominal').value = String(resultado + '%')

                }
            }
        }

    }

    fNormal = function () {

        construtor('normal')

        animarCaixaExterna('normal')


        calcularNormal = function (x) {
            mediaNormal = parseFloat(VtoP(document.getElementById('inputMediaNormal').value))
            desvioNormal = parseFloat(VtoP(document.getElementById('inputDesvioNormal').value))
            ConversãoValor = function (n) {
                z = (parseFloat(n) - mediaNormal) / desvioNormal
                console.log(`numero z ${z} tipo do numero z${typeof (z)}`)
                z = parseFloat(z).toFixed(2)
                if (parseFloat(z) > 3.9) {
                    z = '3.90'
                }

                if (z[0] == '-') {
                    console.log('valor referenciado a partir do numero z na tabela= ' + tabelaDN[z.slice(1, 4)][z.slice(4)])
                    return tabelaDN[z.slice(1, 4)][z.slice(4)]
                }
                else {
                    console.log('valor referenciado a partir do numero z na tabela= ' + tabelaDN[z.slice(0, 3)][z.slice(3)])
                    return tabelaDN[z.slice(0, 3)][z.slice(3)]
                }
            }

            if (x == 'acima') {
                Nacima = VtoP(document.getElementById('AcimaDe').value)
                teste = verificadorEntradas('Nacima')

                if (teste != -1) {


                    valorConvertido = ConversãoValor(Nacima)

                    if (parseFloat(z) > 0) {
                        ResultAcimaDe = ((0.5 - valorConvertido) * 100).toFixed(2)
                    }

                    else {
                        ResultAcimaDe = ((0.5 + valorConvertido) * 100).toFixed(2)
                    }

                    document.getElementById('resultadoAcimaDe').value = String(ResultAcimaDe) + '%'
                }

            }
            else if (x == 'abaixo') {
                Nabaixo = VtoP(document.getElementById('AbaixoDe').value)
                teste = verificadorEntradas('Nabaixo')
                if (teste != -1) {

                    valorConvertido = ConversãoValor(Nabaixo)

                    if (parseFloat(z) > 0) {
                        ResultAbaixoDe = ((0.5 + valorConvertido) * 100).toFixed(2)
                    }
                    else {
                        ResultAbaixoDe = ((0.5 - valorConvertido) * 100).toFixed(2)
                    }
                    document.getElementById('resultadoAbaixoDe').value = String(ResultAbaixoDe) + '%'
                }
            }
            else {
                n1 = VtoP(document.getElementById('valorEntre').value)
                n2 = VtoP(document.getElementById('valorE').value)
                teste = verificadorEntradas('Nentre')
                if (teste != -1) {

                    Cn1 = ConversãoValor(n1)
                    Cn2 = ConversãoValor(n2)
                    if (n1 < mediaNormal && n2 > mediaNormal || n1 > mediaNormal && n2 < mediaNormal) {
                        ResultadoEntre = String((Math.abs(Cn1 + Cn2) * 100).toFixed(2)) + '%'
                    }
                    else {
                        ResultadoEntre = String((Math.abs(Cn1 - Cn2) * 100).toFixed(2)) + '%'
                    }
                    document.getElementById('resultadoEntre').value = ResultadoEntre
                }

            }

        }

    }
    fUniforme()
}