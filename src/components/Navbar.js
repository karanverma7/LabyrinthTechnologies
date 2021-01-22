import React from 'react'
import {Link} from 'react-router-dom'
import upLogo from '../assets/images/upLogo.svg'
import User from '../assets/images/User.svg'
import back from '../assets/images/back.svg'
import dropdown from '../assets/images/dropdown.svg'

const Navbar = ({ link }) => {
    return(
        <div id="navbar">
            <div id="adminDashboard">
                <Link to={link.link}>
                    <img src={back} alt="back-navigation"/>&nbsp;&nbsp;{ link.text }
                </Link>
            </div>
            <div id="logo">
                <Link to="/">
                    <h2>BORN 
                        <img src={upLogo} style={{ height: '5px'}} alt="logo"/>
                    </h2>
                </Link>
            </div>
            <div id="userInfo">
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