import React from "react"

type TopPerformersCardOwnProps = {
	topPerformers: any[]
}

const TopPerformersCard: React.FC<TopPerformersCardOwnProps> = ({
	topPerformers,
}) => {
	return (
		<div className="text-slate-100 bg-zinc-900 w-96 flex flex-col gap-4 p-4 rounded-lg shadow-md shadow-zinc-700">
			<h3 className="font-bold text-xl">Top Performers 💹</h3>
			<div className="flex flex-col gap-4 text-sm">
				{topPerformers.map((currency, i) => (
					<div key={currency.uuid} className="flex gap-4">
						<div className="flex gap-2">
							<span className="font-thin text-slate-400">{i+1}</span>
							<span>{currency.name}</span>
						</div>
						<span className="font-thin text-slate-400">{currency.symbol}</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default TopPerformersCard
