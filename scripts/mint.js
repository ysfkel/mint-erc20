
const hre = require("hardhat");
const abi = require("../artifacts/contracts/Minter.sol/Minter-ovm.json").abi
const watcher = require("hardhat-watcher");

let main = async () => {
  try {
    const ethSigner = await hre.ethers.getSigner();
    const addr = await ethSigner.getAddress()
    console.log(addr)
  
    const dai = new hre.ethers.Contract('0x637fa72E4A944418945F4748a3CE50FDD6a2d749', abi, hre.ethers.provider)
    const connectedDai = dai.connect(ethSigner)
    const sender = await ethSigner.getAddress()
    // console.log('signer address ', sender)
    const res = await connectedDai.mint(sender, 300000000,'0x758502D357c26790dB030d55e4C6783Ff4622080',900000)
    console.log(res)

  //  const receipt = await watcher.get(res.hash)
  } catch(e) {
      console.log('error ',e)
  }
}

main()