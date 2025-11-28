// components/sample.tsx
"use client"

import { useAccount } from "wagmi"
import { useSpinContract } from "@/hooks/useContract"

const SampleIntregation = () => {
  const { isConnected } = useAccount()
  const { data, actions, state } = useSpinContract()

  const handleSpin = async () => {
    try {
      await actions.spin()
    } catch (err) {
      console.error("Error:", err)
    }
  }

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <h2 className="text-2xl font-bold text-foreground mb-3">Spin Game</h2>
          <p className="text-muted-foreground">Please connect your wallet to interact with the contract.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground mb-6">Spin The Wheel</h1>

        <div className="bg-card border border-border rounded-lg p-4 mb-6">
          <p className="text-muted-foreground text-xs uppercase">Last Spin Result</p>
          <p className="text-3xl font-bold text-foreground mt-2">{data.lastSpin}</p>
        </div>

        <button
          onClick={handleSpin}
          disabled={state.isLoading}
          className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium
          hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {state.isLoading ? "Spinning..." : "Spin"}
        </button>

        {state.hash && (
          <div className="mt-6 p-4 bg-card border border-border rounded-lg">
            <p className="text-xs text-muted-foreground uppercase mb-2">Transaction Hash</p>
            <p className="text-sm font-mono text-foreground break-all">{state.hash}</p>
            {state.isConfirming && <p className="text-sm text-primary mt-2">Waiting for confirmation...</p>}
            {state.isConfirmed && <p className="text-sm text-green-500 mt-2">Spin confirmed!</p>}
          </div>
        )}

        {state.error && (
          <div className="mt-6 p-4 bg-card border border-destructive rounded-lg">
            <p className="text-sm text-destructive-foreground">Error: {state.error.message}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default SampleIntregation
