import { useAuthContext } from "@/hooks/useAuthContext"
import React, { PropsWithChildren } from "react"
import LoginButton from "../button/LoginButton"
import SignupButton from "../button/SignupButton"
import LogoutButton from "../button/LogoutButton"
import "../../app/globals.css"
import Link from "next/link"
import ScrollingCryptoPriceWidget from "../scrollingWidget/ScrollingCryptoPriceWidget"
import { FaBars } from 'react-icons/fa';

type LayoutOwnProps = {} & PropsWithChildren

const Layout: React.FC<LayoutOwnProps> = ({ children }) => {
	const { user } = useAuthContext()

	return (
		<main className="flex flex-col min-h-screen justify-between linear-main-bg">
			<div className="mb-10">
				<nav className="w-full bg-gray-950 py-10">
					<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
						<Link href="/">
							<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white cursor-pointer hover:text-violet-600">
								BitSense
							</span>
						</Link>
						<div className="flex"></div>
						<div className="text-slate-100 sm:hidden">
							<FaBars className="scale-125" />
						</div>
						<ul className="font-medium items-center gap-4 hidden sm:flex">
							<li>
								<a
									href="/"
									className="py-2 pl-3 pr-4 text-slate-100 rounded"
									aria-current="page"
								>
									Home
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-slate-100 py-2 pl-3 pr-4 rounded hover:bg-gray-100 hover:text-violet-700"
								>
									Portfolio
								</a>
							</li>
							{!user ? (
								<>
									<li>
										<LoginButton />
									</li>
									<li>
										<SignupButton />
									</li>
								</>
							) : (
								<li>
									<LogoutButton />
								</li>
							)}
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
				</nav>
				<ScrollingCryptoPriceWidget />
			</div>
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
