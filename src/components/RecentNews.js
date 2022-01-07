import React from 'react';
import {Container} from 'react-bootstrap';
import person1 from '../assets/images/person1.jpg';

const RecentNews = () => {
    return (
        <div className='recent-news'>
           <Container>
            <h1 className='recent-title'>Recent News</h1>
            <div className='recent-container'>
                <div className='recent-container1'>
                    <h6>Where to Travel</h6>
                    <h4> Matoa Where to Travel? Yogyakarta </h4>
                    <button>Discover</button>
                </div>
                <div className='recent-container2'>
                    <img alt='recent-images' src={person1}/>
                    <div className='recent-back'>

                    </div>

                </div>
            </div>
            </Container> 
        </div>
    )
}

export default RecentNews
