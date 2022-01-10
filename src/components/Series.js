import React from 'react';
import { Container } from 'react-bootstrap';
import watch1 from '../assets/images/watch1.jpg';
import watch2 from '../assets/images/watch2.jpg';
import watch3 from '../assets/images/watch3.jpg';

const Series = () => {
    return (
        <div className='series'>

            <Container>
                <div className='series-container'>
                    <div className='series-container1'>
                        <h1 className='series-title'>Maple series</h1>
                        <div className='series-card'>
                            <img alt='series-image' src={watch1}/>
                            <div className='series-card-text'>
                                <h2> Way kambas Maple</h2>
                                <h4>Rp 1250.00</h4>
                            </div>
                        </div>
                        <div className='series-card'>
                            <img alt='series-image' src={watch1}/>
                            <div className='series-card-text'>
                                <h2> Way kambas Maple</h2>
                                <h4>Rp 1250.00</h4>
                            </div>
                        </div>
                        <div className='series-card'>
                            <img alt='series-image' src={watch1}/>
                            <div className='series-card-text'>
                                <h2> Way kambas Maple</h2>
                                <h4>Rp 1250.00</h4>
                            </div>
                        </div>

                    </div>
                    <div className='series-container2'>
                        <h1 className='series-title'>EBony series</h1>
                        <div className='series-card'>
                            <img alt='series-image' src={watch3}/>
                            <div className='series-card-text'>
                                <h2> Way kambas Maple</h2>
                                <h4>Rp 1250.00</h4>
                            </div>
                        </div>
                        <div className='series-card'>
                            <img alt='series-image' src={watch2}/>
                            <div className='series-card-text'>
                                <h2> Way kambas Maple</h2>
                                <h4>Rp 1250.00</h4>
                            </div>
                        </div>
                        <div className='series-card'>
                            <img alt='series-image' src={watch1}/>
                            <div className='series-card-text'>
                                <h2> Way kambas Maple</h2>
                                <h4>Rp 1250.00</h4>
                            </div>
                        </div>

                    </div>
                    <div className='series-container3'>
                        <h1 className='series-title'>Featured</h1>
                        <div className='series-card'>
                            <img alt='series-image' src={watch1}/>
                            <div className='series-card-text'>
                                <h2> Way kambas Maple</h2>
                                <h4>Rp 1250.00</h4>
                            </div>
                        </div>
                        <div className='series-card'>
                            <img alt='series-image' src={watch2}/>
                            <div className='series-card-text'>
                                <h2> Way kambas Maple</h2>
                                <h4>Rp 1250.00</h4>
                            </div>
                        </div>
                        <div className='series-card'>
                            <img alt='series-image' src={watch3}/>
                            <div className='series-card-text'>
                                <h2> Way kambas Maple</h2>
                                <h4>Rp 1250.00</h4>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='series-seemore'>
                    <button className='see-more-button'> See More </button>
                </div>

            </Container>
        </div>
    )
}

export default Series
