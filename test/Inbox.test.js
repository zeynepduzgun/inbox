const assert = require("assert"); //used for making assertion for test values
const ganache = require("ganache-cli"); //etherium test network/ local network

//web3 is used to provide communication between JS and Etherium network as well. It is kinda portal for etherium world.
const Web3 = require("web3"); // it is used to create instances for web3 library - that is why it's written with capital(constructor).
const web3 = new Web3(ganache.provider()); // instance of Web3 that is connected to ganache network via provider.
const { abi, evm } = require('../compile');

let accounts;
let inbox; //represents what exist on the blockchain

beforeEach(async () => {
 // Get a list of all accounts
 accounts = await web3.eth.getAccounts();

 // Use one of those accounts to deploy the contract
inbox = await new web3.eth.Contract(abi) // teaches web3 about what methods an Inbox contract has via interface
.deploy({
  data: evm.bytecode.object,
  arguments: ['Hi there!'],
}) //Tells web3 that we want to deploy a new copy of this contract
    .send({from:accounts[0], gas:'1000000'}) // Instructs web3 to send out a transaction that creates this contract

});


describe('Inbox', () => {
  it('deploys a contract', () => {
    assert.ok(inbox.options.address);
  });

  it(' the contract has a default message', async () => {
    const message = await inbox.methods.message().call(); 
    assert.equal(message, 'Hi there!');
  });

  it('can change the contract message', async () => {
    await inbox.methods.setMessage('Bye!').send({from : accounts[0]}); 
    const message = await inbox.methods.message().call(); 
    assert.equal(message, 'Bye!');
    });

});
 