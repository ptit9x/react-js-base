import React from "react"

interface AccessWalletProps {
  type: string
}

const AccessWallet = ({ type }: AccessWalletProps) => {
  return <div>{type}</div>
}

export default AccessWallet
