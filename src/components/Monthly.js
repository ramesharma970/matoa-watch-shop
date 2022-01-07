import React from 'react';
import {Container} from 'react-bootstrap';
import Card1 from './Card';
import watch1 from '../assets/images/watch1.jpg';
import watch2 from '../assets/images/watch2.jpg';
import watch3 from '../assets/images/watch3.jpg';
import watch4 from '../assets/images/watch4.jpg';

const Monthly = () => {
    return (
        <div className='monthly-deals'>
            <Container>
                <h1 className='monthly-title'>Monthly deals</h1>
                <div className='card-all'>
                <Card1 image={watch1} title='Singo Maple' discount='20%' dprice='1500' oprice='1200'  />
                <Card1 image={watch2} title='Singo Ebony' discount='10%' dprice='1500' oprice='1200'  />
                <Card1 image={watch3} title='Rakai Ebony' discount='20%' dprice='1500' oprice='1200'  />
                <Card1 image={watch4} title='Way  Kambas Mini Apple' discount='22%' dprice='1500' oprice='1200'  />
                </div>
          
              
            </Container>
            
        </div>
    )
}

export default Monthly
