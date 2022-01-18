import React from 'react'
import '../StyleSheet/Navbar.css'
const NavBar = () => {
    const logo="https://i01.appmifile.com/webfile/globalimg/pandora/mi-logo.svg";
    return (
        <div className='Nav'>
            <div className='logo'>
            <a href='/'> <img id='logoImage' src={logo} alt='Logo'></img></a>
            </div>
            <a className='NavLinks' href='/miphones'>Mi Phones</a>
            <a className='NavLinks' href='/redmiphones'>Redmi Phones</a>
            <a className='NavLinks' href='/tv'>TV</a>
            <a className='NavLinks' href='/laptops'>Laptops</a>
            <a className='NavLinks' href='/Fitness'>Fitness & lifeStyles</a>
            <a className='NavLinks' href='/Home'>Home</a>
            <a className='NavLinks' href='/radio'>Radio</a>
            <a className='NavLinks' href='/accessories'>Accessories</a>
            <div className='SearchBox'>
            <input type='text' name='search' placeholder='Search Product' />
            {/* {searchicon} */}
            </div>
            </div>
    )
}
export default NavBar;