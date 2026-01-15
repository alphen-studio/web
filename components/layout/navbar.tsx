"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useI18n } from "@/components/i18n-provider"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe, Sun, Moon } from "lucide-react"

export function Navbar() {
    const { t, language, setLanguage } = useI18n()
    const { theme, setTheme } = useTheme()
    const [isOpen, setIsOpen] = React.useState(false)
    const [mounted, setMounted] = React.useState(false)

    // Handle smooth scrolling for anchor links
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault();
        const targetId = href.replace(/.*\#/, "");
        const elem = document.getElementById(targetId);
        window.scrollTo({
            top: elem?.getBoundingClientRect().top! + window.scrollY - 80, // 80px offset for fixed header
            behavior: "smooth",
        });
        setIsOpen(false);
    };

    // Wait for hydration to avoid mismatch
    React.useEffect(() => {
        setMounted(true)
    }, [])

    const toggleLanguage = () => {
        setLanguage(language === "en" ? "id" : "en")
    }

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <nav className="w-full max-w-4xl rounded-full border border-border/40 bg-background/70 backdrop-blur-xl shadow-lg animate-in slide-in-from-top-4 duration-700 transition-all">
                <div className="px-6 h-14 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                        {mounted ? (
                            <Image
                                src={theme === 'dark' ? '/logos/alphen-logo-white.svg' : '/logos/alphen-logo-black.svg'}
                                alt="Alphen Studio"
                                width={28}
                                height={28}
                                className="w-7 h-7 object-contain"
                            />
                        ) : (
                            <div className="w-7 h-7" /> // Placeholder to prevent layout shift
                        )}
                        <span className="font-medium text-lg tracking-tight">Alphen Studio</span> {/* Thinner font (was bold) */}
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
                        <Link href="#services" onClick={(e) => handleScroll(e, "#services")} className="hover:text-foreground transition-colors hover:scale-105 transform">{t.nav.services}</Link>
                        <Link href="#process" onClick={(e) => handleScroll(e, "#process")} className="hover:text-foreground transition-colors hover:scale-105 transform">{t.nav.process}</Link>
                        <Link href="#about" onClick={(e) => handleScroll(e, "#about")} className="hover:text-foreground transition-colors hover:scale-105 transform">{t.nav.about}</Link>
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-3">
                        {/* Language Toggle */}
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={toggleLanguage}
                            className="h-9 px-2 text-xs font-mono gap-1.5 rounded-full hover:bg-muted"
                        >
                            <Globe className="w-3.5 h-3.5" />
                            {language === "en" ? "EN" : "ID"}
                        </Button>

                        {/* Theme Toggle */}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleTheme}
                            className="h-9 w-9 rounded-full hover:bg-muted"
                        >
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>

                        {/* CTA */}
                        <Button size="sm" className="h-9 rounded-full px-5 font-medium shadow-sm active:scale-95 transition-all bg-foreground text-background hover:bg-foreground/90" asChild>
                            <a href="https://cal.com/rafapradana" target="_blank" rel="noopener noreferrer">
                                {t.nav.cta}
                            </a>
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2 text-foreground active:scale-90 transition-transform"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden border-t border-border/40 px-6 py-4 space-y-3 rounded-b-[2rem] bg-background/95 backdrop-blur-xl absolute top-full left-0 right-0 mt-2 shadow-xl animate-in slide-in-from-top-2">
                        <div className="flex flex-col gap-3 text-sm font-medium">
                            <Link href="#services" onClick={(e) => handleScroll(e, "#services")} className="py-2 hover:translate-x-1 transition-transform">{t.nav.services}</Link>
                            <Link href="#process" onClick={(e) => handleScroll(e, "#process")} className="py-2 hover:translate-x-1 transition-transform">{t.nav.process}</Link>
                            <Link href="#about" onClick={(e) => handleScroll(e, "#about")} className="py-2 hover:translate-x-1 transition-transform">{t.nav.about}</Link>
                        </div>
                        <div className="flex items-center gap-3 pt-3 border-t border-border/40">
                            <Button variant="outline" size="sm" onClick={toggleTheme} className="w-full rounded-full h-10 gap-2">
                                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                                {theme === 'dark' ? "Light Mode" : "Dark Mode"}
                            </Button>
                            <Button variant="outline" size="sm" onClick={toggleLanguage} className="w-full rounded-full h-10">
                                {language === "en" ? "ID" : "EN"}
                            </Button>
                        </div>
                        <Button size="sm" className="w-full rounded-full h-10" asChild>
                            <a href="https://cal.com/rafapradana" target="_blank" rel="noopener noreferrer">
                                {t.nav.cta}
                            </a>
                        </Button>
                    </div>
                )}
            </nav>
        </div>
    )
}
