import React from 'react'
import {
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper, 
    SidebarMenu, 
    SidebarLink, 
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements'; 

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about"> 
                        About 
                    </SidebarLink>
                    <SidebarLink to="skills"> 
                        Skills 
                    </SidebarLink>
                    <SidebarLink to="experience"> 
                        Experience
                    </SidebarLink>
                    <SidebarLink to="education"> 
                        Education
                    </SidebarLink>
                    <SidebarLink to="portfolio"> 
                        Portfolio
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="contact">
                        Contact
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar
