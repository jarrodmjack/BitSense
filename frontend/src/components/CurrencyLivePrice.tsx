import React, { useEffect, useState } from "react"

type CurrencyLivePriceOwnProps = {
	currencyId: string
}

const CurrencyLivePrice: React.FC<CurrencyLivePriceOwnProps> = ({
	currencyId,
}) => {
	const [price, setPrice] = useState<number | null>(null)
    
	return (
		<div>
			<h1>{currencyId.toUpperCase()} Price: {price ? price : 'Loading...'}</h1>
		</div>
	)
}

export default CurrencyLivePrice
