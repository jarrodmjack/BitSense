import React, { useEffect } from "react"
import { useAuthContext } from "../hooks/useAuthContext"

const Home = () => {
	const { user } = useAuthContext()

	useEffect(() => {
		console.log("user in Home component:", user)

		const fetchData = async () => {
			const res = await fetch(
				`${process.env.NEXT_PUBLIC_API_URL}/api/home`
			)
			const data = await res.json()
			console.log(data)
		}

		fetchData()
	}, [user])

	if (!user) {
		return <>No User current logged in</>
	}

	return (
		<div className="flex flex-col">
			<span>top</span>
			<span>bottom</span>
		</div>
	)
}

export default Home
