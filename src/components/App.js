import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './Navbar'
import Header from './Header'
import Carousel from './Carousel'
import Container from './Container'
import Dashboard from './Dashboard'
import '../assets/styles/App.css'
import '../assets/styles/Responsive.css'

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
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Navbar link={{ text: 'Admin Dashboard', link: '/covid19' }}/>
                        <Header />
                        <Carousel carouselImages={galleryImages} />
                        <Container galleryImages={galleryImages} />
                    </Route>
                    <Route path="/covid19">
                        <Navbar link={{ text: 'Showcase', link: '/' }}/>
                        <Dashboard />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;

//https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true
//https://picsum.photos/v2/list