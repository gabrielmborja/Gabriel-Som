function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento === null) {
        console.log('Elemento não encontrado');
    }

    if (elemento != null) {
       if (elemento.localName === 'audio') {
            elemento.play();
        }    
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador ++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const IdAudio = `#som_${instrumento}`;

    tecla.onclick = function() {
         tocaSom(IdAudio);
    }

    tecla.onkeydown = function (evento) {

        console.log(evento.code == 'Space');

        if (evento.code === 'Space' || evento.code ==='Enter') {
            tecla.classList.add('ativa');
       }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
