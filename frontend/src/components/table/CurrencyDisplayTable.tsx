"use client"
import { Currency } from "@/types/CurrencyType"
import { fetchCurrencyData } from "@/utils/fetchCurrencyData"
import React, { useState, useEffect } from "react"
import "react-loading-skeleton/dist/skeleton.css"
import TableSkeletonLoader from "../loader/TableSkeletonLoader"
import MemoizedCurrencyDisplayTableRow from "./CurrencyDisplayTableRow"
import CurrencyTablePagination from "../pagination/Pagination"

const CurrencyDisplayTable = ({}) => {
	const [currencies, setCurrencies] = useState([])
	const [loading, setLoading] = useState(false)
	const [currentPage, setCurrentPage] = useState(1)
	const [currenciesPerPage, setCurrenciesPerPage] = useState(16)
	const [sortedAscending, setSortedAscending] = useState({
		col: "",
		asc: false,
	})

	useEffect(() => {
		const populateCurrencies = async () => {
			const currencyData = await fetchCurrencyData()
			setCurrencies(currencyData.coins)
		}
		populateCurrencies()
	}, [])

	if (!currencies || currencies.length === 0) {
		return <TableSkeletonLoader />
	}

	// GET CURRENT CURRENCIES FOR PAGINATION
	const indexOfLastCurrency = currentPage * currenciesPerPage
	const indexOfFirstCurrency = indexOfLastCurrency - currenciesPerPage
	const currentCurrencies = currencies.slice(
		indexOfFirstCurrency,
		indexOfLastCurrency
	)
	// CHANGE PAGE
	const paginate = (pageNumber: number) => {
		setCurrentPage(pageNumber)
	}

	return (
		<div className="overflow-x-auto shadow-md sm:rounded-lg">
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
					{currentCurrencies.map((currency: Currency) => (
						<MemoizedCurrencyDisplayTableRow
							key={currency.uuid}
							currency={currency}
						/>
					))}
				</tbody>
			</table>
			<CurrencyTablePagination
				currenciesPerPage={currenciesPerPage}
				totalCurrencies={currencies.length}
				paginate={paginate}
				currentPage={currentPage}
			/>
		</div>
	)
}

const MemoizedCurrencyDisplayTable = React.memo(CurrencyDisplayTable)

export default MemoizedCurrencyDisplayTable
// export default CurrencyDisplayTable
