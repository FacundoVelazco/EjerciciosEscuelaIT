/**
 * La idea de este ejercicio es recibir como entrada una serie de numeros
 * que finalizara con un cero y determinar si los valores se ordenan en forma ascendente
 */
const {Console} = require("../console")

const console = new Console();

let input;
let itsBigger = true;
//Correccion == >> colocar previous = -infinity // de modo que ningun valor sera menor que negativo. 
let previous = 0;
do{
    input = console.readNumber();
    //concepto interesante: acumulador de booleanos.
    itsBigger &&= previous <= input; 
    previous = input;
}while(input !== 0);

console.writeln(`La cadena ingresada${itsBigger?'':' no'} esta en orden ascendente.`);
