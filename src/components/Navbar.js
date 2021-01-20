import React from 'react'
import back from '../assets/images/back.svg'
import upLogo from '../assets/images/upLogo.svg'
import User from '../assets/images/User.svg'
import dropdown from '../assets/images/dropdown.svg'

const Navbar = ({ link }) => {
    return(
        <div id="navbar">
            <div id="adminDashboard">
                <img src={back} alt="back-navigation"/>&nbsp;&nbsp;{ link.text }
            </div>
            <div id="logo">
                <h2>BORN 
                    <img src={upLogo} style={{ height: '5px'}} alt="logo"/>
                </h2>
            </div>
            <div>
                <p>
                    <img src={User} style={{ height: '12px', cursor: 'pointer', marginRight: '8px'}} alt="User"/>
                    Brendan W.
                    <img src={dropdown} style={{ height: '7px', cursor: 'pointer', marginLeft: '20px'}} alt="dropdown"/>
                </p>
            </div>
        </div>
    )
}

export default Navbar;