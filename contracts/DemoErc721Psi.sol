// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "erc721psi/contracts/ERC721Psi.sol";

contract DemoERC721Psi is ERC721Psi {

    constructor() 
        ERC721Psi ("Adventurer", "ADVENTURER"){
    }

    function mint(uint256 quantity) external payable {
        // _safeMint's second argument now takes in a quantity, not a tokenId. (same as ERC721A)
        _safeMint(msg.sender, quantity);
    }

}