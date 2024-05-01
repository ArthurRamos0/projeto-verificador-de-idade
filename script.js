function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    var img = window.document.getElementById('imagem')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO]Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                img.src = 'estilos/imagens/foto-bebe-h.png'
                // Criança
            } else if (idade < 21) {
                img.src = 'estilos/imagens/foto-jovem-h.png'
                // Jovem
            } else if (idade < 50) {
                img.src = 'estilos/imagens/foto-adulto-h.png'
                // Adulto
            } else {
                img.src = 'estilos/imagens/foto-idoso-h.png'
                // Idoso
            }
        } else if (fsex[1].checked) {
            gênero = 'mulher'
            if (idade >=0 && idade < 10) {
                img.src = 'estilos/imagens/foto-bebe-m.png'
                // Criança
            } else if (idade < 21) {
                img.src = 'estilos/imagens/foto-jovem-m.png'
                // Jovem
            } else if (idade < 50) {
                img.src = 'estilos/imagens/foto-adulto-m.png'
                // Adulto
            } else {
                img.src = 'estilos/imagens/foto-idoso-m.png'
                // Idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}