// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SpinTheWheel {

    // This variable will store the last wheel number spun
    uint256 public lastSpin;

    // Anyone can call this function to "spin the wheel"
    function spin() public returns (uint256) {

        // Create a very simple random number (NOT secure)
        uint256 random = uint256(
            keccak256(
                abi.encodePacked(block.timestamp, msg.sender)
            )
        );

        // Convert the number to a value between 1 and 10
        uint256 result = (random % 10) + 1;

        // Save the result
        lastSpin = result;

        // Return the wheel number
        return result;
    }
}
