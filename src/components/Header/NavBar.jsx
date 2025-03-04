import React from 'react'
import large_logo from '../../assets/large_logo.png'

import NavItems from './NavItems'
import LangDropdown from './LangDropdown'
import MobileNavItems from './MobileNavItems'

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className='relative '>
            <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
                <div className=' flex items-center justify-between h-12'>
                    <div className='flex-shrink-0 flex items-center'>
                        <img
                            src={large_logo.src}
                            alt='ID Trans Express'
                            className='h-10 w-auto sm:h-12 md:h-14'
                            fetchPriority='high'
                        />
                    </div>

                    <div className='absolute inset-y-0 right-0 flex items-center sm:hidden'>
                        <button
                            onClick={toggleMenu}
                            className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                            aria-expanded='false'
                        >
                            <svg
                                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                aria-hidden='true'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M4 6h16M4 12h16M4 18h16'
                                />
                            </svg>

                            <svg
                                className={`${isOpen ? 'flex' : 'hidden'} h-6 w-6`}
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                aria-hidden='true'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M6 18L18 6M6 6l12 12'
                                />
                            </svg>
                        </button>
                    </div>

                    <NavItems />
                    <LangDropdown />
                </div>
            </div>

            <MobileNavItems isOpen={isOpen} setIsOpen={setIsOpen} />
        </nav>
    )
}

export default Navbar
