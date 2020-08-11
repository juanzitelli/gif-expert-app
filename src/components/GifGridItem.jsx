import React from 'react'

const GifGridItem = ({title,url}) =>

	<div className="card animate__animated animate__bounceInRight">
		<img src={url} alt={title}/>
		<p>{title}</p>
	</div>

export default GifGridItem
