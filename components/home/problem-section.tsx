"use client"

import { useI18n } from "@/components/i18n-provider"
import { FileSpreadsheet, Users, BrainCircuit, TrendingUp } from "lucide-react"

export function ProblemSection() {
    const { t } = useI18n()

    const icons = [FileSpreadsheet, Users, BrainCircuit, TrendingUp]

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 view-timeline-name:--section-header">
                        {t.problem.heading}
                    </h2>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                    {t.problem.cards.map((card, index) => {
                        const Icon = icons[index]
                        return (
                            <div
                                key={index}
                                className="group relative p-8 rounded-3xl bg-muted/20 border border-border/50 hover:bg-muted/40 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:shadow-primary/5 flex flex-col md:flex-row gap-6 items-start"
                            >
                                <div className="shrink-0 p-4 rounded-2xl bg-background border border-border/50 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                                    <Icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium mb-3 text-foreground group-hover:text-primary transition-colors">
                                        {card.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Transition Line */}
                <div className="mt-16 text-center">
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto italic border-l-2 border-primary/50 pl-6 md:border-l-0 md:border-t-0 py-2">
                        &ldquo;{t.problem.transition}&rdquo;
                    </p>
                </div>

            </div>
        </section>
    )
}
