import React from 'react'
import Navbar from './NavBar'
import { I18nProvider } from '../../context/I18nContext'

const Header = ({ currentLocale, currentPath }) => {
    return (
        <header className='fixed top-0 left-0 right-0 z-50 bg-gray-800 text-white p-4 shadow-md'>
            <I18nProvider initialLocale={currentLocale} initialPath={currentPath}>
                <Navbar />
            </I18nProvider>
        </header>
    )
}

export default Header
