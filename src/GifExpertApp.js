

import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import AddCategory from './components/Category/AddCategory';

function GifExpertApp(props) {

    const initialValues = ["One Punch", "Samurai X", "Dragon Ball"];

    const [categories, setCategories] = useState(initialValues);

    const drawItemsList = () => {
        return categories.map(category => (
            <Fragment key={category}>
                <li>{category}</li>
            </Fragment>
        ));
    }

    // const handleAddCategory = () => {
    //     setCategories(oldArray => [...oldArray, "Holi!"]);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory />
            <hr />

            <ol>
                {drawItemsList()}
            </ol>
        </>
    )
}

GifExpertApp.propTypes = {

}

export default GifExpertApp

