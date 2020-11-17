

import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import GridGifItem from './GridGifItem';
import { getGifs } from '../../helper/getGifs';

function GifGrid({ category }) {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs(category)
            .then(setImages)
            .catch(err => console.log(err))
    }, [category])


    const drawListImages = () => {
        return images.map((img) => (
            <GridGifItem
                key={img.id}
                {...img}
            />
        ));
    }

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                <ol>
                    {drawListImages()}
                </ol>
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid