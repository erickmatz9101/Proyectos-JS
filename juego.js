                                                          /**Piedra, Papel o Tijeras */

var jugador;

var maquina;

function validacion(jugador, maquina){


    //Dentro de la funcion valida los posibles casos en el juego


    console.log("Es hora de jugar");


    if (jugador==="piedra" && maquina==="tijeras" || jugador==="tijeras" && maquina==="papel" || jugador==="papel" && maquina==="piedra") {

    console.log("Gana jugador")
    
        } else if (jugador==="tijeras" && maquina==="piedra" || jugador==="papel" && maquina==="tijeras" || jugador==="piedra" && maquina==="papel" ) {

                console.log("Gana la máquina")
    
        } else {

        console.log("Es un empate, juega de nuevo")
    
        }


    
}


