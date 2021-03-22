
const hre = require("hardhat");
const abi = require("../artifacts/contracts/Minter.sol/Minter.json").abi
const Watcher=require('@eth-optimism/watcher').Watcher

let mint = async () => {
  try {
    const ethSigner = await hre.ethers.getSigner();
  
    const minter = new hre.ethers.Contract('0x637fa72E4A944418945F4748a3CE50FDD6a2d749', abi, hre.ethers.provider)
    const connectedMinter = minter.connect(ethSigner)
   
    const sender = await ethSigner.getAddress()

    const _L2_target_token='0x758502D357c26790dB030d55e4C6783Ff4622080'
    const res = await connectedMinter.mint(sender, 300000000,_L2_target_token)

    watch(res.hash)

  } catch(e) {
      console.log('error ',e)
  }
}


async function watch() {

  try{
      
   const watcher = new Watcher({
       l1: {
         provider: new hre.ethers.providers.JsonRpcProvider('http://127.0.0.1:9545'),
         messengerAddress: '0x3C67B82D67B4f31A54C0A516dE8d3e93D010EDb3' 
       },
       l2: {
         provider: hre.ethers.providers.JsonRpcProvider('http://127.0.0.1:8545'),
         messengerAddress: '0x4200000000000000000000000000000000000007' //'0xE08570AF306057221ed7F377a10009a111396748'
       }
     })

     const [messageHash] = await watcher.getMessageHashesFromL1Tx(L1Hash)
     console.log('L1->L2 message hash:', messageHash)
     const l2TxReceipt = await watcher.getL2TransactionReceipt(messageHash)
  } catch(e) {
    console.log('error ',e)
  }
 }

mint()