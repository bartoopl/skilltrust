export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-6 mt-10">
            <div className="container mx-auto text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} SkillTrust. Wszelkie prawa zastrzeżone.</p>
            </div>
        </footer>
    );
}