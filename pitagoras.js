                                        /**Programa para calcular el teorema de Pitágoras */

var valorA;

var valorB;

var valorC;

var sumatoria;

var resultado;

var opcion;



alert("Bienvenido al programa para calcular el teorema de Pitágoras");

alert("Para calcular el teorema de Pitágoras necesitamos conocer por lo menos 2 de sus lados. Si deseas calcular (a) digita 1, para (b) digita 2 y para (c) digita 3");

    opcion= prompt("Ingresa la opcón según el lado que desees calcular");

    opcion=parseInt(opcion);

switch (opcion) {

    case 1:
        alert("Elegiste la opción 1 que nos ayuda a calcular el lado (c). Para ello necesitamos conocer los valores de (a) y (b)");

        valorA=prompt("Ingresa el valor de a");
        valorA=parseFloat(valorA);


        valorB=prompt("Ingresa el valor de b");
        valorB=parseFloat(valorB);

        // Vamos a calcular la potencia de los valores a y b

        valorA=Math.pow(valorA,2);

        alert("El valor de (a) elevado es: " +valorA);

        valorB=Math.pow(valorB,2);

        alert("El valor de (b) elevado es: "+valorB);

        //Suma de los valores a y b elevados al cuadrado

        sumatoria=valorA+valorB;

        alert("La suma de los cuadrados es: "+sumatoria);

        //Calculando la raíz cuadrada de C

        valorC=Math.sqrt(sumatoria);

        alert("El valor de C es :" +valorC);

        
        break;

    case 2:
        alert("Elegiste la opción 2 que nos ayuda a calcular el lado (a). Para ello necesitamos conocer los valores de (b) y (c)");

        valorB=prompt("Ingresa el valor de b");
        valorB=parseFloat(valorB);


        valorC=prompt("Ingresa el valor de c");
        valorC=parseFloat(valorC);

        // Vamos a calcular la potencia de los valores b y c

        valorB=Math.pow(valorB,2);

        alert("El valor de (b) elevado es: " +valorB);

        valorC=Math.pow(valorC,2);

        alert("El valor de (c) elevado es: "+valorC);

        //Suma de los valores b y c elevados al cuadrado

        sumatoria=valorB+valorC;

        alert("La suma de los cuadrados es: "+sumatoria);

        //Calculando la raíz cuadrada de A

        valorA=Math.sqrt(sumatoria);

        alert("El valor de A es :" +valorA);

        
        break;

    case 3:
        alert("Elegiste la opción 3 que nos ayuda a calcular el lado (b). Para ello necesitamos conocer los valores de (c) y (a)");

        valorC=prompt("Ingresa el valor de c");
        valorC=parseFloat(valorC);


        valorA=prompt("Ingresa el valor de a");
        valorA=parseFloat(valorA);

        // Vamos a calcular la potencia de los valores c y a

        valorC=Math.pow(valorC,2);

        alert("El valor de (c) elevado es: " +valorC);

        valorA=Math.pow(valorA,2);

        alert("El valor de (a) elevado es: "+valorA);

        //Suma de los valores c y a elevados al cuadrado

        sumatoria=valorC+valorA;

        alert("La suma de los cuadrados es: "+sumatoria);

        //Calculando la raíz cuadrada de B

        valorB=Math.sqrt(sumatoria);

        alert("El valor de B es :" +valorB);  
        
    default:
        alert("Elegiste una opción que no es válida, por favor intentalo de nuevo.")
        break;
}


