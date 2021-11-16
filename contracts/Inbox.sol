// SPDX-License-Identifier: MIT

pragma solidity ^0.4.26; //solidity version

contract Inbox{ // contract definition that will have some number of methods and variables

    string public message; // declares all of the instance variables (and their types) that will exist in this contract
    
    
    //constructor
    constructor Inbox(string memory initialMessage) {
        message = initialMessage;
    }
    
    //defines different functions that will be members of this contract

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
  
} 