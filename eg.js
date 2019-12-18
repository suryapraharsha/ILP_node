const yargs = require("yargs");
const options = yargs
 .usage("Usage: -fn <filename>")
 .option("n", { alias: "filename", describe: "Your filename", type: "string", demandOption: true })
 .argv;

const greeting = `${options.filename}`;

console.log(greeting);