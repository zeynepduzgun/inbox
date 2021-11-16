const path = require("path");  //crosplatform compatability no matter which os system is used
const fs = require("fs");
const solc = require("solc");


const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol"); //reach the file
const source = fs.readFileSync(inboxPath,'utf8'); //read the content


//exporting methods inside of the inbox 
module.exports = solc.compile(source, 1).contracts[":Inbox"];
