export const formatCurrencyPrice = (price: string) => {
	const incomingPrice = Number(price)

	if (incomingPrice < 1.0) {
		return String(
			incomingPrice.toLocaleString(undefined, {
				minimumFractionDigits: 2,
				maximumFractionDigits: 8,
			})
		)
	} else {
		return String(
			incomingPrice.toLocaleString(undefined, {
				minimumFractionDigits: 2,
				maximumFractionDigits: 2,
			})
		)
	}
}
