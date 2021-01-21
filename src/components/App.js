import React from 'react'
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
    return(
        <div>
            <Navbar link={ link }/>
            <Header />
            <Banner />
            <Container />
        </div>
    )
}

export default App;

//https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true
//https://picsum.photos/v2/list