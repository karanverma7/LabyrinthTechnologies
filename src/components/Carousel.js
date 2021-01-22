import React, { useRef } from 'react'
import previous from '../assets/images/back.svg'
import next from '../assets/images/next.svg'

const Carousel = ({ carouselImages }) => {

    const bannerImagesRef = useRef()
    let i = 1;

    let bannerImages = carouselImages.map( image => {
        return(
            <div id="image" key={image.id} style={{ backgroundImage: `url(${image.download_url})`}}></div>
        )
    })

    const slideNext = () => {
        if(i<5){
            bannerImagesRef.current.style.transform = `translateX(${-i*100}vw)`
            i++;
        }
    }

    const slideBack = () => {
        if(i>0){
            i--;
            bannerImagesRef.current.style.transform = `translateX(${-i*100}vw)`
        }
    }

    return(
        <div id="bannerComponent">
            <div id="controls">
                <img id="previous" src={previous} alt="previous" onClick={slideBack}/>
                <img id="next" src={next} alt="next" onClick={slideNext} />
            </div>
            <div ref={bannerImagesRef} id="bannerImages">
                {bannerImages}
            </div>
            <div id="tour">Tour this Retailer</div>
        </div>
    )
}

export default Carousel;
