"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <main className="container mx-auto p-6">{children}</main>
            <Footer />
        </>
    );
}