                                                          /**Piedra, Papel o Tijeras */
var opciones=[0,1,2];

function juego(eleccion) {

          for(var opcion of opciones){

                if (eleccion===opcion) {

                        let maquina=Math.floor(Math.random()*3);

                        console.log(maquina);

                        if (eleccion===maquina) {

                                console.log("Ésto es un empate");

                        }if (eleccion===0 && maquina===2 || eleccion===1 && maquina===0 ||eleccion===2 && maquina===1) {

                                console.log("Gana el jugador")

                                
                        } else {

                                console.log("Gana la máquina")

                
                                
                        }

                        
                }



          }
        


        
}


/**Nota: En éste caso utilice la palabra reservada let por lo siguiente: 
 * let te permite declarar variables limitando su alcance (scope) al bloque,
 *  declaración, o expresión donde se está usando. a diferencia de la palabra clave var;
 *  la cual define una variable global o local en una función sin importar 
 * el ámbito del bloque. */