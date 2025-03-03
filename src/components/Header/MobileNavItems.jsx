import React from 'react'
import { useI18n } from '../../context/I18nContext'
import { languages } from '../../i18n/ui'

const MobileNavItems = ({ isOpen, setIsOpen }) => {
    const { t, changeLocale } = useI18n()
    const selectLanguage = (lang) => {
        changeLocale(lang.value)
        setIsOpen(false)
    }

    const scrollToSection = (sectionId) => (e) => {
        e.preventDefault()
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
            <div className='px-2 pt-2 pb-3 space-y-1'>
                <a
                    href='#about'
                    onClick={scrollToSection('about')}
                    className='text-primary-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                >
                    {t('nav.about')}
                </a>
                <a
                    href='#prices'
                    onClick={scrollToSection('prices')}
                    className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                >
                    {t('nav.price')}
                </a>
                <a
                    href='#contact'
                    onClick={scrollToSection('contact')}
                    className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                >
                    {t('nav.contact')}
                </a>

                <div className='pt-2'>
                    {languages.map((lang) => (
                        <button
                            key={lang.value}
                            onClick={() => selectLanguage(lang)}
                            className='flex items-center text-gray-300 hover:bg-gray-700 hover:text-white  px-3 py-2 rounded-md text-base font-medium'
                        >
                            <img src={lang.src} alt={lang.name} className='h-4 w-6 mr-2' />
                            {lang.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MobileNavItems
