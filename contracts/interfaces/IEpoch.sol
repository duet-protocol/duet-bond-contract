pragma solidity >=0.8.0;

interface IEpoch {
  function end() external view returns (uint256);
}