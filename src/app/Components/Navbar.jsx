import React from 'react'

const Navbar = () => {
  return (
    <header className='Navbar-container'>

<div className="mobile-menu">
            <img src="/menu.png" alt="menu" />
        </div>
        
        <div className='logo-container'>
            <div className='logo-img-container'>
                <img src='/logo.svg' alt='Essosa Identity'/>
            </div>

            <div className='logo_text'>
                <h4>Essosa <br/> Fashion</h4>
            </div>
        </div>

        <ul className='header-menu'>
            <li className='menu-links'>Home</li>
            <li className='menu-links'>About</li>
            <li className='menu-links'>Shop</li>
        </ul>

    

        <div className='cart_logo'>
            <img src='/bag.svg' alt='bag'/>
        </div>
    </header>
  )
}

export default Navbar;
