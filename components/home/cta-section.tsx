"use client"

import { useEffect } from "react"
import { useI18n } from "@/components/i18n-provider"
import { CheckCircle2 } from "lucide-react"
import Cal, { getCalApi } from "@calcom/embed-react"

export function CtaSection() {
    const { t } = useI18n()

    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ namespace: "30min" })
            cal("ui", { hideEventTypeDetails: false, layout: "month_view" })
        })()
    }, [])

    return (
        <section className="py-24 relative overflow-hidden" id="contact">

            {/* Background with Gradient Mesh */}
            <div className="absolute inset-0 bg-primary/5 -z-20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse" />

            <div className="container mx-auto px-4 max-w-5xl relative z-10">

                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
                        {t.cta_section.heading}
                    </h2>

                    <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                        {t.cta_section.body}
                    </p>
                </div>

                {/* Cal.com Inline Embed */}
                <div className="w-full rounded-2xl overflow-hidden border border-border/50 bg-background/50 backdrop-blur-sm shadow-2xl animate-in fade-in zoom-in-95 duration-700 delay-200">
                    <Cal
                        namespace="30min"
                        calLink="rafapradana/30min"
                        style={{ width: "100%", height: "600px", overflow: "hidden" }}
                        config={{ layout: "month_view" }}
                    />
                </div>

                {/* Benefits/Trust Badges */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-sm font-medium text-muted-foreground mt-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                    {t.cta_section.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                            <span>{benefit}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
