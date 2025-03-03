import { useI18n } from '../../context/I18nContext'

const HeroButton = () => {
    const { t } = useI18n()
    return (
        <div className='rounded-md shadow'>
            <a
                href='#contact'
                className={`
                    w-full flex items-center justify-center
                    px-8 py-3 border border-transparent
                    text-base font-medium rounded-md
                    text-white bg-primary-500 hover:bg-primary-600
                    md:py-4 md:text-lg md:px-10
                `}
            >
                {t('hero.button')}
            </a>
        </div>
    )
}

export default HeroButton
