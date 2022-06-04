require("@nomiclabs/hardhat-waffle");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.4",
  networks:{
    rinkeby: {
      url:'https://eth-rinkeby.alchemyapi.io/v2/w6xb7R2ZCFjfbVJ6dWLU7QE9CBhoF10u',
      accounts:['64880a1dd3799e78001ade10f87a7e896e0d3897fd0dc7a7b06214b19c765f86'],
    },
  },
};
