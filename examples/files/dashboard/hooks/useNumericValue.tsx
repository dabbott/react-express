import { useState } from 'react'

export default function useNumericValue(
  exchangeRate: string
): {
  amount: string
  setAmount: (value: string) => void
  displayAmount?: string
} {
  const [amount, setAmount] = useState('')

  const parsed = parseFloat(amount)

  return {
    amount,
    setAmount: (value: string) => {
      if (value !== '' && isNaN(parseFloat(value))) return
      setAmount(value)
    },
    displayAmount: !isNaN(parsed)
      ? amount && (parsed / parseFloat(exchangeRate)).toPrecision(3)
      : undefined,
  }
}
