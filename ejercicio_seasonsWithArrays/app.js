/*
1-seasonWithPart/v0
Considerar todos los meses de 30 días
Las estaciones comienzan: invierno el 21/12; primavera el 21/3; verano el 21/6; otoño el 21/9
Considerar: "a primeros" los 30 primeros días de la estación;
 "a mediados" los siguientes 30 días de la estación; "a finales" los últimos 30 días de la estación
*/
const { Console } = require("../console");

const console = new Console();

const DAY_LIMIT = 21;
const MONTH_LENGTH = 30;
const WINTER_BORDER = 11*MONTH_LENGTH+DAY_LIMIT;
const SPRING_BORDER = 2*MONTH_LENGTH+DAY_LIMIT;
const SUMMER_BORDER = 5*MONTH_LENGTH+DAY_LIMIT;
const FALL_BORDER = 8*MONTH_LENGTH+DAY_LIMIT;
const LAST_DAY = 12*MONTH_LENGTH;

let dia,mes,año,ok = true;
do{
    dia = console.readNumber("Introduzca un dia (1-30)... ")
    mes = console.readNumber("Introduzca un mes (1-12)... ")
    año = console.readNumber("Introduzca un dia (1-...)... ")
    if((dia<1 || 30<dia)||(mes<1 || 12<mes)||(año<1)){
        console.writeln("Datos invalidos...")
        ok = false;
    } 
}while(!ok)

let msg = `El dia ${dia} del ${mes} de ${año} cae a `;
let dateConverted = dia + (mes-1)*MONTH_LENGTH;

if(WINTER_BORDER<=dateConverted || dateConverted<SPRING_BORDER){
    if(dateConverted <= LAST_DAY || dateConverted < DAY_LIMIT) msg += `inicios de invierno`;
    else if(DAY_LIMIT <= dateConverted && dateConverted < (DAY_LIMIT+MONTH_LENGTH)) msg += `mediados de invierno`;
    else if((DAY_LIMIT+MONTH_LENGTH) <= dateConverted && dateConverted < (DAY_LIMIT+MONTH_LENGTH*2)) msg += `finales de invierno`;
}

else if(SPRING_BORDER<=dateConverted && dateConverted<SUMMER_BORDER){
    if((DAY_LIMIT+MONTH_LENGTH*2) <= dateConverted && dateConverted < (DAY_LIMIT+MONTH_LENGTH*3)) msg += `inicios de primavera`;
    else if((DAY_LIMIT+MONTH_LENGTH*3) <= dateConverted && dateConverted < (DAY_LIMIT+MONTH_LENGTH*4)) msg += `mediados de primavera`;
    else if((DAY_LIMIT+MONTH_LENGTH*4) <= dateConverted && dateConverted < (DAY_LIMIT+MONTH_LENGTH*5)) msg += `finales de primavera`;
}

else if(SUMMER_BORDER<=dateConverted && dateConverted<FALL_BORDER){
    if((DAY_LIMIT+MONTH_LENGTH*5) <= dateConverted && dateConverted < (DAY_LIMIT+MONTH_LENGTH*6)) msg += `inicios de verano`;
    else if((DAY_LIMIT+MONTH_LENGTH*6) <= dateConverted && dateConverted < (DAY_LIMIT+MONTH_LENGTH*7)) msg += `mediados de verano`;
    else if((DAY_LIMIT+MONTH_LENGTH*7) <= dateConverted && dateConverted < (DAY_LIMIT+MONTH_LENGTH*8)) msg += `finales de verano`;
}

else if(FALL_BORDER<=dateConverted && dateConverted<WINTER_BORDER){
    if((DAY_LIMIT+MONTH_LENGTH*8) <= dateConverted && dateConverted < (DAY_LIMIT+MONTH_LENGTH*9)) msg += `inicios de otoño`;
    else if((DAY_LIMIT+MONTH_LENGTH*9) <= dateConverted && dateConverted < (DAY_LIMIT+MONTH_LENGTH*10)) msg += `mediados de otoño`;
    else if((DAY_LIMIT+MONTH_LENGTH*10) <= dateConverted && dateConverted < (DAY_LIMIT+MONTH_LENGTH*11)) msg += `finales de otoño`;
}

console.writeln(msg);