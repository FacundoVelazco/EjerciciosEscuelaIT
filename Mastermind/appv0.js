/**
 * Mastermind version orientada a procesos
 * Curso de Escuela IT
 * 
 * Suposiciones
 * - Los colores son {RED,BLUE,GREEN,YELLOW,CYAN,MAGENTA}
 * - En cada juego se genera una combinacion de colores aleatoria.
 *
 */

const { Console } = require("../console");

const console = new Console();

let option;

do{
    console.writeln("JUGUEMOS MASTERMIND!!!")
    console.writeln("    [y] - SI ")
    console.writeln("     ...presione otra tecla para salir")

    option = console.readString("ingrese respuesta...");

    if(option === 'y') playMastermind();

}while(option === 'y');

console.writeln("ADIOSSS!!!")

function playMastermind(){
    const COLORS = ['r','b','g','y','c','m']
    
    printRules();

    const sercretColors = genSecretColors(COLORS);
    
    console.writeln("EMPECEMOS A JUGAR!!")
    //do{
        let input = getInput(COLORS);
        
        //respuesta
    
        //repetir
    //}while(true)

}
function genSecretColors(colors){
    let secretColors = [];

    for(let i = 0; i < 4; i++){
        let randomIndex = parseInt(Math.random() * colors.length);
        secretColors[i] = colors[randomIndex];
    }
    return secretColors;
}
function getInput(colors){
    let ok,input;
    do{
        input = console.readString("Esperando respuesta...")
        console.writeln(`${input.length}`)

        //este swith esta mal utilizado,. Utilizar solo ifs.
        switch (input){
            case (input.length !== 4):
                console.writeln("ERROR! Se deben ingresar 4 letras!")
                ok = false;
                break;
            case (!colors.includes(input[0])):
                console.writeln("ERROR! Los colores permitidos son 'r','b','g','y','c','m'")
                ok = false;
                break;
            case (!colors.includes(input[1])):
                console.writeln("ERROR! Los colores permitidos son 'r','b','g','y','c','m'")
                ok = false;
                break;
            case (!colors.includes(input[2])):
                console.writeln("ERROR! Los colores permitidos son 'r','b','g','y','c','m'")
                ok = false;
                break;
            case (!colors.includes(input[3])):
                console.writeln("ERROR! Los colores permitidos son 'r','b','g','y','c','m'")
                ok = false;
                break;
            default:
                ok=true;
        }
    }while(!ok)

    return input;
}
function printRules(){
    console.writeln("-----------------------------------------------")
    console.writeln("Debe ingresar grupos de 4 colores. Puede elegir \nentre red,blue,green,yellow,cyan y magenta. \ningresando la primera letra de cada color");
    console.writeln("\nEjemplo: ´rbyg´  => red,blue,yellow,green");
    console.writeln("\nSe devolvera el caracter X por cada acierto en \ncolor y posicion y O por cada acierto en color")
    console.writeln("-----------------------------------------------")
}


