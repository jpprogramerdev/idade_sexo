function verificar() {
    var textoAno = document.getElementById('txtAnoNasci')
    var anoNasci = Number(textoAno.value)
    var txtIdade = document.getElementById('idadeArea')

    if (anoNasci == 0) {
        txtIdade.innerHTML = '[ERROR] digite um ano'
    } else {
        /*Pegando o ano atual de acordo com a maquina usuario*/
        var now = new Date()
        var anoAtual = now.getFullYear()
        var idade = anoAtual - anoNasci
        var genero = ''
        var corpo = document.body

        /*variavel para colocar imagem*/
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        /*verificar a opção que está no formSexo*/
        if (Fsexo[0].checked) {
            genero = 'Masculino'
            img.setAttribute('src', 'homem.jpg')
            txtIdade.innerHTML = `Seu genero é ${genero} e sua idade é ${idade}`
            txtIdade.appendChild(img)
            corpo.style.background = 'royalblue'
        } else if (Fsexo[1].checked) {
            genero = 'Feminino'
            img.setAttribute('src', 'mulher.jpg')
            txtIdade.innerHTML = `Seu genero é ${genero} e sua idade é ${idade}`
            txtIdade.appendChild(img)
            corpo.style.background = 'rgb(255, 68, 99)'
        } else {
            txtIdade.innerHTML = '[ERROR] escolha uma opção'
        }

    }
}