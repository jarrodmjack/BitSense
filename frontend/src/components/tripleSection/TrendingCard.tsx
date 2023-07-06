import React from "react"

const TrendingCard = () => {
	return (
		<div className="text-slate-100 bg-zinc-900 w-96 flex flex-col gap-4 p-4 rounded-lg shadow-md shadow-zinc-700">
			<h3 className="font-bold text-xl">Trending 🔥</h3>
			<div className="flex flex-col gap-4 text-sm">
				<div className="flex gap-4">
					<div className="flex gap-2">
						<span className="font-thin text-slate-400">1</span>
						<span>Loopring</span>
					</div>
					<span className="font-thin text-slate-400">LRC</span>
				</div>
				<div className="flex gap-4">
					<div className="flex gap-2">
						<span className="font-thin text-slate-400">2</span>
						<span>Bitcoin</span>
					</div>
					<span className="font-thin text-slate-400">BTC</span>
				</div>
				<div className="flex gap-4">
					<div className="flex gap-2">
						<span className="font-thin text-slate-400">3</span>
						<span>Algorand</span>
					</div>
					<span className="font-thin text-slate-400">ALGO</span>
				</div>
			</div>
		</div>
	)
}

export default TrendingCard
