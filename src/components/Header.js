import React from 'react'
import Fred from '../assets/images/Fred.svg'
import dropdownGrey from '../assets/images/dropdownGrey.svg'
import settings from '../assets/images/settings.svg'

const Header = () => {
    return(
        <div id="header">
            <div id="avatar">
                <img src={Fred} style={{ height: '40px', marginRight: '14px', opacity: '85%' }} alt="Fred"/>
                <p>Fred Segal</p>
                <img src={dropdownGrey} style={{ height: '10px', marginLeft: '20px' }} alt="dropdown"/>
            </div>
            <div id="pages">
                <p>DASHBOARD</p>
                <p className="active">SHOWCASE</p>
            </div>
            <div id="progressInfo">
                <p><b>80%</b> COMPLETE</p>
                <p id="publish">PUBLISH PAGE</p>
                <img src={settings} alt="settings"/>
            </div>
        </div>
    )
}

export default Header;