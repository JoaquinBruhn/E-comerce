import React, { useEffect, useState } from 'react'

let key = 'nkTcRLw1LwcDTL91T4HwVE9Kopz0RJFnWP7nAlrh5i4'

export const Item = () => {
	let [randomImg, setRandomImg] = useState(null)

	useEffect(() => {
		fetch(`https://api.unsplash.com/photos/random/?client_id=${key}`)
			.then((response) => response.json())
			.then((data) => setRandomImg(data.urls.small))
	}, [])
	return <div>{randomImg && <img src={randomImg} alt="null" />}</div>
}
