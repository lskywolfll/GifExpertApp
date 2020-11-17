
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Swal from 'sweetalert2';

function AddCategory({ setCategories }) {

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = ({ target: { value } }) => setInputValue(value);

    const Limpiar = () => setInputValue("");

    /**
     * Validador antes de agregar un nuevo elemento en el array de categorias
     * 
     * @param {Array} oldArray - Son todos los valores anteriores que estaban en el array 
     * @param { String } category - Es el nuevo valor a agregar como categoria
     * @return { Array }  Nuevo array con la categoria
     */
    const handleSetCategory = (oldArray, category) => {
        if (!category) {
            Swal.fire({
                title: "Error",
                icon: "error",
                text: "Debes ingresar un texto",
                allowOutsideClick: false,
                allowEnterKey: false,
                allowEscapeKey: false
            })

            Limpiar()
            return [...oldArray];
        } else {
            const existe = oldArray.find(categoryValue => categoryValue === category);

            Limpiar()
            return existe ? [...oldArray] : [category, ...oldArray];
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setCategories(oldArray => handleSetCategory(oldArray, inputValue));
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
    setCategories: PropTypes.func.isRequired
}

export default AddCategory

