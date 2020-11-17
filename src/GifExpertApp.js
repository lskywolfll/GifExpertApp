

import React, { Fragment, useState } from 'react'
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

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {drawItemsList()}
            </ol>
        </>
    )
}

export default GifExpertApp