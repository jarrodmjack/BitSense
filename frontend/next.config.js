/** @type {import('next').NextConfig} */
const nextConfig = {}
// module.exports = {
// 	ssr: false,
// }

module.exports = () => {
	const rewrites = () => {
		return [
			{
				source: "/api",
				destination: "http://localhost:4001",
			},
		]
	}
	return {
		rewrites,
	}
}
