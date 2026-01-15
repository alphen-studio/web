"use client"

import * as React from "react"
import Image from "next/image"
import { useI18n } from "@/components/i18n-provider"
import { useTheme } from "next-themes"
import { Github, Linkedin, Twitter, Instagram } from "lucide-react"

export function Footer() {
    const { t } = useI18n()
    const { theme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    // Wait for hydration
    React.useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <footer className="bg-background text-muted-foreground border-t border-border/50"> {/* Changed bg-muted to bg-background */}
            <div className="container mx-auto px-4 py-16">

                {/* Main Footer Content - Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

                    {/* Brand Column (Span 4) */}
                    <div className="md:col-span-5">
                        <div className="flex items-center gap-2 mb-4">
                            {mounted ? (
                                <Image
                                    src={theme === 'dark' ? '/logos/alphen-logo-white.svg' : '/logos/alphen-logo-black.svg'}
                                    alt="Alphen Studio"
                                    width={32}
                                    height={32}
                                    className="w-8 h-8 object-contain"
                                />
                            ) : (
                                <div className="w-8 h-8" />
                            )}
                            <h3 className="text-foreground text-xl font-medium tracking-tight">
                                Alphen Studio
                            </h3>
                        </div>

                        <p className="max-w-xs leading-relaxed">
                            {t.footer.description}
                        </p>
                    </div>

                    {/* Links Column 1: Company */}
                    <div className="md:col-span-2">
                        <h4 className="text-foreground font-semibold mb-6">{t.footer.sections.company}</h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="#services" className="hover:text-primary transition-colors">{t.nav.services}</a>
                            </li>
                            <li>
                                <a href="#process" className="hover:text-primary transition-colors">{t.nav.process}</a>
                            </li>
                            <li>
                                <a href="#about" className="hover:text-primary transition-colors">{t.nav.about}</a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-primary transition-colors">{t.nav.contact}</a>
                            </li>
                        </ul>
                    </div>

                    {/* Links Column 2: Socials */}
                    <div className="md:col-span-2">
                        <h4 className="text-foreground font-semibold mb-6">{t.footer.sections.socials}</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-2">
                                <Linkedin className="w-4 h-4" />
                                <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Twitter className="w-4 h-4" />
                                <a href="#" className="hover:text-primary transition-colors">Twitter</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Instagram className="w-4 h-4" />
                                <a href="#" className="hover:text-primary transition-colors">Instagram</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Github className="w-4 h-4" />
                                <a href="#" className="hover:text-primary transition-colors">GitHub</a>
                            </li>
                        </ul>
                    </div>

                    {/* Links Column 3: Legal */}
                    <div className="md:col-span-3">
                        <h4 className="text-foreground font-semibold mb-6">{t.footer.sections.legal}</h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">{t.footer.links.privacy}</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">{t.footer.links.terms}</a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Footer Bottom Bar */}
                <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <p>{t.footer.copyright}</p>
                    <div className="flex items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
                        <span>Designed & Built by</span>
                        <span className="font-semibold text-foreground">Alphen Studio</span>
                    </div>
                </div>

            </div>
        </footer>
    )
}
