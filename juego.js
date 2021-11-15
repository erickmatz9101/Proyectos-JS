var opciones=["piedra","papel","tijera"];

function juego(eleccion) {

    eleccion=eleccion.toLowerCase(); //éste método convierte todas las letras que ingrese el usuario a minúculas

    for(var opcion of opciones){

        if (eleccion===opcion) {

            let posicion=Math.floor(Math.random()*3);

            var maquina=opciones[posicion]; //La variable máquina toma el valor (String) del elemento dentro del array

            console.log(maquina);
            

            if (eleccion===maquina) {

                console.log("Ésto es un empate");
                
            }else if (eleccion==="piedra" && maquina==="tijera" || eleccion==="papel" && maquina==="piedra" ||eleccion==="tijera" && maquina==="papel") {

                console.log("Gana el jugador");
                
            }else{

                console.log("Gana la máquina");
            }
        }else{
            console.log("Haz elegido una opción no válida, por favor intentalo nuevamente")
        }
    }
    
}
                     
                     