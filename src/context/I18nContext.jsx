import React from 'react'
import { useTranslations, useTranslatedPath } from '../i18n/utils'

const I18nContext = React.createContext()

export function I18nProvider({ children, initialLocale, initialPath }) {
    const [locale, setLocale] = React.useState(initialLocale || 'et')
    const [path, setPath] = React.useState(initialPath || '/')

    const t = useTranslations(locale)
    const translatePath = useTranslatedPath(locale)

    const changeLocale = (newLocale) => {
        const pathWithoutLocale = path.replace(new RegExp(`^/${locale}`), '') || '/'
        const newPath = translatePath(pathWithoutLocale, newLocale)

        setLocale(newLocale)
        setPath(newPath)

        window.location.href = newPath
    }

    const contextValue = {
        locale,
        path,
        t,
        translatePath,
        changeLocale,
    }

    return <I18nContext.Provider value={contextValue}>{children}</I18nContext.Provider>
}

export function useI18n() {
    const context = React.useContext(I18nContext)
    if (!context) {
        throw new Error('useI18n must be used within an I18nProvider')
    }
    return context
}
