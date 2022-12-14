// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "erc721a/contracts/ERC721A.sol";

contract DemoErc721A is ERC721A {
    constructor() ERC721A("Demo Erc721A", "DEMOERC721A") {}

    function mintBatch(uint256 quantity) external payable {
        _mint(msg.sender, quantity);
    }

    function transferBatch(address from, address to, uint256[] memory ids) external payable {
        for (uint256 i = 0; i < ids.length; i++) {
            safeTransferFrom(from, to, ids[i]);
        }
    }
}
