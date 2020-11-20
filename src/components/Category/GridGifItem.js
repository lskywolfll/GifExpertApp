import React from 'react'
import PropTypes from 'prop-types'

function GridGifItem({ title, id, url }) {
    return (
        <div className="card animate__animated animate__bounceInUp">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

GridGifItem.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default GridGifItem

