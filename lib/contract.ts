// lib/contract.ts
export const contractAddress = "0x371cAAef98441C0A85b125BBfEc337AA9dAB279b";

export const contractABI = [
  {
    "inputs": [],
    "name": "lastSpin",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "spin",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const;
