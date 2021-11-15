             /**Programa que pide numeros de tipo entero al usuario y los regesa de forma invertida */



function invertirNumero(numero) {

    return Number(numero.toString().split('').reverse().join(''));

console.log(invertirNumero(valor));
    
}



    
/**Para éste caso utilicé el constructot NUMBER que permite manipular valores que no sean de tipo number y covertirlos
 * ya que los datos que se ingresan por el teclado siempre son de tipo String
 * 
 * Split: lo utilicé para dividir los elementos de tipo String en un array
 * 
 * Reverse: Invierte el orden de los elementos de un array 
 * 
 * Join: Une los elementos del array que estaban separados y devuelve una cadena nuevamente 
 */