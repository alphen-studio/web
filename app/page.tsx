import { I18nProvider } from "@/components/i18n-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { ProblemSection } from "@/components/home/problem-section";
import { SolutionSection } from "@/components/home/solution-section";
import { ServicesSection } from "@/components/home/services-section";
import { ProcessSection } from "@/components/home/process-section";
import { SocialProofSection } from "@/components/home/social-proof-section";
import { FaqSection } from "@/components/home/faq-section";
import { CtaSection } from "@/components/home/cta-section";

export default function Page() {
    return (
        <I18nProvider>
            <div className="min-h-screen font-sans selection:bg-foreground selection:text-background flex flex-col">
                <Navbar />
                <main className="flex-grow">
                    <Hero />
                    <ProblemSection />
                    <SolutionSection />
                    <ServicesSection />
                    <ProcessSection />
                    <FaqSection />
                    <CtaSection />
                </main>
                <Footer />
            </div>
        </I18nProvider>
    );
}