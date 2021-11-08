                                                          /**Piedra, Papel o Tijeras */

var piedra=0;

var papel =1;

var tijera=2;

function juego(eleccion) {

        let maquina=Math.floor(Math.random()*3);

        console.log(maquina)

        if (eleccion===maquina) {

                console.log("Ésto es un empate");

        }else if ((eleccion===1) && (maquina===0)) {
                
                console.log("Gana el jugador");

        } else if ((eleccion===2) && (maquina===1)) {

                console.log("Gana el jugador");
                
        }else if ((eleccion===0) && (maquina===2)) {

                console.log("Gana jugador");
                
        }else if ((eleccion!=0) && (eleccion!=1) && (eleccion!=2)) {

                console.log("Elegiste una opción no válida, intentalo de nuevo")
                
        }else{
                console.log("Te ganó la máquina")
        }
                
        


        
}


/**Nota: En éste caso utilice la palabra reservada let por lo siguiente: 
 * let te permite declarar variables limitando su alcance (scope) al bloque,
 *  declaración, o expresión donde se está usando. a diferencia de la palabra clave var;
 *  la cual define una variable global o local en una función sin importar 
 * el ámbito del bloque. */