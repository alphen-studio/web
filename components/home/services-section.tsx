"use client"

import { useI18n } from "@/components/i18n-provider"
import { Braces, BrainCircuit, Puzzle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ServicesSection() {
  const { t } = useI18n()
  
  const icons = [Braces, BrainCircuit, Puzzle]

  return (
    <section className="py-32 relative overflow-hidden" id="services">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse delay-700" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700">
            {t.services_section.heading}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.services_section.cards.map((card, index) => {
             const Icon = icons[index]
             return (
              <div 
                key={index} 
                className={cn(
                    "group relative p-8 rounded-3xl transition-all duration-500 flex flex-col items-start h-full",
                    "glass-card hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10", // Using new glass-card utility
                    "border border-white/5 dark:border-white/5" 
                )}
              > 
                {/* Gradient Border Gradient on Hover (Pseudo-element approach could be better but sticking to simple Tailwind) */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Icon with Glow */}
                <div className="mb-8 p-4 rounded-2xl bg-muted/50 text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500 relative overflow-hidden shadow-inner">
                    <Icon className="w-8 h-8 relative z-10" strokeWidth={1.5} />
                </div>

                <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
                    {card.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                    {card.description}
                </p>
                
                {/* Subtle Arrow Interaction */}
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all duration-300 transform group-hover:rotate-45">
                    <ArrowRight className="w-4 h-4" />
                </div>
              </div>
             )
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 flex justify-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
             <Button size="lg" className="h-14 px-8 text-base rounded-full shadow-lg hover:shadow-primary/25 transition-all hover:scale-105">
                <a href="https://cal.com/rafapradana" target="_blank" rel="noopener noreferrer">
                {t.services_section.cta}
                </a>
                <ArrowRight className="w-4 h-4 ml-2" />
             </Button>
        </div>

      </div>
    </section>
  )
}
