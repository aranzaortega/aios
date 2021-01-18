import React from 'react';
import {FaBars} from 'react-icons/fa';
import {animateScroll as Scroll} from 'react-scroll';
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
    const toggleHome = () => {
        Scroll.scrollToTop();
    };

    return (
        <>
           <Nav>
               <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>
                        &lt;aios&#47;&gt;
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks 
                                to='about'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-'10vh'}
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                to='skills'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-'10vh'}
                            >Skills</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                to='education'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-'10vh'}
                            >Education</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                to='experience'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-'10vh'}
                            >Experience</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                to='works'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-'10vh'}
                            >Works</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                            <NavBtnLink to="contact">Contact</NavBtnLink>
                    </NavBtn>
               </NavbarContainer>
           </Nav>
        </>
    )
}

export default Navbar
