

                                    /**Programa que separa la parte decial de un entero **/




function decimal(numero) {

    var decimal= numero-Math.trunc(numero);

    console.log(decimal.toFixed(4));
    
}



/**Para éste prgrama utilicé Math.trunc con la finalidad de poder separar la parte entera del decimal,
 * por ello para poder obtener la parte decimal resté el entero  como se vé en la función y una vez teniendo
 * la parte decimal mandarla a imprimir utilizando el método .tofixed el cual sirve para delimitar hasta cuantos 
 * decimales pueden ser visibles en el resultado, éste metodo permite utilizar hasta un máximo de 20 decimales 
 * después del punto, .toFixed() el parámetro que en el caso de mi programa es 5 es el total de decimales que 
 * quiero que se muestren.
 */
