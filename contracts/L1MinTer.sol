// SPDX-License-Identifier: MIT

pragma solidity 0.7.6;

import "./iAbs_BaseCrossDomainMessenger.sol";
 
interface IMintTokens{
       function mintTokens(address _account, uint256 _amount) external;
}


contract L1MinTer {

   // address crossDomainMessengerAddress = 0x6f78cde001182d5DCBc63D3C4b8051f2059E79D8; // this is public testnet address
    
    constructor() {

    } 

    event TokensMinted(address,uint256);
   
    function mintToken(
    address _acount,
    uint256 _amount, 
    address _target) external {
        
         IMintTokens imintTokens;

         bytes memory messageData = abi.encodeWithSelector(imintTokens.mintTokens.selector,_acount, _amount);

          iAbs_BaseCrossDomainMessenger(0x4200000000000000000000000000000000000007).sendMessage(_target,
          messageData, 
          900000);

         emit TokensMinted(msg.sender, _amount);
    }
}


