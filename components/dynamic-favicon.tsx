"use client"

import { useEffect } from "react"

export function DynamicFavicon() {
    useEffect(() => {
        const updateFavicon = (e: MediaQueryListEvent | MediaQueryList) => {
            const isDark = e.matches
            const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement || document.createElement('link');
            link.type = 'image/svg+xml';
            link.rel = 'icon';

            if (!document.head.contains(link)) {
                document.head.appendChild(link);
            }

            // If browser/system is dark, use white logo (for visibility). 
            // If browser/system is light, use black logo.
            if (isDark) {
                link.href = '/logos/alphen-logo-white.svg';
            } else {
                link.href = '/logos/alphen-logo-black.svg';
            }
        }

        const matcher = window.matchMedia('(prefers-color-scheme: dark)')

        // Initial check
        updateFavicon(matcher)

        // Listener for changes
        matcher.addEventListener('change', updateFavicon)

        return () => matcher.removeEventListener('change', updateFavicon)
    }, [])

    return null
}
