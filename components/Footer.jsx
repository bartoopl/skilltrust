import Link from "next/link";
import Image from "next/image";
import { FiInstagram, FiLinkedin, FiYoutube, FiMessageCircle } from "react-icons/fi";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-10">
            <div className="container mx-auto grid md:grid-cols-4 gap-8 px-6">

                {/* Logo + Kontakt */}
                <div>
                    <Image src="/logo-white.svg" alt="Logo" width={180} height={50} />
                    <p className="mt-4 text-gray-300">Skontaktuj się</p>
                    <a href="mailto:natalia@skilltrust.pl" className="block text-lg font-semibold mt-2 hover:underline">
                        natalia@skilltrust.pl
                    </a>
                    {/* Ikony Social Media */}
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="text-gray-300 hover:text-white text-2xl"><FiInstagram /></a>
                        <a href="#" className="text-gray-300 hover:text-white text-2xl"><FiLinkedin /></a>
                        <a href="#" className="text-gray-300 hover:text-white text-2xl"><FiYoutube /></a>
                        <a href="#" className="text-gray-300 hover:text-white text-2xl"><FiMessageCircle /></a>
                    </div>
                </div>

                {/* Linki dla Talentów */}
                <div>
                    <h4 className="text-lg font-semibold text-gray-400">Dla talentów</h4>
                    <ul className="mt-2 space-y-1">
                        <li><Link href="/jobs" className="hover:underline">Znajdź pracę</Link></li>
                        <li><Link href="/drop-cv" className="hover:underline">Prześlij CV</Link></li>
                    </ul>
                </div>

                {/* Linki dla Firm */}
                <div>
                    <h4 className="text-lg font-semibold text-gray-400">Dla firm</h4>
                    <ul className="mt-2 space-y-1">
                        <li><Link href="/discover-talents" className="hover:underline">Znajdź talenty</Link></li>
                        <li><Link href="/drop-requirement" className="hover:underline">Prześlij swoje wymagania</Link></li>
                    </ul>
                </div>

                {/* Linki Ogólne */}
                <div>
                    <h4 className="text-lg font-semibold text-gray-400">SkillTrust</h4>
                    <ul className="mt-2 space-y-1">
                        <li><Link href="/about" className="hover:underline">O nas</Link></li>
                        <li><Link href="/stories" className="hover:underline">Historie</Link></li>
                        <li><Link href="/privacy-policy" className="hover:underline">Polityka Prywatności</Link></li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-500 text-sm mt-8">
                Copyright ©{new Date().getFullYear()} | Skilltrust | Made with passion by creativetrust.pl

            </div>
        </footer>
    );
}