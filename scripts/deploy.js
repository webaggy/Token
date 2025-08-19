const hre = require("hardhat");

async function main() {
  const initialSupply = 1000; // 👈 Change this number to your desired token supply

  const SimpleToken = await hre.ethers.getContractFactory("SimpleToken");
  const simpleToken = await SimpleToken.deploy(initialSupply); // pass constructor arg

  await simpleToken.waitForDeployment();

  console.log("SimpleToken deployed to:", await simpleToken.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

