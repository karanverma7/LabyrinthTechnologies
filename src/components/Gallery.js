import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Gallery = () => {

    const [ galleryImages, setGalleryImages ] = useState([])
    const [ instagramGallery, setInstagramGallery ] = useState([])
    const [ active, setActive ] = useState([])

    const getGalleryImages = async () => {
        let results = await axios.get('https://picsum.photos/v2/list?limit=5');
        setGalleryImages(results.data)
    }

    const getInstagramGallery = async () => {
        let results = await axios.get('https://picsum.photos/v2/list?page=2&limit=5');
        setInstagramGallery(results.data)
    }

    useEffect( () => {
        getGalleryImages();
        getInstagramGallery();
    }, [])

    useEffect( () => {
        setActive(galleryImages)
    }, [galleryImages])

    let newList = active.map( image => {
        console.log(image.url)
        return(
            <img className="galleryImage" src={image.download_url} key={image.id} alt="random" />
        )
    })

    return(
        <div id="gallery">
            <div id="galleryNav">
                <span className={`page ${ active === galleryImages ? 'active' : ''}`} onClick={ () => setActive(galleryImages)}>GALLERY</span>
                <span className={`page ${ active === instagramGallery ? 'active' : ''}`} onClick={ () => setActive(instagramGallery)}>INSTAGRAM</span>
            </div>
            <div>
                {newList}
            </div>
        </div>
    )
}

export default Gallery;