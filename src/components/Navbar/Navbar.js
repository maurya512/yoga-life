// ! dependencies
import React from 'react'
import styled, { css } from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { menuData } from '../../data/MenuData'
import { Button } from '../Button/Button'
import { AiOutlineBars } from 'react-icons/ai'

// ! styled components
const Nav = styled.nav`
height: 60px;
display: flex;
justify-content: space-between;
padding: 1rem 2rem;
z-index: 100;
position: fixed;
width: 100%;
`

// ! styling for nav links
const NavLink = css`
color: #fff;
display: flex;
align-items: center;
padding:0 1rem;
height: 100%;
cursor: pointer;
text-decoration: none;
`

// ! logo styling
// ! link makes the styled component react as a link
const Logo = styled(Link)`
${NavLink}
font-styling: italic;
`


// ! menu bars styling
const MenuBars = styled(AiOutlineBars)`
display: none;

@media screen and (max-width: 768px) {
    color: #fff;
    display: block;
    background-size: contain;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 15%);
}
`

// ! nav menu styling
const NavMenu = styled.i`
display: flex;
align-items: center;
margin-right: -48px;

// ! media queries
@media screen and (max-width: 768px) {
    display: none;
}
`
// ! styling nav menu links
const NavMenuLinks = styled(Link)`
${NavLink}
`

// ! styling for nav btn
const NavBtn = styled.div`
display: flex;
align-items: center;
margin-right: 24px;

@media screen and (max-width: 768px) {
    display: none;
}
`

const Navbar = ({ toggle }) => {
    return (
        <Nav>
            {/* logo for the application */}
            <Logo to="/">
                Yoga Life
            </Logo>
            {/* menu bars for mobile screen */}
            <MenuBars onClick={toggle} />
            <NavMenu>
                {/* ! mapping through the data from menuData file and displaying it on the screen  */}
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            {/* nav btn */}
            <NavBtn>
                <Button to="/contact" primary='true'>
                    Contact Us
                </Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar
