import CurrencyLivePrice from '@/components/CurrencyLivePrice'
import React from 'react'

const home = () => {
  return (
    <div>
        home page
        <CurrencyLivePrice currencyId='btc' />
        <CurrencyLivePrice currencyId='eth' />
        <CurrencyLivePrice currencyId='ltc' />
        {/* <CurrencyLivePrice currencyId='' /> */}
        {/* <CurrencyLivePrice currencyId='btc' /> */}
    </div>
  )
}

export default home