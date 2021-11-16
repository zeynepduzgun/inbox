pragma solidity ^0.4.17; //solidity version

contract Inbox{ // contract definition that will have some number of methods and variables

    string public message; // declares all of the instance variables (and their types) that will exist in this contract
    
    
    //constructor
    function Inbox(string initialMessage) public {
        message = initialMessage;
    }
    
    //defines different functions that will be members of this contract

    function setMessage(string newMessage) public {
        message = newMessage;
    }
  
} 