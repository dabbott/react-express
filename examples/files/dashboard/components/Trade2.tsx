import React, { useState } from 'react'
import useNumericValue from '../hooks/useNumericValue'
import Button from './Button'
import { VerticalSpacer } from './Spacer'
import Tabs from './Tabs'

interface ConvertProps {
  title: string
  sourceCurrency: string
  targetCurrency: string
  exchangeRate: string
}

function Convert({
  title,
  sourceCurrency,
  targetCurrency,
  exchangeRate,
}: ConvertProps) {
  const { amount, setAmount, displayAmount } = useNumericValue(exchangeRate)

  return (
    <div className="column flex-center">
      <input
        className="input-large"
        type="text"
        placeholder="0"
        value={amount}
        onChange={(event) => {
          setAmount(event.target.value)
        }}
      ></input>
      <p>Enter a value in {sourceCurrency}</p>
      <VerticalSpacer size={24} />
      <Button disabled={!amount}>
        {title} {displayAmount ? `${displayAmount} ${targetCurrency}` : ''}
      </Button>
    </div>
  )
}

export default function Trade() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <section className="block">
      <h2>Trade</h2>
      <VerticalSpacer size={12} />
      <Tabs
        id="trade-tabs"
        aria-label="Trade currencies"
        selectedIndex={selectedIndex}
        onChangeSelectedIndex={setSelectedIndex}
        tabs={[
          {
            title: 'Buy',
            content: (
              <Convert
                title="Buy"
                sourceCurrency="USD"
                targetCurrency="BTC"
                exchangeRate="18000"
              />
            ),
          },
          {
            title: 'Sell',
            content: (
              <Convert
                title="Sell"
                sourceCurrency="BTC"
                targetCurrency="USD"
                exchangeRate="0.00005"
              />
            ),
          },
          {
            title: 'Convert',
            content: (
              <Convert
                title="Convert"
                sourceCurrency="USD"
                targetCurrency="BTC"
                exchangeRate="18000"
              />
            ),
          },
        ]}
      />
    </section>
  )
}
