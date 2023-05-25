const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const JourneyRewarder = await hre.ethers.getContractFactory(
    "JourneyRewarder"
  );

  const deployedContract = await JourneyRewarder.deploy();

  await deployedContract.deployed();

  console.log("JourneyRewarder deployed to:", deployedContract.address);

  return deployedContract;
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
