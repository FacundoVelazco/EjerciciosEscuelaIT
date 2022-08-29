const { Console } = require("../console")

const console = new Console();

const DAYS_IN_MONTH = 30;
const WINTER_INIT_DAY = 0;
const SPRING_INIT_DAY = 81;
const SUMMER_INIT_DAY = 171;
const FALL_INIT_DAY = 261;
const BASE = 351;
const DAYS_LOSE_WITH_CHANGE_BASE = 12*DAYS_IN_MONTH - BASE;
const seasonCycles = [WINTER_INIT_DAY,SPRING_INIT_DAY,SUMMER_INIT_DAY,FALL_INIT_DAY,BASE]

const day = console.readNumber("Ingrese un dia (1-30): ");
const month = console.readNumber("Ingrese un mes (1-12): ");
const year = console.readNumber("Ingrese un año (1 - ...): ");

const dateConverted = (day + (month-1) * DAYS_IN_MONTH) % BASE;

let cycle = -1, subCycle = -1, it = 0;

do{
    if(seasonCycles[it] <= dateConverted && dateConverted < seasonCycles[it+1]) cycle = it;
    it++;
}while(cycle < 0)

let specialCaseWithWinter, lowBorder, highBorder;
it = 0;
do{
    specialCaseWithWinter = (cycle === 0) ? DAYS_LOSE_WITH_CHANGE_BASE : 0;
    lowBorder = seasonCycles[cycle] + DAYS_IN_MONTH * it - (it > 0 ? specialCaseWithWinter : 0);
    highBorder = seasonCycles[cycle] + DAYS_IN_MONTH * (it + 1) - specialCaseWithWinter;

    if(lowBorder <= dateConverted && dateConverted < highBorder) subCycle=it;

    it++;
}while(subCycle < 0)

const seasonCyclesText = ["invierno","primavera","verano","otoño"];
const subSeasonCyclesText = ["principios","mediados","finales"];

console.writeln(`La fecha ${day} del ${month} de ${year} va a caer a ${subSeasonCyclesText[subCycle]} de ${seasonCyclesText[cycle]}`);