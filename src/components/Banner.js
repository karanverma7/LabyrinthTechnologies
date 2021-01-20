import React from 'react'
import bannerImage from '../assets/images/bannerImage.jpg'
import previous from '../assets/images/back.svg'
import next from '../assets/images/next.svg'

const Banner = () => {
    return(
        <div id="bannerComponent">
            <div id="controls">
                <img id="previous" src={previous} alt="previous"/>
                <img id="next" src={next} alt="next"/>
            </div>
            <div id="image" style={{ backgroundImage: `url(${bannerImage})`}}></div>
            <div id="tour">Tour this Retailer</div>
        </div>
    )
}

export default Banner;