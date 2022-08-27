# Gas Comparison among ERC721, ERC721A, ERC1155

This project is mainly focused on measuring the gas costs for: 
- OpenZeppelin `ERC721Enumerable`
- OpenZeppelin `ERC1155`
- Azuki's `ERC721A`
- `ERC721Psi`

## Try this yourself
```
git clone git@github.com:abbylow/nft-comparison.git
npm install
npx hardhat test
```

## Test Result for Batch Mint
```
    OpenZeppelin ERC721Enumerable
        gas to mint 1:   102020
        gas to mint 2:   217540
        gas to mint 3:   333060
        gas to mint 4:   448580
        gas to mint 5:   564100
        gas to mint 6:   679620
        gas to mint 7:   795140
        gas to mint 8:   910660
        gas to mint 9:  1026180
        gas to mint 10: 1141700
    ✔ can batch mint (1307ms)

  OpenZeppelin ERC1155
        gas to mint 1:   52490
        gas to mint 2:   77041
        gas to mint 3:  101593
        gas to mint 4:  126144
        gas to mint 5:  150707
        gas to mint 6:  175259
        gas to mint 7:  199810
        gas to mint 8:  224362
        gas to mint 9:  248914
        gas to mint 10: 273466
    ✔ can batch mint (327ms)

  Azuki ERC721A
        gas to mint 1:   90654
        gas to mint 2:   92595
        gas to mint 3:   94536
        gas to mint 4:   96477
        gas to mint 5:   98418
        gas to mint 6:  100359
        gas to mint 7:  102300
        gas to mint 8:  104241
        gas to mint 9:  106182
        gas to mint 10: 108123
    ✔ can batch mint (296ms)

  ERC721Psi
        gas to mint 1:   91801
        gas to mint 2:   94097
        gas to mint 3:   96393
        gas to mint 4:   98689
        gas to mint 5:  100985
        gas to mint 6:  103281
        gas to mint 7:  105577
        gas to mint 8:  107873
        gas to mint 9:  110169
        gas to mint 10: 112465
    ✔ can batch mint (341ms)
```

### Reference
[ERC721 vs. ERC721A: Batch Minting NFTs by @thatguyintech](https://alchemy.com/blog/erc721-vs-erc721a-batch-minting-nfts)
[ERC721Psi: A truly scalable NFT implementation for low-gas on-chain applications and randomized metadata generation.](https://medium.com/@medievaldao/erc721psi-a-truly-scalable-nft-standard-for-low-gas-on-chain-applications-and-randomized-metadata-c25c9e8ac8a8)

### TODO
[] test the transfer function
