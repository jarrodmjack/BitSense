import Layout from "@/components/layout/Layout"
import CurrencyDisplayTable from "@/components/table/CurrencyDisplayTable"
import React from "react"

const index = () => {
	return (
		<Layout>
			<div className="flex flex-col">
				<section>Triple Section here?</section>
				<section className="">
					<CurrencyDisplayTable />
				</section>
			</div>
		</Layout>
	)
}

export default index
