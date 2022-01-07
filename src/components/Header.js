import React from 'react';
import {BsSearch} from 'react-icons/bs';
import {CgProfile} from 'react-icons/cg';
import {GrShop} from 'react-icons/gr';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header-logo'>
                <h1> <a href='#'>LOGO</a> </h1>
            </div>

            <div className='header-navbar'>
                <ul>
                    <li> <a href='#'> Watches</a></li>
                    <li> <a href='#'> Eyeware</a></li>
                    <li> <a href='#'> Accesories</a></li>
                    <li> <a href='#'> News</a></li>
                </ul>

            </div>

            <div className='header-sidebar'>

                <div className='search-icon'>
                    <i> <BsSearch/></i>
                </div>
                <div className='header-profile'>
                   <p> <i> <CgProfile/> </i>Log In </p> 

                </div>
                <div className='header-shop'>
                   <i> <GrShop/> </i>

                </div>

            </div>
            
        </div>
    )
}

export default Header
