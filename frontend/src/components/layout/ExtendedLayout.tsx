import React, { PropsWithChildren } from "react"
import LoginButton from "../button/LoginButton"
import SignupButton from "../button/SignupButton"
import LogoutButton from "../button/LogoutButton"
import { useAuthContext } from "@/hooks/useAuthContext"

type ExtendedLayoutOwnProps = {} & PropsWithChildren

const ExtendedLayout: React.FC<ExtendedLayoutOwnProps> = ({ children }) => {
	const { user } = useAuthContext()

	return (
		<main>
			<nav className="w-full bg-gray-950 py-10">
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
						<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-950">
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
						</ul>
					</div>
				</div>
			</nav>
			<div>{children}</div>
		</main>
	)
}

export default ExtendedLayout
