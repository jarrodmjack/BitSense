import { Currency } from "@/types/CurrencyType"
import React from "react"
import { formatCurrencyPrice } from "@/utils/formatCurrencyPrice"
import Image from "next/image"
import Link from "next/link"

type CurrencyDisplayTableRowOwnProps = {
	currency: Currency
}

const CurrencyDisplayTableRow: React.FC<CurrencyDisplayTableRowOwnProps> = ({
	currency,
}) => {
	const isCurrencyPriceChangePositive =
		Number(currency.change) > 0 ? true : false

	return (
		<tr
			key={currency.uuid}
			className="border-b  border-gray-700 hover:bg-gray-600 cursor-pointer hover:bg-opacity-30"
		>
			<td className="px-6 py-4">{currency.rank}</td>
			<td className="pl-6 py-4 flex gap-2">
				<Image
					width={24}
					height={24}
					alt={`${currency.name} logo`}
					src={currency.iconUrl}
				/>
				<Link href={`currency/${currency.uuid}`}><span>{currency.name}</span></Link> -{" "}
				<span className="font-bold">{currency.symbol}</span>
			</td>
			<td className="px-6 py-4">
				${formatCurrencyPrice(currency.price)}
			</td>
			<td
				className={`px-6 py-4 ${
					isCurrencyPriceChangePositive
						? "text-green-600"
						: "text-red-600"
				}`}
			>
				{currency.change}%
			</td>
			<td className="px-6 py-4">
				${formatCurrencyPrice(currency.marketCap)}
			</td>
			<td className="px-6 py-4">
				${formatCurrencyPrice(currency["24hVolume"])}
			</td>
		</tr>
	)
}

const MemoizedCurrencyDisplayTableRow = React.memo(CurrencyDisplayTableRow)
export default MemoizedCurrencyDisplayTableRow
// export default CurrencyDisplayTableRow
