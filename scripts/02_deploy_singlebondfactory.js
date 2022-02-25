const { ethers, upgrades, network } = require("hardhat");
const epochImpAddr = "0x5FbDB2315678afecb367f032d93F642f64180aa3"

async function main() {
  const SingleBondsFactory = await ethers.getContractFactory("SingleBondsFactory");
  const factory = await SingleBondsFactory.deploy(epochImpAddr);
  await factory.deployed();
  console.log("SingleBondsFactory deployed to:", factory.address);
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

