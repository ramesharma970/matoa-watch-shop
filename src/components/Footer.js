import React from 'react'
import { Container } from 'react-bootstrap';
import {BsFacebook,BsInstagram,BsYoutube,BsFillTelephoneFill} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';
import {MdLocationOn} from 'react-icons/md';
const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <div className='footer-container'>
                    <div className='footer-container1'>

                        <h2 className='footer-title'>About Us</h2>
                        <div className='about-container'>
                           <p> About Matoa</p>
                           <p>Offers</p>
                           <p>Sales</p>
                        </div>
                       
                       
                    </div>

                    <div className='footer-container2'>
                    <h2 className='footer-title'>Information</h2>
                        <div className='about-container'>
                           <p> FAQ</p>
                           <p>Privacy Policy</p>
                           <p>Terms and conditions</p>
                        </div>
                    </div>

                    <div className='footer-container3'>
                    <h2 className='footer-title'>Follow us </h2>
                        <div className='about-container'>
                          <p> <i> <BsFacebook/></i> Facebook</p>
                          <p> <i> <BsInstagram/></i> Instagram</p>
                          <p> <i>  <BsYoutube/></i> Youtube</p>
                         

                          
                         
                          
                        </div>
                       
                    </div>

                    <div className='footer-container4'>
                    <h2 className='footer-title'>Customer Support</h2>
                        <div className='about-container'>
                           <p> <i><BsFillTelephoneFill/></i> : +977-9876543210</p>
                           <p><i><AiOutlineMail/></i>: coddakucodes321@gmail.com</p>
                           <p><i><MdLocationOn/></i> : Baneswor,Kathmandu</p>
                        </div>
                       
                    </div>
                </div>
            </Container>
            
        </div>
    )
}

export default Footer
