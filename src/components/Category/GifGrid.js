

import React from 'react'
import PropTypes from 'prop-types'
import { useFetchGifs } from '../../hooks/useFetchGifs'
import Loading from '../Loading';
import GridGifItem from './GridGifItem';
function GifGrid({ category }) {

    const { data: images, loading, err } = useFetchGifs(category);

    const drawListImages = () => {
        return images.map((img) => (
            <GridGifItem
                key={img.id}
                {...img}
            />
        ));
    }

    if (err) {
        return (
            <>
                <h1>Error</h1>
                <p>{err.message}</p>
            </>
        )
    }

    if (loading) {
        return <Loading />
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