"use client";  // ← TO JEST KLUCZOWE!

export default function Button({ children, onClick, variant = "primary" }) {
    const baseClass = "px-4 py-2 rounded-md font-semibold transition duration-300";
    const variantClass =
        variant === "primary" ? "bg-blue-600 text-white hover:bg-blue-700" :
            "bg-gray-600 text-white hover:bg-gray-700";

    return (
        <button onClick={onClick} className={`${baseClass} ${variantClass}`}>
            {children}
        </button>
    );
}