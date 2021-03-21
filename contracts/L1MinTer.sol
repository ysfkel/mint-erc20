// SPDX-License-Identifier: MIT

pragma solidity 0.7.6;

import "./iAbs_BaseCrossDomainMessenger.sol";
 
interface IMintTokens{
       function mintTokens(address _account, uint256 _amount) external;
}


contract L1MinTer {

    address crossDomainMessengerAddress;
    
    constructor(address _crossDomainMessengerAddress) {
        crossDomainMessengerAddress = _crossDomainMessengerAddress; 
    } 

    event TokensMinted(address,uint256);
   
    function mintToken(
    address _acount,
    uint256 _amount, 
    address _target) external {
        
         IMintTokens imintTokens;

         bytes memory messageData = abi.encodeWithSelector(imintTokens.mintTokens.selector,_acount, _amount);

          iAbs_BaseCrossDomainMessenger(crossDomainMessengerAddress).sendMessage(_target,
          messageData, 
          900000);

         emit TokensMinted(msg.sender, _amount);
    }
}


