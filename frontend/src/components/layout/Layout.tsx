import { useAuthContext } from "@/hooks/useAuthContext"
import React, { PropsWithChildren } from "react"
import LoginButton from "../button/LoginButton"
import SignupButton from "../button/SignupButton"
import LogoutButton from "../button/LogoutButton"

type LayoutOwnProps = {} & PropsWithChildren

const Layout: React.FC<LayoutOwnProps> = ({ children }) => {
	const { user } = useAuthContext()

	if (!user) {
		return <div>No user</div>
	}

	return (
		<div>
			<nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
				<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
					{/* <img
							src="https://flowbite.com/docs/images/logo.svg"
							className="h-8 mr-3"
							alt="Flowbite Logo"
						/> */}
					<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
						BitSense
					</span>
					<div className="flex md:order-2">
						{!user ? (
							<>
								<LoginButton />
								<SignupButton />
							</>
						) : (
							<LogoutButton />
						)}
					</div>
					<div
						className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
						id="navbar-sticky"
					>
						<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
							<li>
								<a
									href="#"
									className="block py-2 pl-3 pr-4 text-white bg-violet-700 rounded md:bg-transparent md:text-violet-700 md:p-0 "
									aria-current="page"
								>
									Home
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-white block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-violet-700 md:p-0"
								>
									Portfolio
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-white block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-violet-700 md:p-0"
								>
									Settings
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			{children}
		</div>
	)
}

export default Layout
