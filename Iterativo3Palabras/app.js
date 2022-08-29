const { Console } = require("../console")

const console = new Console();

let input = console.readString("Introduzca 3 palabras separadas por espacios ");

console.writeln();

let globalIndex = 0;
let output = ".";

for(let i = 0; i < 3; i++){
    let indexWord = globalIndex;
    while(input[indexWord] == " " || input[indexWord] == "."){
        indexWord++;
    }
    while(input[indexWord] != " " && input[indexWord] != "." && indexWord < input.length){
        output += input[indexWord];
        indexWord++;
    }
    globalIndex = indexWord;
    if(i !== 2){
        output += " ";
    }else{
        output += ".";
    }
}

console.writeln(output);