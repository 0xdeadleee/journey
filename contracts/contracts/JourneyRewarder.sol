// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

import "./JourneyNFT.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract JourneyRewarder is Ownable {
    function reward(
        address nftAddress,
        address recipient,
        string memory tokenURI
    ) public payable onlyOwner {
        (bool sent, bytes memory data) = recipient.call{value: msg.value}("");
        require(sent, "Failed to send xDAI");

        JourneyNFT(payable(nftAddress)).mint(recipient, tokenURI);
    }
}
