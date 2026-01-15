"use client"

import { useI18n } from "@/components/i18n-provider"
import { Quote } from "lucide-react"

export function SocialProofSection() {
    const { t } = useI18n()

    // Placeholder logos (using text/shapes for "dope" look since no assets)
    const logos = [
        { name: "Acme Corp", color: "bg-red-500" },
        { name: "GlobalTech", color: "bg-blue-500" },
        { name: "Nebula", color: "bg-purple-500" },
        { name: "FoxHub", color: "bg-orange-500" },
        { name: "Circle K", color: "bg-emerald-500" },
        { name: "Trev", color: "bg-indigo-500" },
    ]

    return (
        <section className="py-24 bg-muted/50 relative overflow-hidden" id="testimonials">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Section Header */}
                <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-6 duration-700 view-timeline-name:--section-header">
                    <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-8">
                        {t.social_proof.heading}
                    </h2>

                    {/* Logo Cloud (Marquee Effect Simulation) */}
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 mb-20">
                        {logos.map((logo, index) => (
                            <div key={index} className="flex items-center gap-2 group cursor-default">
                                <div className={`w-8 h-8 rounded-full ${logo.color} opacity-80 group-hover:scale-110 transition-transform`} />
                                <span className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-color">{logo.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {t.social_proof.testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-background p-8 rounded-3xl border border-border/50 shadow-sm relative group hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-8 right-8 text-muted/30 group-hover:text-primary/10 transition-colors duration-300">
                                <Quote className="w-10 h-10 fill-current" />
                            </div>

                            <p className="text-lg leading-relaxed mb-8 relative z-10 text-muted-foreground">
                                &ldquo;{item.quote}&rdquo;
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-muted to-border flex items-center justify-center font-bold text-muted-foreground">
                                    {item.author.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-semibold text-foreground">{item.author}</div>
                                    <div className="text-sm text-muted-foreground">{item.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
