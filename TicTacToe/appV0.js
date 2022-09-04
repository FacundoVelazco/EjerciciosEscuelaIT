/**
 * Tic tac toe orientado a pocesos
 * de curso de Escuela IT
 * 
 * Algunas suposiciones:
 * - Hay dos jugadores.
 * - El juego termina cuando se llena el tablero o cuando alguien gana.
 */

const { Console } = require("../console")

const console = new Console();

let playerResponse;

do{
    console.writeln("JUGUEMOS TIC TAC TOE!!!");
    console.writeln("       y - Jugar       ");
    console.writeln("       n - Salir       ");
    
    playerResponse = console.readString("Ingrese respuesta....");
    
    if(playerResponse === 'y') playTicTacToe();
    if(playerResponse !== 'y' && playerResponse !== 'n') console.writeln("Ingrese respuesta valida!! ;v");
}while(playerResponse !== 'n');

console.writeln("ADIOS!!")

function playTicTacToe(){
    const EMPTY_TOKEN = '-'
    const board = [
        [EMPTY_TOKEN,EMPTY_TOKEN,EMPTY_TOKEN],
        [EMPTY_TOKEN,EMPTY_TOKEN,EMPTY_TOKEN],
        [EMPTY_TOKEN,EMPTY_TOKEN,EMPTY_TOKEN]
    ]
    let player = 'X'
    let winner = undefined;
    do{
        drawBoard(board);

        /**
         * falta desarrollar esta parte del algoritmo
         * 
         * 
         * 
         * 
         */

        if(player === 'X'){
            player='O'
        }else{player='X'}

        winner = gameFinished(board); 
    }while(winner === undefined);

    console.writeln("Juego terminado");
    if(winner === 'empate'){
        console.writeln(`Hubo un empate`);
    }else{
        console.writeln(`El ganador es ${winner}`);
    }
}

function drawBoard(board){
    console.writeln("----------------------------------------");
    console.writeln(`              | ${board[0][0]} | ${board[0][1]} | ${board[0][2]} | `)
    console.writeln(`              | ${board[1][0]} | ${board[1][1]} | ${board[1][2]} | `)
    console.writeln(`              | ${board[2][0]} | ${board[2][1]} | ${board[2][2]} | `)
    console.writeln("----------------------------------------");
}
function gameFinished(board){
    let rtn = undefined;
    for(let i = 0; i < 3; i++){
        //row
        if(board[i][0] === 'O' && board[i][1] === 'O'&& board[i][2] === 'O') rtn = 'O';
        if(board[i][0] === 'X' && board[i][1] === 'X'&& board[i][2] === 'X') rtn = 'X';
        //column
        if(board[0][i] === 'O' && board[1][i] === 'O'&& board[2][i] === 'O') rtn = 'O';
        if(board[0][i] === 'X' && board[1][i] === 'X'&& board[2][i] === 'X') rtn = 'X';
    }
    //diagonal
    if(board[0][0] === 'O' && board[1][1] === 'O'&& board[2][2] === 'O') rtn = 'O';
    if(board[0][0] === 'X' && board[1][1] === 'X'&& board[2][2] === 'X') rtn = 'X';
    //inverted diagonal
    if(board[0][2] === 'O' && board[1][1] === 'O'&& board[2][0] === 'O') rtn = 'O';
    if(board[0][2] === 'X' && board[1][1] === 'X'&& board[2][0] === 'X') rtn = 'X';
    
    let boardFullySpaceCounter = 0;
    for(let i=0; i < 3 ; i++){
        for(let j=0; j < 3; j++){
            if(board[i][j] === 'X'|| board[i][j] == 'O') boardFullySpaceCounter++;
        }
    }
    if(boardFullySpaceCounter === 9) rtn = 'empate';
    return rtn;
}