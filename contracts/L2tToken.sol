// SPDX-License-Identifier: MIT

pragma solidity 0.7.6;

import "./ERC20.sol"; 

contract L2tToken is ERC20 {

      event MintToken(address, uint256);
    
      constructor() ERC20("L2tToken", "L2TK")  {
      } 

      function mintTokens(address _account, uint256 _amount) external {
                _mint(_account, _amount );
      } 
}