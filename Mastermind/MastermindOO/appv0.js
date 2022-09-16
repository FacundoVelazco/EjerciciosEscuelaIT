const { Console } = require("../../console");

const console = new Console();

playMasterMind();

function playMasterMind(){
    let menu = createGameMenu();
    let response, game;
    do{
        menu.show();
        response = menu.getResponse();
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
                console.writeln(that.secretColors.getSecretColors());
                console.writeln(`Intentos restantes: ${that.chances - that.attemps.length}`);
                lastAttemp = createAttemp(that.colors,that.secretColors,that.findSymbol,that.includesSymbol,that.emptySymbol);
                lastAttemp.run();
                lastAttemp.show(); 
                that.attemps.push(lastAttemp);
            }while(that.attemps.length < that.chances && !lastAttemp.isWinnerAttemp());

            if(lastAttemp.isWinnerAttemp())
                console.writeln("El jugador gana!!!!! :D");
            else 
                console.writeln("El jugador pierde!!!!! ;{");
        }
    }
}
function createAttemp(colors,secretColors,findSymbol,includesSymbol,emptySymbol){
    let that = {
        colors:colors,
        secretColors:secretColors,
        findSymbol:findSymbol,
        includesSymbol:includesSymbol,
        emptySymbol:emptySymbol,
        userInput:null,
        clue:null
    }
    return {
        run: function(){
            that.userInput = createUserInput(that.colors);
            that.userInput.genUserInput();
            that.clue = createClue(that.secretColors,that.userInput,that.findSymbol,that.includesSymbol,that.emptySymbol);
            that.clue.genClue();
        },
        show: function(){
            console.writeln("------------------------------------------")
            console.writeln(`|       Ingreso: ${that.userInput.getUserInput()}   Pista: ${that.clue.getClue()}      |`);
            console.writeln("------------------------------------------")
        },
        isWinnerAttemp: function(){
            win = true;
            for(let i = 0; i < 4; i++)
                win &&= that.clue.getClue()[i] === that.findSymbol;
            return win;
        }
    }
}
function createClue(secretColors,userInput,findSymbol,includesSymbol,emptySymbol){
    let that = {
        secretColors:secretColors,
        userInput:userInput,
        findSymbol:findSymbol,
        includesSymbol:includesSymbol,
        emptySymbol:emptySymbol,
        clue:""
    }
    return{
        genClue: function(){
            let secretColors = that.secretColors.getSecretColors();
            let userInput = that.userInput.getUserInput();
            const clue = [];
            for(let i=0; i < 4; i++){
                if(secretColors[i] === userInput[i])
                    clue.unshift(that.findSymbol); 
                else if(secretColors.includes(userInput[i]))
                    clue.push(that.includesSymbol);    
            }
            for(let i=clue.length; i < 4;i++)
                clue.push(that.emptySymbol);
            that.clue = clue[0] + clue[1] + clue[2] + clue[3];
        },
        getClue: function(){
            return that.clue;
        }
    }
}
function createUserInput(colors){
    let that = {
        colors: colors,
        userInput : ''
    }
    return {
        genUserInput: function(){
            let ok,input;
            do{
                ok = true;
                input = console.readString("Esperando respuesta...");
                if(input.length !== 4){
                    console.writeln("ERROR! Se deben ingresar 4 letras!");
                    ok = false;
                }
                for(let i = 0; ok && i < 4; i++){
                    ok &&= that.colors.includes(input[i]);
                    if(!ok) 
                        console.writeln("ERROR! Los colores permitidos son 'r','b','g','y','c','m'");  
                }
            }while(!ok);

            that.userInput = input;
        },
        getUserInput: function(){
            return that.userInput; 
        }
    }
}
function createSecretColors(colors){
    let that = {
        colors: colors,
        secretColors:""
    }
    return{
        genSecretColors: function(){
            that.secretColors = "";
            for(let i = 0; i < 4; i++){
                let randomIndex = parseInt(Math.random() * that.colors.length);
                that.secretColors += that.colors[randomIndex];
            }
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
        },
        getResponse: function(){
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
            console.readString("Precione enter para continuar...")
        }
    }
}