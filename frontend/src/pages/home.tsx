import React, { useEffect } from "react"

const Home = () => {
	useEffect(() => {
		const handleFetchTestData = async () => {
			try {
				const response = await fetch("http://localhost:4001/api/home", {
					method: "GET",
				})
				const data = await response.json()
				console.log("response: ", data)
			} catch (error) {
				console.error("Error fetching data:", error)
			}
		}

		handleFetchTestData()
	}, [])

	return (
		<div className="flex flex-col">
			<span>top</span>
			<span>bottom</span>
		</div>
	)
}

export default Home
