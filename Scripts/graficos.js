grafico = function () {

    contexto = document.getElementById('grafico')
    borda = 'black'
    if (objetoDadosUsuario.Variavel == 'Discreta') {
        entreBarras = 1
        tipoGrafico = 'bar'
        eixoX = listaVetor
        eixoY = frequenciaSimples
        legenda = false
        qtdCores = listaVetor.length
        eixos = true


    }
    else if (objetoDadosUsuario.Variavel == 'Continua') {
        entreBarras = 1.26
        tipoGrafico = 'bar'
        eixoX = chaves
        eixoY = vetorFrequenciasSimples
        legenda = false
        qtdCores = chaves.length
        eixos = true


    }
    else {
        tipoGrafico = 'pie'
        entreBarras = 0
        eixoX = listaVetor
        eixoY = frequenciaSimples
        legenda = true
        qtdCores = listaVetor.length
        eixos = false


    }


    grafico = new Chart(contexto, {
        type: tipoGrafico,
        data: {
            labels: eixoX,
            datasets: [{
                label: objetoDadosUsuario.nomeVar,
                data: eixoY,
                borderWidth: 2,
                borderColor: borda,
                backgroundColor: SeletorCores(qtdCores),


            }]
        },
        // legenda tirada com legend:false foda-se
        options: {
            legend: {
                display: legenda
            },
            scales: {



                yAxes: [{
                    display: eixos,


                    ticks: {
                        beginAtZero: true

                    }
                }],
                xAxes: [{
                    display: eixos,

                    barPercentage: entreBarras,
                    gridLines: { display: false }

                }]
            }
        }



    })
}

graficoCorrelação = function () {
    contexto = document.getElementById('grafico')
    grafico = new Chart(contexto, {
        type: 'line',
        data: {
            datasets: [{
                label: 'X',
                data: IeFlinha,
                fill: false,
                backgroundColor: 'blue',
                borderColor: 'red',
                pointRadius: 0,

            },
            {
                type: 'bubble',
                label: 'y',

                data: vetorPontos,
                backgroundColor: "black",
                borderColor: "blue",

            }]
        },
        // legenda tirada com legend:false foda-se
        options: {
            legend: {
                display: false
            },
            tooltips: {
                mode: 'nearest',
                backgroundColor: "black"

            },

            scales: {

                xAxes: [{
                    type: 'linear',
                    position: 'bottom'


                }]
            }
        }



    })



}
