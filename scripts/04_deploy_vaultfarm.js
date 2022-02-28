const { ethers, upgrades, network } = require("hardhat");
const { getImplementationAddress } = require('@openzeppelin/upgrades-core');

const DUETBondAddr = "";

const { writeAddr } = require('./artifact_log.js');

async function main() {
  
  const Pool = await ethers.getContractFactory("Pool");
  const pool = await Pool.deploy();
  await writeAddr(pool.address, "Pool", network.name);
  
  const VaultFarm = await ethers.getContractFactory("VaultFarm");
  const farm = await upgrades.deployProxy(VaultFarm, [
    DUETBondAddr,
    pool.address
  ]);

  await farm.deployed();
  console.log("VaultFarm deployed to:", farm.address);

  await writeAddr(farm.address, "VaultFarm", network.name);

  const currentImplAddress = await getImplementationAddress(ethers.provider, farm.address);
  console.log(`Please verify: npx hardhat verify ${currentImplAddress} `);

  
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });