import React from 'react'
import Navbar from './Navbar'

const link = {
    text: 'Admin Dashboard',
    link: ''
}

const App = () => {
    return(
        <div>
            <Navbar link={ link }/>
        </div>
    )
}

export default App;

//https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true
//https://picsum.photos/v2/list