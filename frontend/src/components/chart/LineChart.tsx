// components/LineChart.js
import React, { useState } from "react"
import { Line } from "react-chartjs-2"
import { CategoryScale } from "chart.js"
import Chart from "chart.js/auto"

Chart.register(CategoryScale)

type LineChartOwnProps = {
	chartData: any
}

const LineChart: React.FC<LineChartOwnProps> = ({ chartData }) => {
	return (
		<div className="h-full w-[850px]">
			<Line
				data={chartData}
				options={{
					plugins: {
						title: {
							display: true,
							text: "Price change in the last 24 hours",
							color: "#C3C3C3", // Specify the title text color here
						},
						legend: {
							display: false,
						},
					},
					scales: {
						x: {
							ticks: {
								color: "#C3C3C3",
							},
						},
						y: {
							ticks: {
								color: "#C3C3C3",
							},
						},
					},
				}}
			/>
		</div>
	)
}
export default LineChart
