// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  

  // We get the contract to deploy
  const profileImageMinter = await hre.ethers.getContractFactory("profileImageMinter");
  const profileImageContract = await profileImageMinter.deploy();

  await profileImageContract.deployed();

  console.log("Profile Image NFT Minter Contract deployed to:", profileImageContract.address);
}

; (async()=>{
  try {
    await main();
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();

