import React, { useState, useEffect } from "react"

const FearAndGreedCard = () => {
	const [currentFGIndex, setCurrentFGIndex] = useState<number>(0)

	useEffect(() => {
		const fetchFGIndex = async () => {
			const res = await fetch("https://api.alternative.me/fng/")
			const data = await res.json()
			setCurrentFGIndex(Number(data.data[0].value) || 0)
		}
		fetchFGIndex()
	}, [])

	if (!currentFGIndex || currentFGIndex === 0) {
		return <div>No data to show</div>
	}

	return (
		<div className="text-slate-100 bg-zinc-900 w-96 flex flex-col gap-4 justify-between p-4 rounded-lg shadow-md shadow-zinc-700 text-sm">
			<h3 className="font-bold text-xl">Fear & Greed Index 📊</h3>
			<span>
				The current Fear & Greed index is{" "}
				<span className="font-bold">{currentFGIndex}</span> which
				indicates{" "}
				<span className="font-bold">
					{currentFGIndex >= 50 ? "Greed" : "Fear"}
				</span>
			</span>
			<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
				<div
					className={`h-2.5 rounded w-[${currentFGIndex}%] ${
						currentFGIndex >= 50 ? "bg-green-500" : "bg-red-500"
					}`}
				></div>
			</div>
			<span className="text-sm">
				Learn more about the Fear & Greed index{" "}
				<a
					href="https://alternative.me/crypto/fear-and-greed-index/"
					target="_blank"
					className="text-indigo-500 underline"
				>
					here
				</a>
			</span>
		</div>
	)
}

export default FearAndGreedCard
