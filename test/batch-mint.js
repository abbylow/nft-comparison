const { ethers } = require("hardhat");

const TOTAL_QUANTITY = 10;

describe("OpenZeppelin ERC721Enumerable", function () {
    it(`can batch mint`, async function () {
        for (let i = 1; i <= TOTAL_QUANTITY; i++) {
            // Initialize the OpenZeppelin ERC721Enumerable Contract.
            const erc721 = await initializeContract("DemoErc721");

            // Simulate a user wallet.
            const [_, addr1] = await ethers.getSigners();

            // Batch mint and log gas cost for every batch (i represents the quantity of the batch).
            const mintTx = await erc721.connect(addr1).mintBatch(addr1.address, i);
            const mintTxnResponse = await mintTx.wait();
            console.log(`\tgas to mint ${i} NFTs:`, mintTxnResponse.gasUsed.toString());
        }
    });
});

describe("OpenZeppelin ERC1155", function () {
    it(`can batch mint`, async function () {
        for (let i = 1; i <= TOTAL_QUANTITY; i++) {
            // Initialize the OpenZeppelin ERC1155 Contract.
            const erc1155 = await initializeContract("DemoErc1155");

            // Simulate a user wallet.
            const [_, addr1] = await ethers.getSigners();

            const ids = Array.from({length: i}).map((el, index) => index);
            const amounts = Array.from({length: i}).fill(1); // amount is always one because we just want to mint 1 NFT for each token ID
            
            // Batch mint and log gas costs.
            const mintTx = await erc1155.connect(addr1).mintBatch(addr1.address, ids, amounts);
            const mintTxnResponse = await mintTx.wait();
            console.log(`\tgas to mint ${i} NFTs:`, mintTxnResponse.gasUsed.toString());
        }
    });
});

describe("Azuki ERC721A", function () {
    it(`can batch mint`, async function () {
        for (let i = 1; i <= TOTAL_QUANTITY; i++) {
            // Initialize the Azuki Contract.
            const erc721a = await initializeContract("DemoErc721A");

            // Simulate a user wallet.
            const [_, addr1] = await ethers.getSigners();

            // Batch mint and log gas costs.
            const mintTx = await erc721a.connect(addr1).mintBatch(i);
            const mintTxnResponse = await mintTx.wait();
            console.log(`\tgas to mint ${i} NFTs:`, mintTxnResponse.gasUsed.toString());
        }
    });
});

describe("ERC721Psi", function () {
    it(`can batch mint`, async function () {
        for (let i = 1; i <= TOTAL_QUANTITY; i++) {
            // Initialize the ERC721Psi Contract.
            const erc721psi = await initializeContract("DemoERC721Psi");

            // Simulate a user wallet.
            const [_, addr1] = await ethers.getSigners();

            // Batch mint and log gas costs.
            const mintTx = await erc721psi.connect(addr1).mintBatch(i);
            const mintTxnResponse = await mintTx.wait();
            console.log(`\tgas to mint ${i} NFTs:`, mintTxnResponse.gasUsed.toString());
        }
    });
});

const initializeContract = async (contract) => {
    const contractFactory = await ethers.getContractFactory(contract);
    const contractInstance = await contractFactory.deploy();

    return contractInstance;
}
