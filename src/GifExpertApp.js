

import React, { Fragment, useState } from 'react'
import AddCategory from './components/Category/AddCategory';
import GifGrid from './components/Category/GifGrid';

function GifExpertApp(props) {

    const initialValues = ["One Punch"];

    const [categories, setCategories] = useState(initialValues);

    const drawItemsList = () => {
        return categories.map(category => (
            <GifGrid key={category} category={category} />
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