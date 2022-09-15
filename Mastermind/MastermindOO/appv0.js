const { Console } = require("../../console");

const console = new Console();

/**
 * Patron: voy a utilizar el patron factory para crear los objetos.
 * + Podria tener:
 *  - objeto MENU que muestre el menu del juego y pida respuesta de jugar o no -- listo
 *  - objeto GAME que represente a la jugada especifica y gestione su tiempo de vida.
 *  - objeto SECRET COMBINATION que representa la cadena secreta, la genere y gestione.
 *  - objeto USER RESPONSE que se ocupe de los ingresos del usuario.
 *  - objeto RULES que explica brevemente como jugar -- listo
 */

playMasterMind();

function playMasterMind(){
    let menu = createGameMenu();
    let response, game;
    do{
        response = menu.show();
        if(response){
            game = initGame();
            game.play();
        }
    }while(response)
    menu.farewell();
}
function initGame(){
    let that = {
        colors: ['r','b','g','y','c','m'],
        chances: 10,
        findSymbol: 'X',
        includesSymbol: 'O',
        emptySymbol: '-',
        rules: null,
        secretColors: null,
        attemps: [],
    }
    return{
        play: function(){
            that.rules = createRules(that.colors,that.findSymbol,that.includesSymbol,that.emptySymbol);
            that.rules.show();
            that.secretColors = createSecretColors(that.colors);
            that.secretColors.genSecretColors();
            let lastAttemp = null;
            do{
                lastAttemp = createAttemp(that.colors,that.secretColors);
                lastAttemp.run()
                that.attemps[that.attemps.length] = lastAttemp;
            }while(attemps.length < chances && lastAttemp.isWinnerAttemp());
            

        }
    }
}
function createAttemp(colors,secretColors){
    //seguir logica del intento
    //un intento tendra el ingreso del jugador
    //y la comparacion de ese ingreso con la cadena secreta.
    //luego le podremos preguntar si es un intento ganador o no.
}
//terminar esta
//function createUserInput(colors){
//
//}
function createSecretColors(colors){
    let that = {
        colors: colors,
        secretColors:''
    }
    return{
        genSecretColors: function(){
            let generatedSecretColors = [];
            for(let i = 0; i < 4; i++){
                let randomIndex = parseInt(Math.random() * that.colors.length);
                generatedSecretColors[i] = that.colors[randomIndex];
            }
            that.secretColors = generatedSecretColors;
        },
        getSecretColors: function(){
            return that.secretColors;
        }
    }
}
function createGameMenu(){
    let that = {
        title: "JUEGUEMOS MASTERMIND",
        optionYes: 'y',
        optionNo: 'n',
        printMenu: function(){
            console.writeln("------------------------------------------")
            console.writeln(`|       --- ${this.title} ---     |`);
            console.writeln(`|              --- SI [${this.optionYes}] ---            |`);
            console.writeln(`|              --- NO [${this.optionNo}] ---            |`);
            console.writeln("------------------------------------------")
        },
        getResponse: function(){
            let rtn,ok;
            do{
                rtn = console.readString("Esperando respuesta....");
                ok = rtn === this.optionYes || rtn === this.optionNo;
                if(!ok)
                    console.writeln(`VALOR INVALIDO!! Debe ingresar ${this.optionYes} o ${this.optionNo}`); 
            }while(!ok);
            return rtn;
        }
    }
    return {
        show: function(){
            that.printMenu();
            let userResponse = that.getResponse();
            return userResponse === that.optionYes;
        },
        farewell: function(){
            console.writeln("!!! ADIOS !!!");
        }
    }
}
function createRules(colors,findSymbol,includesSymbol,emptySymbol){
    let that = {
        colors: colors,
        findSymbol: findSymbol,
        includesSymbol: includesSymbol,
        emptySymbol: emptySymbol
    }
    return{
        show: function(){
            console.writeln("------------------------------------------")
            console.writeln("REGLAS......")
            console.writeln(`Debe ingresar grupos de 4 colores. Puede  `);
            console.writeln(`elegir entre ${that.colors} ingresando la `);
            console.writeln(`primera letra de cada color.              `);
            console.writeln(`Ejemplo: ´${that.colors[0]},${that.colors[1]},${that.colors[2]},${that.colors[3]}´`);
            console.writeln(`Se devolvera el caracter ${findSymbol} por cada acierto`)
            console.writeln(`en color y posicion, ${includesSymbol} por cada acierto en`)
            console.writeln(`color y el caracter ${emptySymbol} en cualquier otro caso`)
            console.writeln("------------------------------------------")
            console.readString("Precione cualquier tecla para continuar...")
        }
    }
}
