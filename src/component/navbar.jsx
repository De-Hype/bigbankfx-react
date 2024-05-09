import { useState } from 'react';
import redbull from '../../public/redbull.png'
import { NavLink } from 'react-router-dom';

function Navbar() {

    const [openNav, setOpenNav] = useState(false);

    const deco = {
        transform: openNav ? `translate(0px, 0px)`: `translate(-400px, 0px)`,
    }

    function open() {
        setOpenNav((prev)=> {
            return !prev;
        })
    }

    return (
        <section className='total-navbar'>
            <div className="navbar navbar1">
                <div className='logo logo1'><img src={redbull} alt="" /><h2>BigBankFX</h2></div>
                <div className="nav-links">
                    <ul>
                        <li><NavLink to=".." className="navlink">Home</NavLink></li>
                        <li><NavLink to="../aboutUs" className="navlink">About Us</NavLink></li>
                        <li><NavLink to="../services" className="navlink">Our Services</NavLink></li>
                        <li><NavLink to="../legal" className="navlink">Legal Information</NavLink></li>
                        <li><NavLink to="../contact" className="navlink">Help Center</NavLink></li>
                        <li><NavLink to="../term" className="navlink">Terms Of Use</NavLink></li>
                    </ul>
                </div>
                <div className="sign-btns">
                <NavLink to="../login" className="navlink" > <button className="login-btn">Login</button></NavLink> 
                <NavLink to="../signup" className="navlink" >   <button className="sign-btn">Sign Up</button> </NavLink>
                </div>
            </div>
            <div className="navbar navbar2" style={deco}>
                <div className='logo logo1'><img src={redbull} alt="" /><h2>BigBankFX</h2></div>
                <div className="nav-links">
                    <ul>
                    <li><NavLink to=".." className="navlink"  onClick={open}>Home</NavLink></li>
                        <li><NavLink to="../aboutUs" className="navlink" onClick={open}>About Us</NavLink></li>
                        <li><NavLink to="../services" className="navlink" onClick={open}>Our Services</NavLink></li>
                        <li><NavLink to="../legal" className="navlink" onClick={open}>Legal Information</NavLink></li>
                        <li><NavLink to="../contact" className="navlink" onClick={open}>Help Center</NavLink></li>
                        <li><NavLink to="../term" className="navlink" onClick={open}>Terms Of Use</NavLink></li>
                    </ul>
                </div>
                <div className="sign-btns">
                <NavLink to="../login" className="navlink" onClick={open}> <button className="login-btn">Login</button></NavLink>  
                <NavLink to="../signup" className="navlink" onClick={open}>   <button className="sign-btn">Sign Up</button> </NavLink>
                </div>
            </div>
            <div className='phone-nav'>
                <div className='logo'><img src={redbull} alt="" /><h2>BigBankFX</h2></div>
                <div onClick={open}>{openNav ? <i className='bi-x'></i>: <i className='bi-list'></i>
                }</div>
            </div>
        </section>
    )
}

export default Navbar;