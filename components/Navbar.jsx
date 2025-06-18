"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiChevronDown, FiChevronRight } from "react-icons/fi";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(null);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
        if (!isOpen) {
            setOpenSubmenu(null);
        }
    };

    const toggleSubmenu = (submenuName) => {
        setOpenSubmenu(openSubmenu === submenuName ? null : submenuName);
    };

    const menuItems = [
        {
            name: "Rekrutacja specjalistyczna",
            path: null,
            submenu: [
                { name: "Dla firm", path: "/dla-firm" },
                { name: "Dla kandydatów", path: "/dla-kandydatow" }
            ]
        },
        {
            name: "Reiss Motivational Profile",
            path: null,
            submenu: [
                { name: "RMP w rekrutacji", path: "/rmp-rekrutacja" },
                { name: "RMP w zarządzaniu", path: "/rmp-zarzadzanie" },
                { name: "Sesje indywidualne", path: "/sesje-indywidualne" }
            ]
        },
        { name: "O nas", path: "/o-nas" },
        { name: "Kontakt", path: "/kontakt" },
        { name: "Umów bezpłatną konsultację", path: "/bezplatna-konsultacja" }
    ];

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
                            href="/wycena"
                            className="border border-black px-2 py-1 md:px-4 md:py-2 text-xs md:text-base rounded-full text-black hover:bg-gray-100"
                        >
                            Wyceń rekrutację
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
                            <div className="space-y-4 text-xl md:text-2xl font-bold w-full max-w-md">
                                {menuItems.map((item, index) => (
                                    <div key={index}>
                                        {item.submenu ? (
                                            <div>
                                                <button
                                                    onClick={() => toggleSubmenu(item.name)}
                                                    className="flex items-center justify-between w-full text-left hover:text-gray-600 transition-colors"
                                                >
                                                    {item.name}
                                                    {openSubmenu === item.name ? <FiChevronDown /> : <FiChevronRight />}
                                                </button>
                                                <AnimatePresence>
                                                    {openSubmenu === item.name && (
                                                        <motion.div
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: "auto" }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            className="ml-4 mt-2 space-y-2 text-lg"
                                                        >
                                                            {item.submenu.map((subItem, subIndex) => (
                                                                <Link
                                                                    key={subIndex}
                                                                    href={subItem.path}
                                                                    onClick={toggleMenu}
                                                                    className="block hover:text-gray-600 transition-colors"
                                                                >
                                                                    {subItem.name}
                                                                </Link>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ) : (
                                            <motion.div
                                                whileHover={{ x: 10 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                <Link href={item.path} onClick={toggleMenu}>
                                                    {item.name}
                                                </Link>
                                            </motion.div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
}