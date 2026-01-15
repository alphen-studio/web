"use client"

import * as React from "react"
import { useI18n } from "@/components/i18n-provider"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

export function FaqSection() {
    const { t } = useI18n()
    const [openIndex, setOpenIndex] = React.useState<number | null>(0)

    return (
        <section className="py-24 bg-background relative" id="faq">
            <div className="container mx-auto px-4 max-w-3xl">

                {/* Section Header */}
                <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-6 duration-700 view-timeline-name:--section-header">
                    <h2 className="text-3xl md:text-5xl font-medium tracking-tight whitespace-pre-line leading-tight">
                        {t.faq_section.heading}
                    </h2>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {t.faq_section.items.map((item, index) => {
                        const isOpen = openIndex === index

                        return (
                            <div
                                key={index}
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                className={cn(
                                    "group cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden",
                                    isOpen
                                        ? "bg-muted/30 border-primary/50 shadow-lg shadow-primary/5"
                                        : "bg-background border-border/50 hover:bg-muted/20"
                                )}
                            >
                                <div className="p-6 flex items-center justify-between gap-4">
                                    <h3 className={cn(
                                        "text-lg font-medium transition-colors duration-300",
                                        isOpen ? "text-primary" : "text-foreground"
                                    )}>
                                        {item.question}
                                    </h3>
                                    <div className={cn(
                                        "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
                                        isOpen ? "bg-primary text-primary-foreground rotate-180" : "bg-muted text-muted-foreground group-hover:bg-muted/80"
                                    )}>
                                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                    </div>
                                </div>

                                <div
                                    className={cn(
                                        "px-6 overflow-hidden transition-all duration-300 ease-in-out",
                                        isOpen ? "max-h-48 pb-6 opacity-100" : "max-h-0 pb-0 opacity-0"
                                    )}
                                >
                                    <p className="text-muted-foreground leading-relaxed">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}
