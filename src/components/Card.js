import React from 'react';
import {Card,Button,Form} from 'react-bootstrap';
import {BsHeart} from 'react-icons/bs'

const Card1 = ({image,title,discount,dprice,oprice}) => {
    return (
        <div className='card-deal'>
         <Card className='card-offer' style={{ width: '12rem'}}>
                        <Card.Img variant="top" src={image}/>
                        <Card.Body className='cardbody'>
                            <Card.Title className='card-title'>{title}</Card.Title>
                               
                            <Card.Text className='card-text'>
                                <p>{discount}Off</p>
                                <del>Rp {dprice} </del>
                                <h2> Rp{oprice} </h2>
                            </Card.Text> 
                            <Form>
                                <i><BsHeart/></i>
                            <Button variant="primary" type='submit'>Add to cart</Button>
                            </Form>
                           

                        </Card.Body>
                </Card>
        </div>
    )
}

export default Card1
