import Layout from "@/components/layout/Layout"
import CurrencyDisplayTable from "@/components/table/CurrencyDisplayTable"
import FearAndGreedCard from "@/components/tripleSection/FearAndGreedCard"
import TrendingCard from "@/components/tripleSection/TrendingCard"
import React from "react"

const index = () => {
	return (
		<Layout>
			<div className="flex flex-col gap-10">
				<section className="flex w-3/4 mx-auto justify-evenly">
					<TrendingCard />
					<TrendingCard />
					{/* <TrendingCard /> */}
					<FearAndGreedCard />
				</section>
				<section className="">
					<CurrencyDisplayTable />
				</section>
			</div>
		</Layout>
	)
}

export default index
