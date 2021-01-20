import React, { useState } from 'react'
import AddCategory from './AddCategory'
import GifGrid from './GifGrid'

const GifExpertApp = ({defaultCategories = []}) => {
	const [categories, setCategories] = useState(defaultCategories)

	return (
		<>
			<div className="appHeader animate__animated animate__backInDown">
				<h2>GifExpertApp <span role="img" aria-label="emoji">😎</span> </h2>

				<div>
					<i>Search</i>
					<AddCategory setCategories={setCategories} />
				</div>
			</div>
			<div>
				{
					categories.map(category => <GifGrid key={Math.random()} category={category} />)
					//CAMBIAR ESTE MATH RANDOM POR ID
				}
			</div>

		</>
	)
}

export default GifExpertApp
