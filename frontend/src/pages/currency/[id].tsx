import ExtendedLayout from "@/components/layout/ExtendedLayout"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import "../../app/globals.css"
import { formatCurrencyPrice } from "@/utils/formatCurrencyPrice"

const CurrencyDetailsPage = () => {
	const router = useRouter()
	const [currency, setCurrency] = useState<any>()

	useEffect(() => {
		const fetchSingleCurrencyData = async () => {
			const url = `https://coinranking1.p.rapidapi.com/coin/${router.query.id}?referenceCurrencyUuid=aKzUVe4Hh_CON&timePeriod=24h`
			const options = {
				method: "GET",
				headers: {
					"X-RapidAPI-Key":
						process.env.NEXT_PUBLIC_COINRANKING_API_KEY!,
					"X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
				},
			}

			try {
				const response = await fetch(url, options)
				const result = await response.json()
				setCurrency(result.data.coin)
			} catch (error) {
				console.error(error)
			}
		}
		fetchSingleCurrencyData()
	}, [])

	if (!currency) {
		return <div>Loading...</div>
	}
    console.log('currency: ', currency)
	return (
		<ExtendedLayout>
			<div className="text-slate-100 flex flex-col justify-between h-full">
				<div className="w-full border-b border-zinc-600 py-10 px-60">
					<div className="flex items-center gap-10">
						<p className="text-2xl">
							{currency.name}{" "}
							<span className="text-sm text-slate-400">
								{currency.symbol}
							</span>
						</p>
						<p className="text-2xl">
							${formatCurrencyPrice(currency.price)}{" "}
							<span className="text-sm text-slate-400">USD</span>
						</p>
					</div>
				</div>
				<div className="border-b border-zinc-600 px-60">
					<p className="py-10 w-1/2">{currency.description || ""}</p>
				</div>
				{/* <div className="border w-1/4">
					<h4 className="text-xl font-semibold">
						{currency.name}{" "}
						<span className="font-thin text-slate-400">
							{currency.symbol}
						</span>
					</h4>
					<h3 className="text-2xl font-semibold">
						Price ${formatCurrencyPrice(currency.price)}
					</h3>
					<div className="border">
						<div className="flex items-center justify-between">
							<p className="text-slate-200">Volume(24Hr):</p>
							<p>${formatCurrencyPrice(currency["24hVolume"])}</p>
						</div>
						<div className="flex items-center justify-between">
							<p className="text-slate-200">Total Circulating Supply: </p>
							<p>
								{formatCurrencyPrice(
									currency.supply.circulating
								)}
							</p>
						</div>
						<div className="flex items-center justify-between">
							<p className="text-slate-200">Market Cap:</p>
							<p>${formatCurrencyPrice(currency.marketCap)}</p>
						</div>
					</div>
				</div>
				<div className="border w-1/2">CHART</div>
				<div className="border w-1/4">related articles?</div> */}
			</div>
		</ExtendedLayout>
	)
}

export default CurrencyDetailsPage
