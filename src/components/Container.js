import React from 'react'
import Profile from './Profile'
import Gallery from './Gallery'

const Container = ({ galleryImages, setGalleryImages }) => {
    
    return(
        <div id="container">
            <Profile />
            <Gallery galleryImages={galleryImages} />
        </div>
    )
}

export default Container;