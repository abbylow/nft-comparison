// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "erc721psi/contracts/ERC721Psi.sol";

contract DemoERC721Psi is ERC721Psi {
    constructor() ERC721Psi("Adventurer", "ADVENTURER") {}

    function mintBatch(uint256 quantity) external payable {
        // _safeMint's second argument now takes in a quantity, not a tokenId. (same as ERC721A)
        _safeMint(msg.sender, quantity);
    }

    function transferBatch(
        address from,
        address to,
        uint256[] memory ids
    ) external payable {
        for (uint256 i = 0; i < ids.length; i++) {
            safeTransferFrom(from, to, ids[i]);
        }
    }
}
