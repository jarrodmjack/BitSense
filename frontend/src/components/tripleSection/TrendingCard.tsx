import React from "react"

const TrendingCard = () => {
	return (
		<div className="text-slate-100 bg-zinc-900 w-96 flex flex-col gap-4 p-4 rounded-lg shadow-md shadow-zinc-700">
			<span>Trending 🔥</span>
			<div className="flex flex-col gap-4">
				<div>
					<span>1 Pepe</span>
					<span>PEPE</span>
				</div>
				<div>
					<span>2 PNDL</span>
					<span>PNDL</span>
				</div>
				<div>
					<span>3 Injustice Samurai</span>
					<span>IS</span>
				</div>
			</div>
		</div>
	)
}

export default TrendingCard
