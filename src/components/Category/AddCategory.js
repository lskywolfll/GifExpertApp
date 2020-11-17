
import React, { useState } from 'react'
import PropTypes from 'prop-types'

function AddCategory(props) {

    const [inputValue, setInputValue] = useState("Hola Mundo");

    const handleInputChange = ({ target: { value } }) => setInputValue(value);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}

            />
        </form>
    )
}

AddCategory.propTypes = {

}

export default AddCategory

