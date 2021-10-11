// ! import depdencies
import React from 'react'
import styled from 'styled-components/macro'
import { Button } from '../Button/Button'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { IoArrowForward, IoArrowBack } from 'react-icons/io5'
import { SliderData } from '../../data/SliderData'

// ! styled components
const HeroSection = styled.section`
height: 100vh;
max-height: 1100px;
position: relative;
overflow: hidden;
`

const HeroWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
position: relative;
`

const HeroSlide = styled.div`

`

const HeroSlider = styled.div`

`

const HeroImage = styled.img`

`

const HeroContent = styled.div`

`

const Arrow = styled(IoMdArrowRoundForward)`
`

const Hero = ({ slides }) => {
    return (
        <HeroSection>
            <HeroWrapper>
                {slides.map((slide, index) => {
                    return (
                        <HeroSlide key={index}>
                            <HeroSlider>
                                <HeroImage />
                                <HeroContent >
                                    <h1>{slide.title}</h1>
                                    <p>{slide.description}</p>
                                    <p>{slide.price}</p>
                                    <Button to={slide.path} primary="true"
                                        css={`max-width: 160px;`}
                                    >{slide.label}<Arrow /></Button>
                                    {/* <img src={slide.image} alt={slide.alt} /> */}
                                </HeroContent>
                            </HeroSlider>
                        </HeroSlide>
                    )
                })}
            </HeroWrapper>
        </HeroSection>
    )
}

export default Hero
