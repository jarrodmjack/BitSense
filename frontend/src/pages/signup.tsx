import React, { useState } from "react"
import { useSignup } from "../hooks/useSignup"
import Link from "next/link"
import CustomVideo from "@/components/video/CustomVideo"

const signup = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const { signup, error } = useSignup()

	const handleSignup = async () => {
		await signup(email, password)
	}

	return (
		<section className="bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
			<CustomVideo videoSrc="/images/techmovingbg.mp4" classNames="absolute z-0 top-0 left-0 min-w-full min-h-full object-cover" />
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
				<div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700 absolute z-10">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
							Sign up with BitSense
						</h1>
						<form className="space-y-4 md:space-y-6" action="#">
							<div>
								<label
									htmlFor="email"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Your email
								</label>
								<input
									onChange={(e) => setEmail(e.target.value)}
									value={email}
									type="email"
									name="email"
									id="email"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="name@company.com"
									required={true}
								/>
							</div>
							<div>
								<label
									htmlFor="password"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Password
								</label>
								<input
									onChange={(e) =>
										setPassword(e.target.value)
									}
									value={password}
									type="password"
									name="password"
									id="password"
									placeholder="••••••••"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									required={true}
								/>
							</div>
							<div className="flex justify-between">
								<span className="text-red-500 font-semibold">
									{error && error}
								</span>
							</div>
							<button
								onClick={(e) => {
									e.preventDefault()
									handleSignup()
								}}
								type="submit"
								className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
							>
								Sign up
							</button>
							<p className="text-sm font-light text-gray-400">
								Already have an account?{" "}
								<Link
									className="font-medium text-gray-200 hover:underline dark:text-primary-500"
									href="/login"
								>
									Sign in
								</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}

export default signup
