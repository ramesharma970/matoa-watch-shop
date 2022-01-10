import React from 'react'
import { Container } from 'react-bootstrap';
import watch1 from '../assets/images/watch1.jpg';
import watch2 from '../assets/images/watch2.jpg';
import watch3 from '../assets/images/watch3.jpg';
import watch4 from '../assets/images/watch4.jpg';

const Gallery = () => {
    return (
        <div className='gallery'>
            <Container>
                <h1 className='gallery-title'>Instagram</h1>
                <div className='gallery-container'>
                    <img alt='' src={watch1}/>  
                   <img alt='' src={watch2}/>  
                    <img alt='' src={watch3}/>  
                    <img alt='' src={watch4}/> 
                    <img alt='' src={watch1}/>  
                </div>
            </Container>
            
        </div>
    )
}

export default Gallery
