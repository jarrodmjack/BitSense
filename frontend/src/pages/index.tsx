import GlobalCurrencyData from "@/components/globalCurrencyData/GlobalCurrencyData"
import Layout from "@/components/layout/Layout"
import CurrencyDisplayTable from "@/components/table/CurrencyDisplayTable"
import FearAndGreedCard from "@/components/tripleSection/FearAndGreedCard"
import TopPerformersCard from "@/components/tripleSection/TopPerformersCard"
import TrendingCard from "@/components/tripleSection/TrendingCard"
import { fetchGlobalCurrencyData } from "@/utils/fetchGlobalCurrencyData"
import React, { useEffect, useState } from "react"

const index = () => {
	const [globalCurrencyData, setGlobalCurrencyData] = useState<any>()

	useEffect(() => {
		const getGlobalCurrencyData = async () => {
			const data = await fetchGlobalCurrencyData()
			setGlobalCurrencyData(data)
		}
		getGlobalCurrencyData()
	}, [])

	return (
		<Layout>
			<div className="flex flex-col gap-10">
				<section className="flex w-3/4 mx-auto justify-evenly">
					{globalCurrencyData && (
						<>
							<TrendingCard />
							<TopPerformersCard
								topPerformers={globalCurrencyData.bestCoins}
							/>
							<FearAndGreedCard />
						</>
					)}
				</section>
				<section className="px-60">
					<GlobalCurrencyData data={globalCurrencyData} />
					<CurrencyDisplayTable />
				</section>
			</div>
		</Layout>
	)
}

export default index
