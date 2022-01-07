import React from 'react';
import {Container,Button} from 'react-bootstrap';
import {BsCartPlus} from 'react-icons/bs';
import {IoIosArrowBack,IoIosArrowForward} from 'react-icons/io';

const Home = () => {
    return (
        <div className='home'>
           <Container>
                <div className='home-content'>
                     <h1 className='home-title'>
                            WHY KAMBAS 
                            MINI EBONY
                     </h1>
                    
                     <p className='home-body'>
                     The href attribute requires a valid value to be accessible. 
                     The href attribute requires a valid value to be accessible.
                      Provide a valid, navigable address as the href value.
                     </p>


                    <div className='home-discover'>
                    <h6>Disover</h6>
                    </div>
                    

                    <div className='home-button'>
                        <Button className='btn1'> <BsCartPlus/>  Add to cart</Button>
                        <Button className='btn2'>cicil </Button>
                    </div>
                </div>
                <div className='arrow'>
                    <i className='arrow-left'>
                    <IoIosArrowBack/>
                      
                    </i>
                    <i className='arrow-right'>
                    <IoIosArrowForward/>
                    </i>
                </div>
            </Container>
           
        </div>
    )
}

export default Home
