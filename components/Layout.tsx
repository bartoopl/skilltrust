"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <main className="pt-20 md:pt-24">{children}</main>
            <Footer />
        </>
    );
}