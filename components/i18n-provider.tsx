"use client"

import * as React from "react"
import { dictionaries, type Content } from "@/lib/dictionaries"

type Language = "en" | "id"

type I18nContextType = {
    language: Language
    setLanguage: (lang: Language) => void
    t: Content
}

const I18nContext = React.createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = React.useState<Language>("en")
    const [isInitialized, setIsInitialized] = React.useState(false)

    React.useEffect(() => {
        // Simple init: Check localStorage only, default to 'en' otherwise.
        const stored = localStorage.getItem("language") as Language
        if (stored && (stored === "en" || stored === "id")) {
            setLanguageState(stored)
        }
        setIsInitialized(true)
    }, [])

    const setLanguage = (lang: Language) => {
        setLanguageState(lang)
        localStorage.setItem("language", lang)
        // Update HTML lang attribute for SEO/Accessibility
        document.documentElement.lang = lang
    }

    const value = {
        language,
        setLanguage,
        t: dictionaries[language],
    }

    // Prevent hydration mismatch or flash by rendering children only after init
    // Or render with default 'en' to improve LCP (Better for SEO than a spinner)
    // We'll render with current state (starts at EN) but update once detected.

    return (
        <I18nContext.Provider value={value}>
            {children}
        </I18nContext.Provider>
    )
}

export function useI18n() {
    const context = React.useContext(I18nContext)
    if (context === undefined) {
        throw new Error("useI18n must be used within an I18nProvider")
    }
    return context
}
