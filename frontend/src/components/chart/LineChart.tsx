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
		<div className="chart-container">
			<Line
				data={chartData}
				options={{
					plugins: {
						title: {
							display: true,
							text: "Price change in the last 24 hours",
						},
						legend: {
							display: false,
						},
					},
				}}
			/>
		</div>
	)
}
export default LineChart
