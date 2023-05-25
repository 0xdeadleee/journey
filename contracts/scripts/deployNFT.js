const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const JourneyNFT = await hre.ethers.getContractFactory("JourneyNFT");

  const deployedContract = await JourneyNFT.deploy("JourneyNFT", "JOURNEY");

  await deployedContract.deployed();

  console.log("JourneyNFT deployed to:", deployedContract.address);

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
