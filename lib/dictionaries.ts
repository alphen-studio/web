export type Content = {
    nav: {
        services: string
        process: string
        about: string
        contact: string
        cta: string
    }
    hero: {
        headline: string
        subheadline: string
        cta_primary: string
        cta_secondary: string
        trust_badge: string
    }
    problem: {
        heading: string
        cards: Array<{
            title: string
            description: string
        }>
        transition: string
    }
    solution: {
        heading: string
        body: string
        stat_1: string
        stat_2: string
        stat_3: string
    }
    services_section: {
        heading: string
        cards: Array<{
            title: string
            description: string
        }>
        cta: string
    }
    process_section: {
        heading: string
        steps: Array<{
            title: string
            description: string
        }>
    }
    social_proof: {
        heading: string
        testimonials: Array<{
            quote: string
            author: string
            role: string
            company: string
        }>
    }
    faq_section: {
        heading: string
        items: Array<{
            question: string
            answer: string
        }>
    }
    cta_section: {
        heading: string
        body: string
        button: string
        benefits: string[]
    }
    footer: {
        description: string
        sections: {
            company: string
            socials: string
            legal: string
        }
        links: {
            privacy: string
            terms: string
        }
        copyright: string
    }
}

export const en: Content = {
    nav: {
        services: "Services",
        process: "Process",
        about: "About",
        contact: "Contact",
        cta: "Book Strategy Call",
    },
    hero: {
        headline: "We build custom software and AI systems for businesses.",
        subheadline: "We design and build intelligent systems tailored to your business, so you can scale faster, cut costs, and outpace competitors.",
        cta_primary: "Book Free Strategy Call",
        cta_secondary: "See Our Work",
        trust_badge: "Stop Losing Money to Manual Work",
    },
    problem: {
        heading: "Sound Familiar?",
        cards: [
            {
                title: "Spreadsheet Hell",
                description: "Your team spends hours copying data between systems—and errors still slip through."
            },
            {
                title: "Hiring Nightmares",
                description: "You tried building in-house, but 6 months and 3 developers later, you're back to square one."
            },
            {
                title: "AI Paralysis",
                description: "Everyone's talking about AI, but you don't know what's hype vs. what actually works."
            },
            {
                title: "Competitor Anxiety",
                description: "Your rivals just launched an automated system. You're still using WhatsApp and Excel."
            }
        ],
        transition: "If even one of these hit home, you're not alone—and there's a faster path forward."
    },
    solution: {
        heading: "Meet Alphen Studio:\nYour Technical Co-Founder, On Demand.",
        body: "We're a lean team of engineers and AI specialists who've helped businesses replace chaos with systems that just work. We don't sell hours—we sell outcomes. From day one, you'll know exactly what you're getting, when you're getting it, and how much it costs.",
        stat_1: "Systems Built",
        stat_2: "Hours Saved",
        stat_3: "ROI Speed"
    },
    services_section: {
        heading: "What We Build",
        cards: [
            {
                title: "Custom Software",
                description: "Web apps, mobile apps, internal tools—built exactly for how your business operates, not the other way around."
            },
            {
                title: "AI & Automation",
                description: "Intelligent document processing, predictive analytics, chatbots, workflow automation—AI that solves real problems, not demos."
            },
            {
                title: "System Integration",
                description: "Connect your scattered tools into one seamless ecosystem. No more copy-paste, no more data silos."
            }
        ],
        cta: "Tell Us Your Challenge"
    },
    process_section: {
        heading: "How We Work:\nSimple, Transparent, Fast.",
        steps: [
            {
                title: "Discovery Call",
                description: "We listen to your challenge, audit your current stack, and identify quick wins. Free, no strings attached."
            },
            {
                title: "Proposal & Scope",
                description: "Within 5 business days, you receive a fixed-price proposal with clear deliverables, timeline, and milestones."
            },
            {
                title: "Build & Iterate",
                description: "We work in 2-week sprints. You see progress every step—no black box development."
            },
            {
                title: "Launch & Support",
                description: "We deploy, train your team, and stand by for 30 days post-launch to squash any bugs."
            }
        ]
    },
    social_proof: {
        heading: "Trusted by Growing Businesses",
        testimonials: [
            {
                quote: "Alphen delivered in 6 weeks what our previous vendor couldn't do in 6 months.",
                author: "Sarah J.",
                role: "CTO, LogisticsApi",
                company: "LogisticsApi"
            },
            {
                quote: "Finally, a tech partner who speaks our language—literally and figuratively.",
                author: "Budi Santoso",
                role: "Founder, RetailTech.id",
                company: "RetailTech.id"
            },
            {
                quote: "The ROI was immediate. We automated 70% of our manual data entry in the first phase.",
                author: "Michael C.",
                role: "Ops Director, FinFlow",
                company: "FinFlow"
            }
        ]
    },
    faq_section: {
        heading: "Questions? We've Got Answers.",
        items: [
            {
                question: "How much does a project cost?",
                answer: "Most projects range from $15K-$80K depending on complexity. We provide a fixed quote after the discovery call—no surprises."
            },
            {
                question: "How long does it take?",
                answer: "A typical MVP takes 4-8 weeks. Larger systems may take 3-6 months with phased delivery."
            },
            {
                question: "Do we own the code?",
                answer: "Yes, 100%. You receive full source code and documentation upon project completion."
            },
            {
                question: "What if we need changes after launch?",
                answer: "We offer ongoing support retainers, or you can engage us for discrete change requests."
            },
            {
                question: "We're not technical—will we understand the process?",
                answer: "Absolutely. We translate tech into plain language and keep you in the loop with weekly demos."
            }
        ]
    },
    cta_section: {
        heading: "Ready to Stop Guessing\nand Start Building?",
        body: "Book a free 30-minute discovery call. We'll audit your current setup, identify your biggest automation opportunities, and outline a path forward.",
        button: "Schedule My Free Discovery Call",
        benefits: [
            "No commitment required",
            "Respond within 24 hours",
            "Your data stays confidential"
        ]
    },
    footer: {
        description: "Building the future of automated business systems.",
        sections: {
            company: "Company",
            socials: "Connect",
            legal: "Legal"
        },
        links: {
            privacy: "Privacy Policy",
            terms: "Terms of Service"
        },
        copyright: "© 2024 Alphen Studio. All rights reserved."
    }
}

