import React from 'react'
import Fred from '../assets/images/Fred.svg'
import USA from '../assets/images/USA.svg'
import FB from '../assets/images/FB.svg'
import twitter from '../assets/images/twitter.svg'
import world from '../assets/images/world.svg'
import instagram from '../assets/images/instagram.svg'
import location from '../assets/images/location.svg'

const Profile = () => {
    return(
        <div id="profile">
            <div id="userProfile">
                <img src={Fred} style={{ height: '65px', opacity: '85%' }} alt="Fred"/>
                <h3 style={{ transform: 'translate(10px)' }}>Fred Segal</h3>
                <div id="location">
                    <img src={USA} style={{ height: '12px', opacity: '85%' }} alt="USA"/>
                    MALIBU | USA
                </div>
                <img src={world} style={{ height: '18px' }} alt="world"/>
                <img src={instagram} style={{ height: '18px' }} alt="instagram"/>
                <img src={FB} style={{ height: '18px' }} alt="facebook"/>
                <img src={twitter} style={{ height: '18px' }} alt="twitter"/>
            </div>
            <div id="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a 
                type specimen book. It has survived not only five centuries, but also the 
                leap into electronic typesetting, remaining essentially unchanged.
            </div>
            <div>
                <div id="label">
                    <p>OVERVIEW</p>
                    <button>Edit</button>
                </div>
                <div className="items">
                    <p>Products</p>
                    <p>4</p>
                </div>
                <div className="items">
                    <p>Years in Business</p>
                    <p>3-5</p>
                </div>
                <div className="items">
                    <p>Revenue</p>
                    <p>$3M - $5M</p>
                </div>
                <div className="items">
                    <p>MSRP Range</p>
                    <p>$400 - $1,200</p>
                </div>
            </div>
            <div>
                <div id="label">
                    <p>LOCATIONS</p>
                    <button>Edit</button>
                </div>
                <div className="locations">
                    <img src={location} style={{ height: '18px' }} alt="location"/>
                    <div>
                        <h4>Fred Segal Cafe</h4>
                        <h5>Malibu, United States</h5>
                        <p>DEPARTMENTAL STORE</p>
                        <span className="tags">Men's Fashion</span> <span className="tags">Women's Fashion</span>
                    </div>
                </div>
                <div className="locations">
                    <img src={location} style={{ height: '18px' }} alt="location"/>
                    <div>
                        <h4>Fred Segal Cafe</h4>
                        <h5>Malibu, United States</h5>
                        <p>DEPARTMENTAL STORE</p>
                        <span className="tags">Men's Fashion</span> <span className="tags">Women's Fashion</span>
                    </div>
                </div>
            </div>
            <div>
                <div id="label">
                    <p>BRANDS</p>
                    <button>Edit</button>
                </div>
                <div className="brand">
                </div>
                <div className="brand">
                </div>
            </div>
        </div>
    )
}

export default Profile;