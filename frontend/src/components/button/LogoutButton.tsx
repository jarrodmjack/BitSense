import React from "react"
import { useRouter } from "next/router"
import { useLogout } from "@/hooks/useLogout"

const LogoutButton = () => {
	const { logout } = useLogout()

	return (
		<button
			onClick={logout}
			type="button"
			className="text-white bg-violet-800 hover:bg-violet-950 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
		>
			Log out
		</button>
	)
}

export default LogoutButton
