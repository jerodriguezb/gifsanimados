import React from 'react'

const GifGridItem = ({img}) => {

    const {title, url}=img
    return (
        <div className="card">
            <img src={url} alt={title}/>
            <p></p>
        </div>
    )
}

export default GifGridItem
