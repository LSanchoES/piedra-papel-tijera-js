
//VARIABLES

let puntosJugador = document.querySelector('#pJugador');
let puntosCPU = document.querySelector('#pCPU');

let imagenCPU = document.querySelector('#imagenCPU');

const ganador = document.querySelector('#bonus1');


const elementos = ["Piedra", "Papel", "Tijera"];
let contadorJugador = 0;
let contadorCPU = 0;


//ELECCION CPU
var eleccionCPU = '';
function turnoCPU(){
    const random = Math.floor(Math.random() * elementos.length);
    eleccionCPU = elementos[random];
    if (eleccionCPU === 'Piedra'){
        imagenCPU.innerHTML = '<img src="img/piedra.png"\' width=\'400px\' height=\'210px\'>'
    }
    else if (eleccionCPU === 'Papel'){
        imagenCPU.innerHTML = '<img src="img/papel.png"\' width=\'400px\' height=\'210px\'>'
    }
    else if (eleccionCPU === 'Tijera'){
        imagenCPU.innerHTML = '<img src="img/tijera.png"\' width=\'400px\' height=\'210px\'>'
    }
    return(eleccionCPU)
}

//ELECCION JUGADOR
var piedra = elementos[0];
var papel = elementos[1];
var tijera = elementos[2];

//EVENTS
function selectPiedra() {
    jugadorElige = piedra
    turnoCPU()
    if (jugadorElige === eleccionCPU){
        console.log('Empate')
        ganador.innerHTML= 'Empate :/'

    }
    else if(eleccionCPU== 'Tijera'){
        ganador.innerHTML= 'Ganas :)'
        contadorJugador ++;
        puntosJugador.innerHTML = contadorJugador;
    }
    else if(eleccionCPU== 'Papel'){
        console.log('Pierdes')
        ganador.innerHTML= 'Ganó CPU :('
        contadorCPU ++;
        puntosCPU.innerHTML = contadorCPU;
    }

}
function selectPapel() {
    jugadorElige = papel
    turnoCPU()
    if (jugadorElige === eleccionCPU){
        ganador.innerHTML= 'Empate :/';
    }
    else if(eleccionCPU== 'Tijera'){
        ganador.innerHTML= 'Ganó CPU :('
        contadorCPU ++;
        puntosCPU.innerHTML = contadorCPU;

    }
    else if(eleccionCPU== 'Piedra'){
        ganador.innerHTML= 'Ganas :)';
        contadorJugador ++;
        puntosJugador.innerHTML = contadorJugador;
    }
}
function selectTijera() {
    jugadorElige = tijera
    turnoCPU()
    if (jugadorElige === eleccionCPU){
        ganador.innerHTML= 'Empate :/'
    }
    else if(eleccionCPU== 'Piedra'){
        ganador.innerHTML= 'Ganó CPU :('
        contadorCPU ++;
        puntosCPU.innerHTML = contadorCPU;
    }
    else if(eleccionCPU== 'Papel'){
        ganador.innerHTML= 'Ganas :)';
        contadorJugador ++;
        puntosJugador.innerHTML = contadorJugador;
    }
}



