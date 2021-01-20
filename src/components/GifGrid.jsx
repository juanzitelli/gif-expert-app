// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Hooks
import { useFetchGifs } from '../hooks/useFetchGifs'
// Components
import GifGridItem from './GifGridItem'


const GifGrid = ({ category }) => {

	const { data: images, loading } = useFetchGifs(category);

	return (
		<div>
			<h3 id="category">
				{category}
			</h3>

			{loading && <p className="animate__animated animate__flash">Loading... ⏱</p>}


			<div className="cardsContainer animate__animated animate__fadeIn animate__delay-2s">
				{images.map((image) => <GifGridItem key={image.id} {...image} />)}
			</div>
		</div>
	)
}

GifGrid.propTypes = {
	category: PropTypes.string.isRequired,
}

export default GifGrid
