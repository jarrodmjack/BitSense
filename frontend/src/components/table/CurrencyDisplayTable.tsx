"use client"
import { Currency } from "@/types/CurrencyType"
import { fetchCurrencyData } from "@/utils/fetchCurrencyData"
import React, { useState, useEffect } from "react"
import CurrencyDisplayTableRow from "./CurrencyDisplayTableRow"

type CurrencyDisplayTableOwnProps = {
	// currencies: any[]
}

const CurrencyDisplayTable: React.FC<CurrencyDisplayTableOwnProps> = (
	{
		// currencies,
	}
) => {
	const [currencies, setCurrencies] = useState([])

	useEffect(() => {
		const populateCurrencies = async () => {
			const currencyData = await fetchCurrencyData()
			setCurrencies(currencyData.coins)
		}
		populateCurrencies()
	}, [])

	if (!currencies || currencies.length === 0) {
		return <div>Loading....</div>
	}
	return (
		<div className="overflow-x-auto shadow-md sm:rounded-lg md:px-60">
			<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-lg">
				<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th scope="col" className="px-6 py-3">
							#
						</th>
						<th scope="col" className="px-6 py-3">
							Name
						</th>
						<th scope="col" className="px-6 py-3">
							Price
						</th>
						<th scope="col" className="px-6 py-3">
							Change (1hr)
						</th>
						<th scope="col" className="px-6 py-3">
							Market Cap
						</th>
						<th scope="col" className="px-6 py-3">
							Volume
						</th>
					</tr>
				</thead>
				<tbody>
					{currencies.map((currency: Currency) => (
						<CurrencyDisplayTableRow currency={currency} />
					))}
				</tbody>
			</table>
		</div>
	)
}

export default CurrencyDisplayTable
