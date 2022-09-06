const { Console } = require("../console");

const console = new Console();

const colors = ['R','B','G','Y','C','M']

console.writeln(`${colors}`)
console.writeln(`R`)
console.writeln(`${colors.includes('A')}`)