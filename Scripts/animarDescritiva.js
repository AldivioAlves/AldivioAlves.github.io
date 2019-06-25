
animarDescritiva = function (solicitante) {


    CaixaD = document.getElementById('descritiva')
    CaixaD.style.overflow = 'hidden'
    tInicial = document.getElementById('descritiva').offsetHeight - 7

    if (solicitante == 'arquivo') {
        if (tArquivo) {
            return
        }
        if (tOrdinal) {

            document.getElementById('caixa').innerHTML = ''
            document.getElementById('formulario').variavel.value = "Nominal"

            tManual = false
        }
        if (tManual) {

            tFinal = tInicial - 10
        }
        else {
            tFinal = 410
        }
        tManual = false
        tNominal = false
        tOrdinal = false
        tArquivo = true
    }

    if (solicitante == 'manual') {

        if (tOrdinal) {

            document.getElementById('caixa').innerHTML = ''
            document.getElementById('formulario').variavel.value = "Nominal"

            tArquivo = false
            tOrdinal = false
        }
        if (tManual) {
            return
        }
        if (!tDisCont) {
            tFinal = 427
        }
        if (tDisCont) {
            tFinal = 499
        }
        tManual = true
        tArquivo = false
        tOrdinal = false
    }

    if (solicitante == 'AP') {
        if (tDisCont) {
            return
        }


        if (tOrdinal && tManual) {
            tFinal = 500
        }
        if (!tManual && !tArquivo) {
            alert('aqui')
            tFinal = 400
        }
        if (tManual) {
            tFinal = 500
        }
        if (tArquivo) {

            tFinal = 480
        }
        tDisCont = true
        tNominal = false
        tOrdinal = false
    }

    if (solicitante == 'nominal') {
        if (tNominal || !tDisCont) {
            return
        }

        if (!tArquivo && !tManual) {
            if (tDisCont) {
                tFinal = 335
            }
            else {
                return
            }
        }
        if (tDisCont && tManual) {

            tFinal = 420
        }
        if (tDisCont && tArquivo) {
            tFinal = 410
        }

        if (tOrdinal && tManual) {

            tFinal = 427
        }
        if (tOrdinal && tArquivo) {
            tFinal = 410
        }

        tOrdinal = false
        tDisCont = false
        tNominal = true


    }

    if (solicitante == 'ordinal') {
        if (tOrdinal) {
            return
        }
        Hselets = document.getElementById('caixaSelets').offsetHeight + 21
        tFinal = String(tInicial + Hselets + 50)

        if (tDisCont) {

            tFinal = String(tInicial + Hselets - 13)
        }
        tOrdinal = true
        tNominal = false
        tDisCont = false
    }
    //alert(` solicitante = ${solicitante}\n Incial= ${tInicial} final= ${tFinal}`)

    CaixaD.animate([{ height: String(tInicial) + 'px' }, { height: String(tFinal) + 'px' }], { duration: 200 })
    CaixaD.style.height = String(tFinal) + 'px'
}