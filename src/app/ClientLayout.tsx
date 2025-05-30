'use client';

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { usePathname } from "next/navigation";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // Determine if the current path requires no sidebar
    const isAuthPage = pathname === "/auth/signin";

    if (isAuthPage) {
        return (
            <main style={{ minHeight: '80vh' }}>
                <div className="p-5">{children}</div>
            </main>
        );
    }

    // Render with the sidebar for all other pages
    return (
        <>
            <main style={{ minHeight: '80vh' }}>
                <Header />
                {children}
                <Footer />
            </main>
        </>
    );
}