import React from "react"

type CustomVideoOwnProps = {
	classNames: string
	videoSrc: string
}

const CustomVideo: React.FC<CustomVideoOwnProps> = ({ classNames, videoSrc }) => {
	return (
		<video autoPlay loop muted playsInline className={classNames}>
			<source src={videoSrc}></source>
		</video>
	)
}

export default CustomVideo
