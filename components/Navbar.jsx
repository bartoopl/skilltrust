"use client";
import Link from "next/link";
import { FiMenu } from "react-icons/fi"; // Ikona menu hamburgerowego

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md py-4">
            <div className="container mx-auto flex justify-between items-center px-4">

                {/* Logo */}
                <Link href="/">
                    <img src="/logo.svg" alt="Logo" className="h-16 w-auto" />
                </Link>

                {/* Przyciski */}
                <div className="hidden md:flex space-x-4">
                    <Link href="/jobs" className="border border-black px-4 py-2 rounded-full text-black hover:bg-gray-100">
                        Znajdź pracę
                    </Link>
                    <Link href="/talents" className="border border-black px-4 py-2 rounded-full text-black hover:bg-gray-100">
                        Znajdź pracownika
                    </Link>
                </div>

                {/* Ikona menu */}
                <button className="md:hidden text-black text-2xl">
                    <FiMenu />
                </button>
            </div>
        </nav>
    );
}