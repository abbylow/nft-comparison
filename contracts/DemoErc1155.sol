// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract DemoErc1155 is ERC1155 {
    constructor() ERC1155("https://ipfs.io/ipfs/bafybeihjjkwdrxxjnuwevlqtqmh3iegcadc32sio4wmo7bv2gbf34qs34a/{id}.json") {}

    function mintBatch(
        address to,
        uint256[] memory ids,
        uint256[] memory amounts
    ) external payable {
        _mintBatch(to, ids, amounts, "");
    }
}
