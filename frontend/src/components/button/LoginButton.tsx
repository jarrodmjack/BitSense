import { useRouter } from "next/router"
import React from "react"

const LoginButton = () => {
	const router = useRouter()

	const handleRedirectToLogin = () => {
		router.push("/login")
	}

	return (
		<button
        onClick={handleRedirectToLogin}
			type="button"
			className="text-violet-800 hover:bg-violet-950 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
		>
			Log in
		</button>
	)
}

export default LoginButton
