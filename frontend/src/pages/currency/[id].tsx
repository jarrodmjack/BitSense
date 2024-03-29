import ExtendedLayout from "@/components/layout/ExtendedLayout"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import "../../app/globals.css"
import { formatCurrencyPrice } from "@/utils/formatCurrencyPrice"
import LineChart from "@/components/chart/LineChart"

const CurrencyDetailsPage = () => {
	const router = useRouter()
	const [currency, setCurrency] = useState<any>()

	useEffect(() => {
		const fetchCurrencyData = async () => {
			if (router.query.id) {
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
				} catch (err) {
					console.error(err)
				}
			}
		}
		fetchCurrencyData()
	}, [router.query.id])

	if (!currency) {
		return <div>Loading...</div>
	}

	const chartData = {
		labels:
			currency &&
			currency.sparkline.map((_: null, i: number) => `${i + 1}hr`),
		datasets: [
			{
				label: "Price",
				data:
					currency &&
					currency.sparkline.map((data: string) => Number(data)),
				backgroundColor: ["#61119e"],
				borderColor: "#394658",
				borderWidth: 0.5,
				borderJoinStyle: "mitre",
			},
		],
	}

	return (
		<ExtendedLayout>
			<div className="text-slate-100 flex flex-col justify-between h-full gap-10">
				<div className="w-full border-b border-zinc-600 py-10 px-60">
					<div className="flex items-center gap-10">
						<p className="text-2xl">
							{currency.name}{" "}
							<span className="text-sm text-slate-400">
								{currency.symbol}
							</span>
						</p>
						<p className="text-2xl">
							${formatCurrencyPrice(currency.price)} USD{" "}
							<span className="text-sm text-slate-400">
								Current price
							</span>
						</p>
						<p
							className={`text-2xl ${
								Number(currency.change) > 0
									? "text-green-600"
									: "text-red-600"
							}`}
						>
							{currency.change}%{" "}
							<span className="text-sm text-slate-400">
								Price change (24 hr)
							</span>
						</p>
						<p className="text-2xl">
							${formatCurrencyPrice(currency.allTimeHigh.price)}{" "}
							USD{" "}
							<span className="text-sm text-slate-400">
								ATH (All time high)
							</span>
						</p>
						<p className="text-2xl">
							${formatCurrencyPrice(currency.marketCap)} USD{" "}
							<span className="text-sm text-slate-400">
								Market Cap
							</span>
						</p>
					</div>
				</div>
				<div className="border-b border-zinc-600 px-60">
					<p className="pb-10 w-1/2">{currency.description || ""}</p>
				</div>
				<div className="flex justify-center">
					<LineChart chartData={chartData} />
				</div>
			</div>
		</ExtendedLayout>
	)
}

// export const getStaticPaths: GetStaticPaths = async () => {
// 	return {
// 		paths: [],
// 		fallback: true,
// 	}
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
// 	const { id } = params!

// 	const url = `https://coinranking1.p.rapidapi.com/coin/${id}?referenceCurrencyUuid=aKzUVe4Hh_CON&timePeriod=24h`
// 	const options = {
// 		method: "GET",
// 		headers: {
// 			"X-RapidAPI-Key": process.env.NEXT_PUBLIC_COINRANKING_API_KEY!,
// 			"X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
// 		},
// 	}

// 	const response = await fetch(url, options)
// 	const result = await response.json()
// 	return {
// 		props: {
// 			currency: result.data.coin,
// 		},
// 	}
// }

export default CurrencyDetailsPage
