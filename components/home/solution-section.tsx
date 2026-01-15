"use client"

import { useI18n } from "@/components/i18n-provider"

export function SolutionSection() {
    const { t } = useI18n()

    return (
        <section className="py-20 md:py-24 bg-background relative overflow-hidden" id="about">
            {/* Subtle Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px]" />

            <div className="container mx-auto px-4 max-w-3xl text-center">

                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight leading-snug">
                        {t.solution.heading}
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
                        {t.solution.body}
                    </p>
                </div>

            </div>
        </section>
    )
}
