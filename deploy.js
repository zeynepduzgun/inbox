const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} =  require('./compile');

const provider = new HDWalletProvider(
'bus auto mistake slight panther common army brick demise visual invite onion',
'https://goerli.infura.io/v3/24f0b466b09d4433a3a853f99e7a5d8b'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account: ', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data:bytecode, arguments:['Hi there!']})
    .send({gas:'1000000', from:accounts[0]})

console.log('Contract deployed to : ' , result.options.address);
provider.engine.stop();
};

deploy();