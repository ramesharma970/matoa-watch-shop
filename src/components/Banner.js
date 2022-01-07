import React from 'react';
import { Container } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className='banner'>
           <Container>
             <div className='banner-glass'>
                 <h1 className='banner-title'>
                     Luxurious <span> Eyewear</span>
                 </h1>
                 <p className='banner-text'>
                     See the beauty of exotice world with luxurious glasses.
                 </p>
                 <a href='#' className='banner-link'>Discover Now</a>
                 <img alt='banner-glass' src='https://img.joomcdn.net/badba76ab751336ab0a114618548524f9f312fcb_original.jpeg' /> 

             </div>
             <div className='banner-watch'>
             <h1 className='banner-title'>
                     Comfortable <span> Watches </span>
                 </h1>
                 <p className='banner-text'>
                     See the beauty of exotice world with luxurious glasses.
                 </p>
                 <a href='#' className='banner-link'>Discover Now</a>
                 <img alt='banner-glass' src='data:image/jpeg;base64,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' /> 
             </div>
            </Container>
            
        </div>
    )
}

export default Banner