import React from 'react'
import Hero from '../components/Hero/Hero'
import { I18nProvider } from '../context/I18nContext'
import About from '../components/About/About'
import Prices from '../components/Prices/Prices'
import Contact from '../components/Contact/Contact'

const Sections = ({ currentLocale, currentPath }) => {
    return (
        <I18nProvider initialLocale={currentLocale} initialPath={currentPath}>
            <Hero />
            <About />
            <Prices />
            <Contact />
        </I18nProvider>
    )
}

export default Sections
