const { ethers, network } = require("hardhat");


async function main() {

  const Epoch = await ethers.getContractFactory("Epoch");
  const ep = await Epoch.deploy();
  await ep.deployed();

  console.log("epoch deployed to:", ep.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

