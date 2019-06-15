SeletorCores = function (qtdElementos) {

    vetorCor = []

    for (i = 0; i < qtdElementos; i++) {

        R = Math.floor(Math.random() * 255)
        G = Math.floor(Math.random() * 255)
        B = Math.floor(Math.random() * 255)
        A = 0.5
        cor = `rgba(${R},${G},${B},${A})`
       

        if (vetorCor.indexOf(cor) != -1) {
            i -= 1

        }
        else {

            vetorCor.push(cor)

        }
    }
    return vetorCor
}


