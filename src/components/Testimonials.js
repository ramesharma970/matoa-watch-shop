import React from 'react';
import person2 from '../assets/images/person2.jpg';
import { Container } from 'react-bootstrap';

const Testimonials = () => {
    return (
        <div className='testimonials'>
            <Container>
                <div className='testimonial-container'>
                     <div className='testimonial-container1'>
                         <img alt='' src={person2}/>
                         <div className='testimo-back'>

                         </div>
                     </div>


                     <div className='testimonial-container2'>
                         <h1>Testimonials</h1>
                         <p>
                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                         when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                         </p>

                         <h3>
                             Gita Savitri
                         </h3>
                        <h5>
                            Content Creator/Influencer
                        </h5>
                     </div>
                </div>

            </Container>
            
        </div>
    )
}

export default Testimonials
