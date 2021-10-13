import React from 'react'
import styled from 'styled-components'
import { Button } from '../Button/Button'

// ! import images 
import Image1 from '../../images/info1.jpeg'

// ! styled components for Features.js
const Section = styled.section`
background: #000d1a;
padding: 12rem 0rem;
display: flex;
flex-direction: column;
justify-content: center;
`

const Container = styled.div`
background: #fff;
padding: 3rem 2rem;
position: relative;
`

const Wrap = styled.div`
max-width: 1200px;
margin: 0 auto;
`

const ColumnLeft = styled.div`
display: flex;
flex-wrap: wrap;
margin: 0px -15px;
justify-content: flex-start;
padding: 1rem;
`

const Content = styled.div`
flex: 0 0 50%;

@media screen and (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 250px;
}

h1 {
    margin-bottom: 2rem;
    font-size: 2rem;
}

p {
    margin-bottom: 1rem;
    line-height: 1.5;
}
`

const ColumnRight = styled.div`
position: absolute;
top: -80px;
right: 0;
max-width: 850px;
height: 140%;
width: 45%;
padding-left: 1rem;

@media screen and (max-width: 768px) {
    height: 320px;
    top: -65px;
    width: 80%;
    margin: 0 auto;
    left: 0;

}
`

const Image = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
`

// * Features Component
const Features = () => {
    return (
        <Section>
            <Container>
                <Wrap>
                    <ColumnLeft>
                        <Content>
                            <h1>Lorem ipsum</h1>
                            <p>
                                Labore deserunt magna et Lorem laborum minim. Occaecat ullamco enim ut sunt aliqua deserunt elit voluptate pariatur elit nulla. Tempor ullamco tempor officia non dolore anim nostrud officia sit enim mollit. Commodo sit ea consectetur ipsum qui. Exercitation esse nostrud aliquip eiusmod.
                            </p>
                            <p>
                                Esse deserunt aliquip voluptate nisi. Magna esse laborum sint nisi veniam ad nisi sunt reprehenderit tempor officia officia nulla tempor. Amet exercitation cillum commodo sit ex nisi. Irure labore ipsum minim esse. Incididunt anim sint amet cillum deserunt laborum cupidatat proident dolor. Et excepteur ut laboris commodo ut. Consequat non ad aute minim dolore incididunt duis quis irure nostrud dolore.
                            </p>
                            <Button to="/sessions">Learn More</Button>
                        </Content>
                    </ColumnLeft>
                    <ColumnRight>
                        <Image src={Image1} alt="" />
                    </ColumnRight>
                </Wrap>
            </Container>
        </Section>
    )
}

export default Features
