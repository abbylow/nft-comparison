const { ethers } = require("hardhat");

describe("OpenZeppelin ERC721Enumerable", function () {
    it(`can batch mint`, async function () {
        for (let i = 1; i < 11; i++) {
            // Initialize the OpenZeppelin ERC721Enumerable Contract.
            const erc721 = await initializeContract("DemoErc721");

            // Simulate a user wallet.
            const [_, addr1] = await ethers.getSigners();

            // Batch mint and log gas cost for every batch (i represents the quantity of the batch).
            // await mintAndLogGas(erc721, addr1, i);
            const mintTx = await erc721.connect(addr1).mint(addr1.address, i);
            const mintTxnResponse = await mintTx.wait();
            console.log(`\tgas to mint ${i}:`, mintTxnResponse.gasUsed.toString());
        }
    });
});

describe("Azuki ERC721A", function () {
    it(`can batch mint`, async function () {
        for (let i = 1; i < 11; i++) {
            // Initialize the Azuki Contract.
            const erc721a = await initializeContract("DemoErc721A");

            // Simulate a user wallet.
            const [_, addr1] = await ethers.getSigners();

            // Batch mint and log gas costs.
            // await mintAndLogGas(erc721a, addr1, i);
            const mintTx = await erc721a.connect(addr1).mint(i);
            const mintTxnResponse = await mintTx.wait();
            console.log(`\tgas to mint ${i}:`, mintTxnResponse.gasUsed.toString());
        }
    });
});

describe("OpenZeppelin ERC1155", function () {
    it(`can batch mint`, async function () {
        for (let i = 1; i < 11; i++) {
            // Initialize the OpenZeppelin ERC1155 Contract.
            const erc1155 = await initializeContract("DemoErc1155");

            // Simulate a user wallet.
            const [_, addr1] = await ethers.getSigners();

            const ids = Array.from({length: i}).map((el, index) => index + 1);
            const amounts = Array.from({length: i}).fill(1); // amount is always one because we just want to mint 1 NFT for each token ID
            // Batch mint and log gas costs.
            const mintTx = await erc1155.connect(addr1).mintBatch(addr1.address, ids, amounts);
            const mintTxnResponse = await mintTx.wait();
            console.log(`\tgas to mint ${i}:`, mintTxnResponse.gasUsed.toString());
        }
    });
});



const initializeContract = async (contract) => {
    const contractFactory = await ethers.getContractFactory(contract);
    const contractInstance = await contractFactory.deploy();

    return contractInstance;
}
