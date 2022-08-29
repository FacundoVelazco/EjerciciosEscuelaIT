const {Console} = require("../console")

const console = new Console();

let numerator = console.readNumber("Introduce el numerador.... ");
let denominator = console.readNumber("Introduce el denominador... ");

let divisor = (numerator >= denominator) ? denominator : numerator;
let dividend = (numerator >= denominator) ? numerator : denominator;

let reminder = dividend % divisor;

while(reminder !== 0){
    dividend = divisor;
    divisor = reminder;
    reminder = dividend % divisor;
}

gcd = divisor;

console.writeln(`El MCD es ${gcd}`)