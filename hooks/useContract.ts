// hooks/useContract.ts
"use client"

import { useEffect } from "react"
import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from "wagmi"
import { contractABI, contractAddress } from "@/lib/contract"

export const useSpinContract = () => {
  const { address } = useAccount()

  const { data: lastSpin, refetch: refetchLastSpin } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "lastSpin",
  })

  const { writeContractAsync, data: hash, error, isPending } = useWriteContract()

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({ hash })

  const spin = async () => {
    try {
      await writeContractAsync({
        address: contractAddress,
        abi: contractABI,
        functionName: "spin",
      })
    } catch (err) {
      console.error("Spin error:", err)
      throw err
    }
  }

  useEffect(() => {
    if (isConfirmed) {
      refetchLastSpin()
    }
  }, [isConfirmed, refetchLastSpin])

  return {
    data: {
      lastSpin: lastSpin ? Number(lastSpin) : 0,
    },
    actions: { spin },
    state: {
      isLoading: isPending || isConfirming,
      isPending,
      isConfirming,
      isConfirmed,
      hash,
      error,
    },
  }
}
