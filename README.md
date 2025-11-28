# README.md

# Spin The Wheel — Flare Smart Contract Integration

## **Contract Address**
`0x371cAAef98441C0A85b125BBfEc337AA9dAB279b`  
View on Explorer:  
https://coston2-explorer.flare.network/address/0x371cAAef98441C0A85b125BBfEc337AA9dAB279b

---

## **Project Description**

Spin The Wheel is a simple decentralized application (dApp) built on the Flare Network.  
It connects a frontend React/Next.js interface with a Solidity smart contract that generates a pseudo-random number when the user initiates a spin.

Once the user clicks **Spin**, a transaction is sent to the smart contract. After confirmation, the contract updates the `lastSpin` value with a random number between **1 and 10**, which the UI displays.

This project is designed as an educational example demonstrating:
- smart contract interaction on Flare,
- wallet-gated UI,
- writing and reading contract state with wagmi/viem,
- handling transactions, loading states, and errors.

---

## **Features**

### 🔹 **1. Spin Functionality**
Users can trigger a contract function (`spin`) that returns a pseudo-random number from 1 to 10.

### 🔹 **2. Live Contract State Reading**
The frontend continuously reads the contract’s `lastSpin` value and updates the UI in real-time.

### 🔹 **3. Transaction Handling**
- Displays transaction hash  
- Shows "waiting for confirmation…"  
- Shows success state when the transaction is confirmed  

### 🔹 **4. Wallet Connection Gating**
Users must connect their wallet before interacting with the smart contract.

### 🔹 **5. Clean and Minimal UI**
Modern, responsive interface built with Tailwind and shadcn-style components.

---

## **How It Solves the Problem**

Smart contract learning often requires complex ABIs, authentication flows, and blockchain logic. This project provides a **minimal, digestible example** for beginners and developers seeking a clean template.

### It solves the following problems:

### ✔ Learning Web3 frontend integration  
Developers can see exactly how:
- `useReadContract`
- `useWriteContract`
- `useWaitForTransactionReceipt`

work together in a simple, understandable manner.

### ✔ Understanding UI state flow  
The project demonstrates:
- transaction pending states  
- confirmation loading  
- error handling  
- automatic UI refresh after confirmations  

### ✔ Providing a safe experimentation environment  
No real tokens required.  
No sensitive inputs.  
No constructor params.  
No risky operations.  

### ✔ Beginner-friendly Solidity contract  
The contract contains only:
- one state variable
- one read function
- one write function

Perfect for entry-level learning.

---

## **Conclusion**

This project acts as a clean starter template for interacting with smart contracts on Flare.  
By simplifying the UX and blockchain logic, it provides developers with a practical, real-world example to learn from or extend into a full dApp.

Use it as:
- a teaching demo,  
- a base for a blockchain game,  
- or a foundation for more advanced smart contract integrations.


