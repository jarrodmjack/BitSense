import { formatCurrencyShortForm } from "@/utils/formatCurrencyShortForm"
import React from "react"

type GlobalCurrencyDataOwnProps = {
	data: any /* incoming object is subject to change often */
}

const GlobalCurrencyData: React.FC<GlobalCurrencyDataOwnProps> = ({ data }) => {

	if (!data) {
		return <></>
	}

	return (
		<section className="text-slate-100 flex flex-col lg:flex lg:flex-row gap-8 p-4 rounded-lg mb-4 text-sm">
			<div className="flex flex-col">
				<span className=" font-bold">Total Market cap</span>
				<span>{formatCurrencyShortForm(data.totalMarketCap)}</span>
			</div>
			<div className="border-l"></div>
			<div className="flex flex-col">
				<span className="font-bold">Total Trading volume (24hr)</span>
				<span>{formatCurrencyShortForm(data.total24hVolume)}</span>
			</div>
			<div className="border-l"></div>
			<div className="flex flex-col">
				<span className="font-bold">BTC Dominance</span>
				<span>{data.btcDominance.toFixed(1)}%</span>
			</div>
			<div className="border-l"></div>
			<div className="flex flex-col">
				<span className="font-bold">All currencies</span>
				<span>{data.totalCoins}</span>
			</div>
		</section>
	)
}

export default GlobalCurrencyData
