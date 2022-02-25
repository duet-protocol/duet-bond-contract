const { ethers, upgrades, network } = require("hardhat");
const LinkUSDOracle_Addr = "0x..."

const prams = process.argv
const forToken = prams[2]
const pairAddr = prams[3]
console.log("pairAddr:" + pairAddr);

async function main() {
  let [owner]  = await ethers.getSigners();


  const DexUSDOracle = await ethers.getContractFactory("DexUSDOracle");
  const oracle = await upgrades.deployProxy(DexUSDOracle, [
    LinkUSDOracle_Addr,
    pairAddr
  ]);

  await oracle.deployed();

  console.log("DexUSDOracle deployed to:", oracle.address);

}



// export HARDHAT_NETWORK='dev' && node scripts/bsc/deploy_dex_oracle.js "Duet" "0x4ac3442cA276D6F3B3eC38e797333B875Cb1E3c8"

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
