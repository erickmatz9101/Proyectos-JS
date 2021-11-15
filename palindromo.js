function palindromo(texto) {

    var palabra = texto.replace(/[\W_]/g, "").toLowerCase()

    var palabraReversa = palabra.split("").reverse().join("")
  
    return palabra === palabraReversa ? "es palindromo" : "no es palindromo"
  }

/**
 * Replace: Permite remplazar los valores en una cadena por el elemento qye se le indique, en éste caso remplazó los espacios
 * 
 * 
 * Split: lo utilicé para dividir los elementos de tipo String en un array
 * 
 * Reverse: Invierte el orden de los elementos de un array 
 * 
 * Join: Une los elementos del array que estaban separados y devuelve una cadena nuevamente 
 */
 