export const id: Content = {
    nav: {
        services: "Layanan",
        process: "Proses",
        about: "Tentang",
        contact: "Kontak",
        cta: "Konsultasi Gratis",
    },
    hero: {
        headline: "Kami membangun software dan AI untuk bisnis Anda.",
        subheadline: "Kami merancang dan membangun sistem cerdas khusus untuk bisnis Anda agar Anda bisa scale lebih cepat, pangkas biaya, dan ungguli kompetitor.",
        cta_primary: "Jadwalkan Konsultasi Gratis",
        cta_secondary: "Lihat Portfolio",
        trust_badge: "Berhenti Rugi karena Kerja Manual",
    },
    problem: {
        heading: "Terdengar Familiar?",
        cards: [
            {
                title: "Neraka Spreadsheet",
                description: "Tim Anda menghabiskan berjam-jam copy-paste data antar sistem—dan error tetap lolos."
            },
            {
                title: "Mimpi Buruk Hiring",
                description: "Anda coba bangun tim internal, tapi 6 bulan dan 3 developer kemudian, Anda kembali ke titik nol."
            },
            {
                title: "Paralisis AI",
                description: "Semua orang bicara AI, tapi Anda tidak tahu mana yang hype dan mana yang benar-benar jalan."
            },
            {
                title: "Cemas Kompetitor",
                description: "Kompetitor Anda baru saja meluncurkan sistem otomatis. Anda masih pakai WhatsApp dan Excel."
            }
        ],
        transition: "Jika salah satu saja terasa familiar, Anda tidak sendirian—dan ada jalan yang lebih cepat."
    },
    solution: {
        heading: "Kenalkan Alphen Studio:\nTechnical Co-Founder Anda, Sesuai Kebutuhan.",
        body: "Kami adalah tim kecil engineer dan spesialis AI yang telah membantu bisnis mengganti kekacauan dengan sistem yang benar-benar jalan. Kami tidak jual jam kerja—kami jual hasil. Sejak hari pertama, Anda akan tahu persis apa yang Anda dapatkan, kapan Anda mendapatkannya, dan berapa biayanya.",
        stat_1: "Sistem Dibangun",
        stat_2: "Jam Dihemat",
        stat_3: "Kecepatan ROI"
    },
    services_section: {
        heading: "Apa yang Kami Bangun",
        cards: [
            {
                title: "Software Kustom",
                description: "Aplikasi web, aplikasi mobile, internal tools—dibangun persis sesuai cara bisnis Anda beroperasi, bukan sebaliknya."
            },
            {
                title: "AI & Otomasi",
                description: "Pemrosesan dokumen cerdas, analitik prediktif, chatbot, otomasi alur kerja—AI yang menyelesaikan masalah nyata, bukan sekadar demo."
            },
            {
                title: "Integrasi Sistem",
                description: "Hubungkan tools Anda yang terpisah menjadi satu ekosistem mulus. Tidak ada lagi copy-paste, tidak ada lagi data silo."
            },
        ],
        cta: "Ceritakan Tantangan Anda"
    },
    process_section: {
        heading: "Cara Kami Bekerja:\nSimpel, Transparan, Cepat.",
        steps: [
            {
                title: "Discovery Call",
                description: "Kami dengarkan tantangan Anda, audit stack saat ini, dan identifikasi quick wins. Gratis, tanpa kewajiban."
            },
            {
                title: "Proposal & Scope",
                description: "Dalam 5 hari kerja, Anda terima proposal fixed-price dengan deliverable, timeline, dan milestone yang jelas."
            },
            {
                title: "Build & Iterate",
                description: "Kami bekerja dalam sprint 2 mingguan. Anda lihat progres di setiap langkah—tidak ada pengembangan black box."
            },
            {
                title: "Launch & Support",
                description: "Kami deploy, training tim Anda, dan standby 30 hari pasca-launch untuk perbaiki bug."
            }
        ]
    },
    social_proof: {
        heading: "Dipercaya oleh Bisnis yang Berkembang",
        testimonials: [
            {
                quote: "Alphen menyelesaikan dalam 6 minggu apa yang vendor sebelumnya tidak bisa lakukan dalam 6 bulan.",
                author: "Sarah J.",
                role: "CTO, LogisticsApi",
                company: "LogisticsApi"
            },
            {
                quote: "Akhirnya, partner teknis yang mengerti bahasa kami—secara harfiah dan kiasan.",
                author: "Budi Santoso",
                role: "Founder, RetailTech.id",
                company: "RetailTech.id"
            },
            {
                quote: "ROI-nya instan. Kami mengotomatiskan 70% data entry manual kami di fase pertama.",
                author: "Michael C.",
                role: "Ops Director, FinFlow",
                company: "FinFlow"
            }
        ]
    },
    faq_section: {
        heading: "Ada Pertanyaan? Kami Punya Jawabannya.",
        items: [
            {
                question: "Berapa biaya proyek?",
                answer: "Kebanyakan proyek berkisar $15K-$80K tergantung kompleksitas. Kami berikan penawaran tetap setelah discovery call—tanpa kejutan."
            },
            {
                question: "Berapa lama pengerjaannya?",
                answer: "MVP tipikal memakan waktu 4-8 minggu. Sistem lebih besar bisa 3-6 bulan dengan pengiriman bertahap."
            },
            {
                question: "Apakah kami memiliki kodenya?",
                answer: "Ya, 100%. Anda terima source code lengkap dan dokumentasi saat proyek selesai."
            },
            {
                question: "Bagaimana jika kami butuh perubahan setelah launch?",
                answer: "Kami menawarkan retainer dukungan berkelanjutan, atau Anda bisa engage kami untuk permintaan perubahan diskrit."
            },
            {
                question: "Kami tidak teknis—apakah kami akan mengerti prosesnya?",
                answer: "Tentu. Kami menerjemahkan hal teknis ke bahasa sederhana dan update Anda dengan demo mingguan."
            }
        ]
    },
    cta_section: {
        heading: "Siap Berhenti Menebak\ndan Mulai Membangun?",
        body: "Jadwalkan discovery call gratis 30 menit. Kami akan audit setup Anda saat ini, identifikasi peluang otomasi terbesar, dan gambarkan langkah selanjutnya.",
        button: "Jadwalkan Discovery Call Saya",
        benefits: [
            "Tanpa komitmen",
            "Respon dalam 24 jam",
            "Data Anda tetap rahasia"
        ]
    },
    footer: {
        description: "Membangun masa depan sistem bisnis otomatis.",
        sections: {
            company: "Perusahaan",
            socials: "Hubungi",
            legal: "Legal"
        },
        links: {
            privacy: "Kebijakan Privasi",
            terms: "Syarat & Ketentuan"
        },
        copyright: "© 2024 Alphen Studio. Hak cipta dilindungi."
    }
}

export const dictionaries = { en, id }
