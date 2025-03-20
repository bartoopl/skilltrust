"use client";
import { useState, ChangeEvent, FormEvent } from "react";

export default function BezplatnaKonsultacja() {
    const [formData, setFormData] = useState({
        companyName: "",
        fullName: "",
        email: "",
        phone: "",
        industry: "",
        message: "",
        consent: false,
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target as HTMLInputElement;

        if (type === "checkbox") {
            setFormData((prev) => ({
                ...prev,
                [name]: (e.target as HTMLInputElement).checked,
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Sprawdzamy czy zaznaczono zgodę
        if (!formData.consent) {
            alert("Aby wysłać formularz, musisz wyrazić zgodę na przetwarzanie danych osobowych.");
            return;
        }

        // Tutaj można dodać kod do wysyłki formularza do backend'u
        // np. poprzez API
        try {
            // Symulacja wysyłki
            console.log("Wysyłanie danych:", formData);

            // W docelowej implementacji tutaj byłoby wywołanie API
            // const response = await fetch("/api/send-consultation", {
            //     method: "POST",
            //     headers: { "Content-Type": "application/json" },
            //     body: JSON.stringify(formData),
            // });

            // Symulacja sukcesu
            alert("Dziękujemy za Twoje zgłoszenie! Skontaktujemy się wkrótce.");

            // Resetowanie formularza po wysłaniu
            setFormData({
                companyName: "",
                fullName: "",
                email: "",
                phone: "",
                industry: "",
                message: "",
                consent: false,
            });
        } catch (error) {
            console.error("Błąd wysyłki:", error);
            alert("Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie później.");
        }
    };

    return (
        <main className="bg-[#F9F6F2] min-h-screen py-16">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
                    Bezpłatna konsultacja
                </h1>

                <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12">
                    Zostaw swoje dane, a nasz ekspert skontaktuje się z Tobą, aby omówić
                    potrzeby rekrutacyjne Twojej firmy i zaproponować najlepsze rozwiązania.
                </p>

                <div className="bg-white rounded-3xl border-2 border-black p-8 max-w-3xl mx-auto shadow-sm">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="companyName" className="block text-gray-700 font-medium mb-2">
                                    Nazwa firmy*
                                </label>
                                <input
                                    type="text"
                                    id="companyName"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-black rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                />
                            </div>

                            <div>
                                <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
                                    Imię i nazwisko*
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-black rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                    Email*
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-black rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                                    Telefon
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full border border-black rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="industry" className="block text-gray-700 font-medium mb-2">
                                Branża*
                            </label>
                            <select
                                id="industry"
                                name="industry"
                                value={formData.industry}
                                onChange={handleChange}
                                required
                                className="w-full border border-black rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
                            >
                                <option value="">Wybierz branżę</option>
                                <option value="IT">IT</option>
                                <option value="Produkcja">Produkcja</option>
                                <option value="Automotive">Automotive</option>
                                <option value="Inne">Inne</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                                Wiadomość*
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="w-full border border-black rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                placeholder="Opisz swoje potrzeby rekrutacyjne..."
                            ></textarea>
                        </div>

                        <div className="flex items-start">
                            <input
                                type="checkbox"
                                id="consent"
                                name="consent"
                                checked={formData.consent}
                                onChange={handleChange}
                                required
                                className="mt-1 mr-2"
                            />
                            <label htmlFor="consent" className="text-gray-700 text-sm">
                                Wyrażam zgodę na przetwarzanie moich danych osobowych w celu odpowiedzi na moje zapytanie oraz kontaktu
                                w sprawie usług rekrutacyjnych zgodnie z polityką prywatności.*
                            </label>
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-black text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors"
                            >
                                Wyślij zapytanie
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}