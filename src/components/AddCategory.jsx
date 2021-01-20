import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

	const [inputValue, setInputValue] = useState("");

	const handleInputChange = ({ target }) => setInputValue(target.value)

	const handleSubmit = (event) => {
		event.preventDefault()
		inputValue && setCategories(prevCategories => [inputValue, ...prevCategories])
		setInputValue('')
		console.log("Submitted!")
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				name="category"
				id="category"
				value={inputValue}
				onChange={handleInputChange}
			/>
		</form>
	)
}

AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired
}

export default AddCategory
