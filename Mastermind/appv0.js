const { Console } = require("../console");

const console = new Console();

initGame();

function initGame(){
    let option;
    do{
        option = printMenu();
        if(option) 
            playMastermind();
    }while(option);
    console.writeln("ADIOSSS!!!")
}
function playMastermind(){
    const COLORS = ['r','b','g','y','c','m'];
    const CHANCES = 10;
    printRules();
    const secretColors = genSecretColors(COLORS);
    
    console.writeln("EMPECEMOS A JUGAR!!")
    
    let moves = 0, win;
    do{
        let input = getInput(COLORS);
        printBoard(input,secretColors);
        win = compare(secretColors,input);
        moves++;
    }while(moves < CHANCES && !win)

    gameFinished(win,secretColors);
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
        ok = true;
        input = console.readString("Esperando respuesta...");
        if(input.length !== 4){
            console.writeln("ERROR! Se deben ingresar 4 letras!");
            ok = false;
        }
        for(let i = 0; ok && i < 4; i++){
            ok &&= colors.includes(input[i]);
            if(!ok) 
                console.writeln("ERROR! Los colores permitidos son 'r','b','g','y','c','m'");  
        }
    }while(!ok);
    
    return input;
}
function compare(secretColors,input){
    let equals = true;
    for(let i =0; equals && i < secretColors.length; i++)
    equals &&= secretColors[i] === input[i];
    return equals;
}
function printBoard(input,secretColors){
    const clue = genClue(input,secretColors);
    console.writeln("-----------------------------------------------")
    console.writeln(`                  ${input} || ${clue}`)
    console.writeln("-----------------------------------------------")
}
function genClue(input,secretColors){
    const INCLUDED_SYMBOL = 'O';
    const SUCCESS_SYMBOL = 'X';
    const EMPTY_SYMBOL = '-';
    const clue = [];
    for(let i=0; i < 4; i++){
        if(secretColors[i] === input[i])
            clue.unshift(SUCCESS_SYMBOL);
        else if(secretColors.includes(input[i]))
            clue.push(INCLUDED_SYMBOL);    
    }
    for(let i=clue.length; i < 4;i++)
        clue.push(EMPTY_SYMBOL);
    return clue.toString();
}
function gameFinished(win,secretColors){
    console.writeln("JUEGO TERMINADO!!!")
    if(win){
        console.writeln("El jugador gana!!! :D")
    }else{
        console.writeln("El jugador pierde!!! :-(")
        console.writeln(`La palabra secreta era ${secretColors}`)
    }
    console.writeln("-----------------------------------------------")
}
function printMenu(){
    let rtn = true, option;
    console.writeln("JUGUEMOS MASTERMIND!!!");
    console.writeln("    [y] - SI ");
    console.writeln("     ...presione otra tecla para salir");
    option = console.readString("ingrese respuesta...");
    if(option !== 'y')
        rtn = false;
    return rtn;
}
function printRules(){
    console.writeln("-----------------------------------------------")
    console.writeln("Debe ingresar grupos de 4 colores. Puede elegir \nentre red,blue,green,yellow,cyan y magenta. \ningresando la primera letra de cada color");
    console.writeln("\nEjemplo: ´rbyg´  => red,blue,yellow,green");
    console.writeln("\nSe devolvera el caracter X por cada acierto en \ncolor y posicion y O por cada acierto en color")
    console.writeln("-----------------------------------------------")
}