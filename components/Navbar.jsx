"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <>
            {/* Dodajemy element, który będzie zajmował tyle samo miejsca co navbar, aby treść pod nim była widoczna */}
            <div className="h-24"></div>

            <nav className="bg-white shadow-md py-4 md:py-6 fixed top-0 left-0 w-full z-50">
                <div className="container mx-auto flex items-center justify-between px-4">
                    {/* Logo po lewej */}
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <Image src="/logo.svg" alt="Logo" width={120} height={30} className="w-auto h-8 md:h-10" />
                        </Link>
                    </div>
                    {/* Przyciski na środku - mniejsze na mobilnych, oryginalne na desktop */}
                    <div className="flex flex-grow justify-center space-x-2 md:space-x-6">
                        <Link
                            href="/jobs"
                            className="border border-black px-2 py-1 md:px-4 md:py-2 text-xs md:text-base rounded-full text-black hover:bg-gray-100"
                        >
                            Znajdź pracę
                        </Link>
                        <Link
                            href="/talents"
                            className="border border-black px-2 py-1 md:px-4 md:py-2 text-xs md:text-base rounded-full text-black hover:bg-gray-100"
                        >
                            Znajdź talenty
                        </Link>
                    </div>
                    {/* Hamburger po prawej */}
                    <div className="flex-shrink-0">
                        <button onClick={toggleMenu} className="text-black text-xl p-2">
                            {isOpen ? <FiX /> : <FiMenu />}
                        </button>
                    </div>
                </div>

                {/* Menu mobilne/uniwersalne */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="fixed inset-0 bg-[#F9F6F2] text-black p-8 flex flex-col items-center justify-center z-50"
                        >
                            <button
                                className="absolute top-6 right-6 text-3xl"
                                onClick={toggleMenu}
                            >
                                <FiX />
                            </button>
                            {/* Opcjonalny element graficzny */}
                            <Image
                                src="/menu-graphic.svg"
                                alt="Menu Graphic"
                                width={120}
                                height={120}
                                className="mb-6"
                            />
                            <div className="space-y-4 text-xl md:text-2xl font-bold">
                                {[
                                    { name: "Znajdź pracę", path: "/jobs" },
                                    { name: "Znajdź tralenty", path: "/talents" },
                                    { name: "Prześlij CV", path: "/drop-cv" },
                                    { name: "Prześlij swoje wymagania", path: "/drop-requirement" },
                                    { name: "Historie", path: "/stories" },
                                    { name: "O nas", path: "/about" },
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ x: 10 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <Link href={item.path} onClick={toggleMenu}>
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
}