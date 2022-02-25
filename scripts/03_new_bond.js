const { ethers, network } = require("hardhat");

const FactoryAddr = "0x..."
const DUET_Addr = "0x..."


async function main() {
  let [owner]  = await ethers.getSigners();
  console.log("owner:" + owner.address);

  let factory =  await ethers.getContractAt("SingleBondFactory",
  FactoryAddr,
    owner);

  await factory.newBonds(DUET_Addr, Date.parse(new Date())/1000, 60, 12,ethers.BigNumber.from("1000000000000000000000"),ethers.BigNumber.from("5000000000000000000"),owner);
  console.log("done");

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

