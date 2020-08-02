pragma solidity >=0.4.0 <0.7.0;

contract SimpleStorage {
    uint256 storedData;
    address owner;

    constructor() public {
        owner = msg.sender;
    }

    function set(uint256 x) public {
        storedData = x;
    }

    function get() public view returns (uint256) {
        return storedData;
    }
}
