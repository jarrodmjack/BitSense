import { useAuthContext } from "@/hooks/useAuthContext"
import React, { PropsWithChildren } from "react"
import LoginButton from "../button/LoginButton"
import SignupButton from "../button/SignupButton"
import LogoutButton from "../button/LogoutButton"
import "../../app/globals.css"
import Link from "next/link"

type LayoutOwnProps = {} & PropsWithChildren

const Layout: React.FC<LayoutOwnProps> = ({ children }) => {
	const { user } = useAuthContext()

	return (
		<main className="flex flex-col min-h-screen justify-between linear-main-bg">
			<nav className="w-full bg-gray-950 mb-10 py-10">
				<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
					<Link href="/home">
						<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white cursor-pointer hover:text-violet-600">
							BitSense
						</span>
					</Link>
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
						<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-950">
							<li>
								<a
									href="/"
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
							{/* WILL ADD THIS BACK IN AT A LATER DATE FOR USER SETTINGS */}
							{/* <li>
								<a
									href="#"
									className="text-white block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-violet-700 md:p-0"
								>
									Settings
								</a>
							</li> */}
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
									className="mr-4 hover:underline md:mr-6 hover:text-violet-700"
								>
									About
								</a>
							</li>
							<li>
								<a
									href="#"
									className="mr-4 hover:underline md:mr-6 hover:text-violet-700"
								>
									Privacy Policy
								</a>
							</li>
							<li>
								<a
									href="#"
									className="mr-4 hover:underline md:mr-6 hover:text-violet-700"
								>
									Licensing
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:underline hover:text-violet-700"
								>
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
