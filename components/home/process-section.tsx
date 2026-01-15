"use client"

import { useI18n } from "@/components/i18n-provider"
import { PhoneCall, FileText, Code, Rocket } from "lucide-react"

export function ProcessSection() {
    const { t } = useI18n()

    const icons = [PhoneCall, FileText, Code, Rocket]

    return (
        <section className="py-24 bg-background relative overflow-hidden" id="process">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 hidden md:block opacity-30" />

            <div className="container mx-auto px-4 max-w-6xl relative z-10">

                {/* Section Header */}
                <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-6 duration-700 view-timeline-name:--section-header">
                    <h2 className="text-3xl md:text-5xl font-medium tracking-tight whitespace-pre-line leading-tight">
                        {t.process_section.heading}
                    </h2>
                </div>

                {/* Process Steps */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {t.process_section.steps.map((step, index) => {
                        const Icon = icons[index]
                        const stepNumber = index + 1
                        return (
                            <div
                                key={index}
                                className="group relative pt-8 md:pt-12"
                            >
                                {/* Timeline Node (Desktop) */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-background border-4 border-muted hidden md:block z-20 group-hover:border-primary transition-colors duration-500" />

                                {/* Card */}
                                <div className="bg-muted/30 border border-border/50 rounded-2xl p-6 h-full hover:bg-muted/50 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">

                                    {/* Number Watermark */}
                                    <div className="absolute -right-4 -top-4 text-9xl font-bold text-foreground/5 select-none pointer-events-none group-hover:text-primary/5 transition-colors duration-500">
                                        {stepNumber}
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center mb-4 text-foreground group-hover:text-primary group-hover:border-primary/50 transition-colors duration-300 shadow-sm">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-lg font-bold mb-3">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Bottom Gradient Bar */}
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}
