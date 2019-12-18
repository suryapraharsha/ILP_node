const fs = require('fs');
const path = require('path');
const filenames = path.join(__dirname,'./filenames.txt');
const yargs = require("yargs");


const options = yargs
 .usage("Usage: -fn <filename>")
 .option("n", { alias: "filename", describe: "Your filename", type: "string", demandOption: true })
 .argv;



const fileName = `${options.filename}`;

fs.readFile(filenames,(err,data)=>{
    
    myobj =JSON.parse(data.toString())

    filenamesarray=myobj.filenames;

    if(filenamesarray.includes(fileName)){
        console.log("check if file already exists");
        
    }else{
        fs.writeFileSync(fileName,"you are awesome",()=> { console.log('File Created :: ',fileName)});
        filenamesarray.push(fileName);
        fs.writeFileSync(filenames,JSON.stringify(myobj),()=>{ console.log('File Created :: ',fileName)})
    }

})

