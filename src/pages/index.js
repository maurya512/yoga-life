import React from 'react'

// ! import components and data files 
import Display from '../components/Display/Display'
import Features from '../components/Features/Features'
import Hero from '../components/Hero/Hero'
import InfoSection from '../components/InfoSection/InfoSection'
import { InfoData } from '../data/InfoData'
import { SliderData } from '../data/SliderData'


const Home = () => {
    return (
        <>
            <Hero slides={SliderData} />
            <InfoSection {...InfoData} />
            <Display />
            <Features />
        </>
    )
}

export default Home
