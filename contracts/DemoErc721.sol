// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract DemoErc721 is ERC721Enumerable {
    constructor() ERC721("Demo Erc721", "DEMOERC721") {}

    function mint(address to, uint256 quantity) external payable {
        for (uint256 i = 0; i < quantity; i++) {
            _safeMint(to, totalSupply());
        }
    }
}
