'use client';

import * as React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { usePathname } from "next/navigation";
import { useAppContext } from "@/context/AppContext";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { lightTheme, darkTheme } from "@/themes/defaultTheme";
import Preloader from "@/components/Preloader";
import { GlobalStyle } from "@/styles/GlobalStyles";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const { mode } = useAppContext();
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    // Determine theme
    let appliedTheme = lightTheme;
    if (mode === 'dark') appliedTheme = darkTheme;
    if (mode === 'system' && typeof window !== 'undefined') {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        appliedTheme = isDark ? darkTheme : lightTheme;
    }

    const isAuthPage = pathname === "/auth/signin";

    return (
        <ThemeProvider theme={appliedTheme}>
            <CssBaseline />
            <GlobalStyle theme={appliedTheme} />
            {loading ? (
                <Preloader />
            ) : isAuthPage ? (
                <main style={{ minHeight: '80vh' }}>
                    <div className="p-5">{children}</div>
                </main>
            ) : (
                <main style={{ minHeight: '80vh' }}>
                    <Header />
                    {children}
                    <Footer />
                </main>
            )}
        </ThemeProvider>
    );
}
