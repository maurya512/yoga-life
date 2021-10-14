// ! import dependencies
import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowRoundForward } from 'react-icons/io'
import styled, { css } from 'styled-components/macro'
import { Button } from '../Button/Button'
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa'

// ! styled components for Footer Component
const Section = styled.section`
background: #000d1a;
color: #fff;
width: 100%;
min-height: 600px;
padding: 3rem calc((100vw - 1300px) / 2);
` 

const Container = styled.div`
height: 100%;
width: 100%;
padding: 2rem;
`

const FooterTop = styled.div`
display: flex;
flex-direction: row;
padding: 4rem 0rem;

@media screen and (max-width: 768px) {
    flex-direction: column;
}
`

const Quote = styled.div`
flex: 1;
padding: 2rem 0rem;

h3 {
    font-size: clamp(2rem, 8vw, 5rem);
}
`

const FooterInfo = styled.div`
padding: 2rem;
line-height: 3;
display: flex;
flex-direction: column;

a {
    color: #fff;
    text-decoration: none;
}

@media screen and (max-width: 768px) {
    padding: 1rem 0rem;
}
`

const FooterBottom = styled.div`
display: flex;
padding: 2rem 0rem;

@media screen and (max-width: 768px) {
    flex-direction: column;
}
`

const SocialIcons = styled.div`
display: flex;
width: 50%;

@media screen and (max-width: 768px) {
    margin-bottom: 2rem;
    width: 100%;
}
`

// ! a reusable styled component for social icons
const Icons = css`
font-size: clamp(1rem, 6vw, 2rem);
margin-right: 1.5rem;
color: #cd853f;
`

const Instagram = styled(FaInstagram)`
${Icons}
`

const Facebook = styled(FaFacebookF)`
${Icons}
`

const YouTube = styled(FaYoutube)`
${Icons}
`

const Contact = styled.div`
width: 50%;
display: flex;
justify-content: flex-end;
align-items: center;

@media screen and (max-width: 768px) {
    width: 100%
    justify-content: flex-start;
}
`


const Footer = () => {
    return (
        <Section>
            <Container>
                <FooterTop>
                    <Quote>
                        <h3>Book A Session<br />Right Now</h3>
                    </Quote>
                    <FooterInfo>
                        <h3>Contact Us</h3>
                        <Link to="/">FAQ</Link>
                        <Link to="/">Support</Link>
                        <Link to="/">Questions</Link>
                    </FooterInfo>
                </FooterTop>
                <FooterBottom>
                    <SocialIcons>
                        {/* a tag to ensure it opens in a new tab */}
                        <a href="//www.youtube.com" rel="noopener noreferrer" target="_blank">
                            <YouTube />
                        </a>
                        <a href="//www.instagram.com" rel="noopener noreferrer" target="_blank">
                            <Instagram />
                        </a>
                        <a href="//www.facebook.com" rel="noopener noreferrer" target="_blank">
                            <Facebook />
                        </a>
                    </SocialIcons>
                    <Contact>
                        <Button to="/sessions">
                            Let's Chat <IoMdArrowRoundForward />
                        </Button>
                    </Contact>
                </FooterBottom>
            </Container>
        </Section>
    )
}

export default Footer
