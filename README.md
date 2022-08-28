# Gas Comparison among ERC721, ERC721A, ERC721Psi, ERC1155

This project is mainly focused on measuring the gas costs for: 
- OpenZeppelin `ERC721Enumerable`
- OpenZeppelin `ERC1155`
- Azuki's `ERC721A` v4
- `ERC721Psi` (Inspired by Azuki's ERC721A) v0.6

## Try this yourself
```
git clone git@github.com:abbylow/nft-comparison.git
npm install
npx hardhat test
```

## Test Result for Batch Mint
|             | ERC721Enumerable | ERC1155 | ERC721A | ERC721Psi |
| ----------- | ---------------- | ------- | ------- | --------- |
| Mint  1 NFT |           101998 |   52478 |   90610 |     91824 |
| Mint  2 NFT |           217518 |   77029 |   92551 |     94120 |
| Mint  3 NFT |           333038 |  101581 |   94492 |     96416 |
| Mint  4 NFT |           448558 |  126132 |   96433 |     98712 |
| Mint  5 NFT |           564078 |  150695 |   98374 |    101008 |
| Mint  6 NFT |           679598 |  175247 |  100315 |    103304 |
| Mint  7 NFT |           795118 |  199798 |  102256 |    105600 |
| Mint  8 NFT |           910638 |  224350 |  104197 |    107896 |
| Mint  9 NFT |          1026158 |  248902 |  106138 |    110192 |
| Mint 10 NFT |          1141678 |  273454 |  108079 |    112488 |

## Test Result for Batch Transfer
|                 | ERC721Enumerable | ERC1155 | ERC721A | ERC721Psi |
| --------------- | ---------------- | ------- | ------- | --------- |
| Transfer  1 NFT |            70687 |   57053 |   66220 |     46985 |
| Transfer  2 NFT |           115750 |   82220 |   98004 |     84892 |
| Transfer  3 NFT |           154586 |  107400 |  127442 |    120003 |
| Transfer  4 NFT |           195032 |  132567 |  156880 |    155117 |
| Transfer  5 NFT |           235977 |  157734 |  186318 |    190234 |
| Transfer  6 NFT |           277677 |  182902 |  215756 |    225355 |
| Transfer  7 NFT |           318622 |  208069 |  245194 |    260479 |
| Transfer  8 NFT |           360322 |  233237 |  274632 |    295606 |
| Transfer  9 NFT |           401268 |  258405 |  304071 |    330737 |
| Transfer 10 NFT |           442968 |  283561 |  333509 |    365870 |

## Test Result for Transfer nth Token
OpenZeppelin ERC721Enumerable:
|       | Mint 1 | Mint 2 | Mint 3 | Mint 4 | Mint 5 |
| ----- | ------ | ------ | ------ | ------ | ------ |
| #1    |  69480 |  95035 |  95035 |  95035 |  95035 |
| #2    |        |  90192 | 100647 | 100647 | 100647 |
| #3    |        |        |  90192 | 100647 | 100647 |
| #4    |        |        |        |  90192 | 100647 |
| #5    |        |        |        |        |  90192 |

OpenZeppelin ERC1155:
|       | Mint 1 | Mint 2 | Mint 3 | Mint 4 | Mint 5 |
| ----- | ------ | ------ | ------ | ------ | ------ |
| #1    |  53359 |  53359 |  53359 |  53359 |  53359 |
| #2    |        |  53371 |  53371 |  53371 |  53371 |
| #3    |        |        |  53371 |  53371 |  53371 |
| #4    |        |        |        |  53371 |  53371 |
| #5    |        |        |        |        |  53371 |

Azuki ERC721A:
|       | Mint 1 | Mint 2 | Mint 3 | Mint 4 | Mint 5 |
| ----- | ------ | ------ | ------ | ------ | ------ |
| #1    |  65013 |  87451 |  87451 |  87451 |  87451 |
| #2    |        |  86711 | 106803 | 106803 | 106803 |
| #3    |        |        |  88951 | 109043 | 109043 |
| #4    |        |        |        |  91191 | 111283 |
| #5    |        |        |        |        |  93431 |

ERC721Psi:
|       | Mint 1 | Mint 2 | Mint 3 | Mint 4 | Mint 5 |
| ----- | ------ | ------ | ------ | ------ | ------ |
| #1    |  45778 |  71239 |  71239 |  71239 |  71239 |
| #2    |        |  68106 |  90767 |  90767 |  90767 |
| #3    |        |        |  68106 |  90767 |  90767 |
| #4    |        |        |        |  68106 |  90767 |
| #5    |        |        |        |        |  68106 |

### Reference
[ERC721 vs. ERC721A: Batch Minting NFTs by @thatguyintech](https://alchemy.com/blog/erc721-vs-erc721a-batch-minting-nfts)
[ERC721Psi: A truly scalable NFT implementation for low-gas on-chain applications and randomized metadata generation.](https://medium.com/@medievaldao/erc721psi-a-truly-scalable-nft-standard-for-low-gas-on-chain-applications-and-randomized-metadata-c25c9e8ac8a8)
