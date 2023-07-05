import { useRouter } from "next/router"
import React from "react"

const SignupButton = () => {
	const router = useRouter()

	const handleRedirectToSignup = () => {
		router.push("/signup")
	}

	return (
		<button
			onClick={handleRedirectToSignup}
			type="button"
			className="text-white bg-violet-800 hover:bg-violet-950 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
		>
			Sign up
		</button>
	)
}

export default SignupButton
