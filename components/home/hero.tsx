"use client"

import { useI18n } from "@/components/i18n-provider"
import { Button } from "@/components/ui/button"
import { ArrowRight, Terminal } from "lucide-react"

export function Hero() {
    const { t } = useI18n()

    return (
        <section className="relative px-4 min-h-screen pt-20 flex items-center justify-center overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 -z-10 bg-background">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[128px] animate-pulse delay-700" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-foreground/5 rounded-full blur-[128px] animate-pulse" />
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            <div className="container mx-auto max-w-5xl text-center relative z-10 py-12">

                {/* Trust Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold tracking-wider uppercase mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500 hover:bg-secondary/80 transition-colors cursor-default">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    {t.hero.trust_badge}
                </div>

                {/* Headline */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-foreground mb-6 leading-[1.1] md:leading-[1.1] whitespace-pre-line animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                    {t.hero.headline}
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                    {t.hero.subheadline}
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                    <Button size="lg" className="h-12 px-8 text-base rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105" asChild>
                        <a href="https://cal.com/rafapradana" target="_blank" rel="noopener noreferrer">
                            {t.hero.cta_primary}
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                    </Button>
                    <Button size="lg" variant="outline" className="h-12 px-8 text-base rounded-full hover:bg-secondary/50 transition-all">
                        {t.hero.cta_secondary}
                    </Button>
                </div>

            </div>
        </section>
    )
}
