import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import Header from './Header'
import Banner from './Banner'
import Container from './Container'
import '../assets/styles/App.css'
import '../assets/styles/Responsive.css'

const link = {
    text: 'Admin Dashboard',
    link: ''
}

const App = () => {

    const [ galleryImages, setGalleryImages ] = useState([])

    const getGalleryImages = async () => {
        let results = await axios.get('https://picsum.photos/v2/list?limit=5');
        setGalleryImages(results.data)
    }

    useEffect( () => {
        getGalleryImages();
    }, [])

   
    return(
        <div>
            <Navbar link={ link }/>
            <Header />
            <Banner galleryImages={galleryImages} />
            <Container galleryImages={galleryImages} />
        </div>
    )
}

export default App;

//https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true
//https://picsum.photos/v2/list