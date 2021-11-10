                     /**Juego de piedra papel o tijera pero ahora en el array usando los valores de tipo String */

                     var opciones=["piedra","papel","tijera"];


                     function juego(eleccion){
                     
                         
                     
                     
                         for(var opcion of opciones){
                     
                             if (eleccion===opcion) {
                     
                                 let posicion=Math.floor(Math.random()*3);
                     
                                     var maquina=opciones[posicion];
                     
                                      console.log(maquina);
                     
                                
                     
                             
                     
                                 if (eleccion===maquina) {
                     
                                         console.log("Ésto es un empate");
                     
                                 }if (eleccion==="piedra" && maquina==="tijera" || eleccion==="papel" && maquina==="piedra" ||eleccion==="tijera" && maquina==="papel") {
                     
                                         console.log("Gana el jugador")
                     
                                         
                                 } else {
                     
                                         console.log("Gana la máquina")
                     
                         
                                         
                                 }
                     
                                 
                         }else{
                     
                             console.log("Haz elegido una opción no válida, intentalo de nuevo");
                     
                         }
                     
                         }
                     
                     }
                     
                     