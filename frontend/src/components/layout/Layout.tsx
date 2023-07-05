import { useAuthContext } from "@/hooks/useAuthContext"
import React, { PropsWithChildren } from "react"
import LoginButton from "../button/LoginButton"
import SignupButton from "../button/SignupButton"
import LogoutButton from "../button/LogoutButton"

type LayoutOwnProps = {} & PropsWithChildren

const Layout: React.FC<LayoutOwnProps> = ({ children }) => {
	const { user } = useAuthContext()

	// <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-gray-200 to-black"></div>
    //   <div className="absolute top-1/4 left-0 right-0 bottom-0 bg-gradient-to-b from-black to-gray-900"></div>

	return (
		<main className="flex flex-col min-h-screen justify-between bg-zinc-900">
			<nav className="w-full bg-gray-950 mb-10">
				<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
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
			<>{children}</>
			<footer className="bg-gray-950">
				<div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
					<div className="sm:flex sm:items-center sm:justify-between">
						<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
							BitSense
						</span>
						<ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
							<li>
								<a
									href="#"
									className="mr-4 hover:underline md:mr-6 "
								>
									About
								</a>
							</li>
							<li>
								<a
									href="#"
									className="mr-4 hover:underline md:mr-6"
								>
									Privacy Policy
								</a>
							</li>
							<li>
								<a
									href="#"
									className="mr-4 hover:underline md:mr-6 "
								>
									Licensing
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Contact
								</a>
							</li>
						</ul>
					</div>
					<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
					<span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
						© 2023 BitSense™ . All Rights Reserved.
					</span>
				</div>
			</footer>
		</main>
	)
}

export default Layout
