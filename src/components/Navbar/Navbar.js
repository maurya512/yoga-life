// ! dependencies
import React from 'react'
import styled, { css } from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { menuData } from '../../data/MenuData'

// ! styled components
const Nav = styled.nav`
height: 60px;
background: #000;
display: flex;
justify-content: space-between;
padding: 1rem 2rem;
z-index: 100;
position: fixed;
width: 100%;
`

// ! logo styling
// ! link makes the styled component react as a link
const Logo = styled(Link)`
color: #fff;
font-styling: italic;
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

// ! menu bars styling
const MenuBars = styled.i`
`

// ! nav menu styling
const NavMenu = styled.i`
display: flex;
align-items: center;
`
// ! styling nav menu links
const NavMenuLinks = styled(Link)`
${NavLink}
`

const Navbar = () => {
    return (
        <Nav>
            {/* logo for the application */}
            <Logo>
                Yoga Life
            </Logo>
            {/* menu bars for mobile screen */}
            <MenuBars />
            <NavMenu>
                {/* ! mapping through the data from menuData file and displaying it on the screen  */}
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <h1>
                Navbar
            </h1>
        </Nav>
    )
}

export default Navbar
