export const formatCurrencyShortForm = (value: string | number) => {
	if (typeof value === "string") {
		value = Number(value)
	}

	let formatter = Intl.NumberFormat("en", { notation: "compact" })
	let formattedNum = formatter.format(value)
    return formattedNum
}
