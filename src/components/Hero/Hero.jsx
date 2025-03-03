import React from 'react'
import truck_img from '../../assets/truck_img_1.png'
import HeroButton from './HeroButton'
import { useI18n } from '../../context/I18nContext'

const Hero = () => {
    const { t } = useI18n()
    return (
        <div
            className='relative bg-cover bg-center py-24 px-4 '
            style={{
                backgroundImage: `url(${truck_img.src})`,
                minHeight: '600px',
            }}
        >
            <div className=' absolute inset-0 bg-gray-800 opacity-40'></div>

            <div className='relative z-10 max-w-7xl mx-auto text-center'>
                <div className='absolute -top-20 left-10 z-20'>
                    <p className='text-md font-bold text-gray-400 flex flex-col sm:flex-row items-start sm:items-center'>
                        <span>+372 56 66 45 56</span>
                        <span className='hidden sm:block mx-2 h-4 border-r border-gray-300'></span>
                        <span>info@idtransexpress.eu</span>
                    </p>
                </div>
                <h1 className='text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl'>
                    <span className='block'>{t('hero.title_1')}</span>
                    <span className='block'>{t('hero.title_2')}</span>
                    <span className='block'>{t('hero.title_3')}</span>
                </h1>
                <p className='mt-3 max-w-md mx-auto text-base text-gray-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
                    {t('hero.subtitle')}
                </p>
                <div className='mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8'>
                    <HeroButton />
                </div>
            </div>
        </div>
    )
}

export default Hero
