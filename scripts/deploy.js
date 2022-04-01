const hre = require('hardhat');

async function main() {
  const horoscopeNFT = await hre.ethers.getContractFactory('horoscopeNFT');
  const hscp = await horoscopeNFT.deploy();
  await hscp.deployed();

  //since we are testing, you should mention your own Eth wallet address
  const myAddress = '0x546351c0a7a3A80fd25A30517F3F7A8495d2E4E0';
  console.log('horoscopeNFT deployed to:', hscp.address);

  let txn = await hscp.mintNFT(myAddress, 'Libra');
  await txn.wait();
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
