require("dotenv").config();
const hre = require("hardhat");

async function main() {
  const JourneyRewarder = await hre.ethers.getContractFactory(
    "JourneyRewarder"
  );

  const contract = await JourneyRewarder.attach(process.env.REWARDER_ADDRESS);

  console.log("JourneyRewarder attached to:", contract.address);

  console.log("Rewarding...");

  const res = await contract.reward(
    "0x08EFF1569B6496387c38d5ABD5ecfe2EBf71645A",
    "0xaF666A0dC9Aa80FE832ed8593F0CE1f59127097B",
    "https://bafybeiaumphawqgi2igq2zyvfdiucd67slj6sizk2gwo5kgammu553y2hq.ipfs.w3s.link/1.json",
    { value: hre.ethers.utils.parseEther("0.01") }
  );

  console.log("Rewarded!", res);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
