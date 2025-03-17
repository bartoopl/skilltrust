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
        <nav className="bg-white shadow-md py-6 fixed top-0 left-0 w-full z-50">
            <div className="container mx-auto flex items-center justify-between px-6">
                {/* Logo po lewej */}
                <div className="flex-shrink-0">
                    <Link href="/">
                        <Image src="/logo.svg" alt="Logo" width={170} height={40} />
                    </Link>
                </div>
                {/* Przyciski na środku */}
                <div className="flex-grow flex justify-center space-x-6">
                    <Link
                        href="/jobs"
                        className="border border-black px-4 py-2 rounded-full text-black hover:bg-gray-100"
                    >
                        Discover Jobs
                    </Link>
                    <Link
                        href="/talents"
                        className="border border-black px-4 py-2 rounded-full text-black hover:bg-gray-100"
                    >
                        Discover Talents
                    </Link>
                </div>
                {/* Hamburger po prawej */}
                <div className="flex-shrink-0">
                    <button onClick={toggleMenu} className="text-black text-2xl">
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
                        className="fixed inset-0 bg-[#F9F6F2] text-black p-8 flex flex-col items-center justify-center"
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
                            width={150}
                            height={150}
                            className="mb-6"
                        />
                        <div className="space-y-4 text-2xl font-bold">
                            {[
                                { name: "Discover Jobs", path: "/jobs" },
                                { name: "Discover Talents", path: "/talents" },
                                { name: "Job Board", path: "/job-board" },
                                { name: "CV/Portfolio Drop", path: "/drop-cv" },
                                { name: "Requirement Drop", path: "/drop-requirement" },
                                { name: "Stories", path: "/stories" },
                                { name: "About Us", path: "/about" },
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
    );
}