/**
 * Adivinar numero del usuario entre 0 y 1 millon mediante 
 * busqueda binaria 
 * */

const { Console } = require("../console")

const console = new Console();

//Correccion: no tener reserva de colocar 
const usrNumber = console.readNumber("Ingrese un numero entre 0 y 1 millon inclusive...")

//se pueden separar las cifras de un numero con _
let highBound = 1_000_000;
let lowerBound = 0;
let middle, length;

while(!(highBound === usrNumber || lowerBound === usrNumber)){
    length = highBound-lowerBound;
    // middle = (length)/2 + lowerBound;
    middle = (length-length%2)/2 + lowerBound;

    highBound = (usrNumber <= middle) ? middle:highBound;
    lowerBound = (middle <= usrNumber) ? middle:lowerBound;

    console.writeln(`[${lowerBound},${highBound}]`)
}

console.writeln(`El numero ingresado por el usuario es ${(usrNumber==highBound)? highBound:lowerBound}`)
