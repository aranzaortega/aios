import React from 'react';
import {FaBars} from 'react-icons/fa';
import {
    Nav, 
    NavbarContainer, 
    NavLogo,
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks, 
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const Navbar = ({toggle}) => {
    return (
        <>
           <Nav>
               <NavbarContainer>
                    <NavLogo to='/'>
                        &lt;aios&#47;&gt;
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="skills">Skills</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="experience">Experience</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="works">Works</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                            <NavBtnLink to="/contact">Contact</NavBtnLink>
                    </NavBtn>
               </NavbarContainer>
           </Nav>
        </>
    )
}

export default Navbar
