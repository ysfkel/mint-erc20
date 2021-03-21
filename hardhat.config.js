require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.6",
  networks: {
 
    l1_local:{
      url: 'http://127.0.0.1:9545',

       accounts: [
        '0x754fde3f5e60ef2c7649061e06957c29017fe21032a8017132c0078e37f6193a',
        '0xd2ab07f7c10ac88d5f86f1b4c1035d5195e81f27dbe62ad65e59cbf88205629b'
      ]
    },   l2_local:{
      url: 'http://127.0.0.1:8545',

       accounts: [
        '0x754fde3f5e60ef2c7649061e06957c29017fe21032a8017132c0078e37f6193a',
        '0xd2ab07f7c10ac88d5f86f1b4c1035d5195e81f27dbe62ad65e59cbf88205629b'
      ]
    }
  }
}

