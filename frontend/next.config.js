/** @type {import('next').NextConfig} */
// import httpProxy from "http-proxy"


module.exports = {
	rewrites() {
		return [
			{
				source: "/api/",
				destination: "http://localhost:4001/api/",
			},
		]
	},
}
