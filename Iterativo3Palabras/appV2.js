const { Console } = require("../console")

const console = new Console();

let input = console.readString("Introduzca 3 palabras separadas por espacios ");

let globalIndex = 0;
let output = ".";

while(globalIndex < input.length){
    if(input[globalIndex] != " " && input[globalIndex] != "."){
        output += input[globalIndex];
        if(input[globalIndex+1] == " " || input[globalIndex+1] == "."){
            output += " ";
        }
    }
    globalIndex++;
}
output.trimEnd();
output += ".";
console.writeln(output);