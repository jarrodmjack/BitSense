"use client"
import { Currency } from "@/types/CurrencyType"
import { fetchCurrencyData } from "@/utils/fetchCurrencyData"
import React, { useState, useEffect } from "react"
import CurrencyDisplayTableRow from "./CurrencyDisplayTableRow"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import TableSkeletonLoader from "../loader/TableSkeletonLoader"

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
		return (
			<TableSkeletonLoader />
		)
	}
	return (
		<div className="overflow-x-auto shadow-md sm:rounded-lg md:px-60">
			<table className="w-full text-sm text-left text-slate-100 rounded-lg">
				<thead className="text-xs text-slate-100 uppercase border-y border-zinc-700">
					<tr>
						<th scope="col" className="px-6 py-3">
							#
						</th>
						<th scope="col" className="px-6 py-3">
							Name
						</th>
						<th scope="col" className="px-6 py-3">
							Price (USD)
						</th>
						<th scope="col" className="px-6 py-3">
							Change (1hr)
						</th>
						<th scope="col" className="px-6 py-3">
							Market Cap
						</th>
						<th scope="col" className="px-6 py-3">
							Volume (24hr)
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
