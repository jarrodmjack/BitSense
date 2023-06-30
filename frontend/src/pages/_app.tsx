import { AuthContextProvider } from "../context/AuthContext"
import { type AppType } from "next/app"
import { useRouter } from "next/router"
import Head from "next/head"
import 'tailwindcss/tailwind.css';

const MyApp: AppType = ({ Component, pageProps }) => {
	const router = useRouter()
	const isLandingPage = router.pathname === "/"
	return (
		<>
			<Head>
				<title>BitSense</title>
				<meta name="description" content="🐢" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* <Toaster position="top-right" /> TODO IN FUTURE */}
			<AuthContextProvider>
				<Component {...pageProps} />
			</AuthContextProvider>
		</>
	)
}

export default MyApp
