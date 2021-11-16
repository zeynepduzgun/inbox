const path = require("path");  //crosplatform compatability no matter which os system is used
const fs = require("fs");
const solc = require("solc");


const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol"); //reach the file
const source = fs.readFileSync(inboxPath,'utf8'); //read the content


const input = {
    language: 'Solidity',
    sources: {
      'Inbox.sol': {
        content: source,
      },
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['*'],
        },
      },
    },
  };

  
  //exporting methods inside of the inbox 
  module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
    'Inbox.sol'
  ].Inbox;
  