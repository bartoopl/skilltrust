"use client";
import { useState, ChangeEvent, FormEvent } from "react";

export default function DropCV() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        jobTitle: "",
        linkedin: "",
        jobType: [] as string[],
        officePolicy: [] as string[],
        message: "",
        file: null as File | null,
        consent1: false, // Zgoda na przetwarzanie danych w obecnej rekrutacji
        consent2: false, // Zgoda na przetwarzanie danych w przyszłych rekrutacjach
    });

    const [showConsentDetails, setShowConsentDetails] = useState(false);

    // Dodajemy typ dla zdarzenia zmiany w formularzu
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, value, type, checked} = e.target as HTMLInputElement;

        if (type === "checkbox") {
            if (name === "consent1" || name === "consent2") {
                setFormData((prev) => ({
                    ...prev,
                    [name]: checked,
                }));
            } else {
                setFormData((prev) => ({
                    ...prev,
                    [name]: checked
                        ? [...prev[name as keyof typeof prev] as string[], value]
                        : (prev[name as keyof typeof prev] as string[]).filter((v) => v !== value),
                }));
            }
        } else if (type === "file") {
            const {files} = e.target as HTMLInputElement;
            if (files && files.length > 0) {
                setFormData((prev) => {
                    return ({
                        ...prev,
                        file: files[0], // Plik zostanie zapisany tylko jeśli istnieje
                    });
                });
            } else {
                setFormData((prev) => ({
                    ...prev,
                    file: null, // Jeśli brak pliku, ustawiamy `null`
                }));
            }
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    // Dodajemy typ dla zdarzenia submit
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Sprawdzamy czy zaznaczono wymagane zgody
        if (!formData.consent1) {
            alert("Aby wysłać CV, musisz wyrazić zgodę na przetwarzanie danych osobowych w obecnym procesie rekrutacji.");
            return;
        }

        const formDataToSend = new FormData();
        formDataToSend.append("firstName", formData.firstName);
        formDataToSend.append("lastName", formData.lastName);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("jobTitle", formData.jobTitle);
        formDataToSend.append("linkedin", formData.linkedin);
        formDataToSend.append("jobType", formData.jobType.join(", "));
        formDataToSend.append("officePolicy", formData.officePolicy.join(", "));
        formDataToSend.append("message", formData.message);
        formDataToSend.append("consent1", formData.consent1.toString());
        formDataToSend.append("consent2", formData.consent2.toString());
        if (formData.file) {
            formDataToSend.append("file", formData.file);
        }

        try {
            const response = await fetch("/api/send-cv", {
                method: "POST",
                body: formDataToSend,
            });

            if (response.ok) {
                alert("Wysłano CV!");
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    jobTitle: "",
                    linkedin: "",
                    jobType: [],
                    officePolicy: [],
                    message: "",
                    file: null,
                    consent1: false,
                    consent2: false,
                });
            } else {
                alert("Błąd wysyłki!");
            }
        } catch (error) {
            console.error("Błąd:", error);
            alert("Coś poszło nie tak.");
        }
    };

    // Funkcja do otwierania popupu z klauzulą
    const toggleConsentDetails = () => {
        setShowConsentDetails(!showConsentDetails);
    };

    return (
        <main className="bg-[#F9F6F2] text-black min-h-screen flex flex-col items-center py-16">
            <h1 className="text-5xl font-bold mb-4">Prześlij swoje CV</h1>
            <p className="text-lg text-gray-700 text-center max-w-2xl">
                Wiemy, jak ważne jest znalezienie odpowiedniej pracy w preferowanej firmie.
                Wyślij nam swoje CV / portfolio, a my znajdziemy dla Ciebie odpowiednią pracę.
            </p>

            {/* Formularz */}
            <form onSubmit={handleSubmit} className="mt-10 w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" name="firstName" placeholder="Imię*" required value={formData.firstName} onChange={handleChange} className="border border-black p-3 rounded-full w-full" />
                    <input type="text" name="lastName" placeholder="Nazwisko*" required value={formData.lastName} onChange={handleChange} className="border border-black p-3 rounded-full w-full" />
                    <input type="email" name="email" placeholder="Twój e-mail*" required value={formData.email} onChange={handleChange} className="border border-black p-3 rounded-full w-full" />
                    <input type="text" name="jobTitle" placeholder="Obecne stanowisko pracy" value={formData.jobTitle} onChange={handleChange} className="border border-black p-3 rounded-full w-full" />
                    <input type="text" name="linkedin" placeholder="LinkedIn / GitHub / Dribbble" value={formData.linkedin} onChange={handleChange} className="border border-black p-3 rounded-full w-full" />
                </div>

                {/* Typ pracy */}
                <div className="mt-6">
                    <p className="text-gray-700 font-bold mb-2">Typ oczekiwanej pracy:</p>
                    <div className="flex gap-4">
                        <label className="flex items-center">
                            <input type="checkbox" name="jobType" value="Full Time" onChange={handleChange} className="mr-2" />
                            Full Time
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" name="jobType" value="Contract" onChange={handleChange} className="mr-2" />
                            Kontrakt
                        </label>
                    </div>
                </div>

                {/* Preferencje pracy */}
                <div className="mt-6">
                    <p className="text-gray-700 font-bold mb-2">Preferencje miejsca pracy:</p>
                    <div className="flex gap-4">
                        <label className="flex items-center">
                            <input type="checkbox" name="officePolicy" value="Remote" onChange={handleChange} className="mr-2" />
                            Zdalna
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" name="officePolicy" value="Hybrid" onChange={handleChange} className="mr-2" />
                            Hybrydowa
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" name="officePolicy" value="Onsite" onChange={handleChange} className="mr-2" />
                            W biurze
                        </label>
                    </div>
                </div>

                {/* Dodatkowe informacje */}
                <textarea name="message" placeholder="Inne rzeczy, które warto, żebyśmy wiedzieli" value={formData.message} onChange={handleChange} className="border border-black p-3 rounded-lg w-full mt-6" />

                {/* Przesyłanie pliku */}
                <div className="mt-6">
                    <label className="block text-gray-700 font-bold mb-2">Prześlij plik</label>
                    <input type="file" name="file" accept=".pdf,.doc,.docx" onChange={handleChange} className="border border-dashed border-black p-3 rounded-lg w-full" />
                </div>

                {/* Zgody RODO */}
                <div className="mt-6 space-y-4">
                    <div className="flex items-start">
                        <input
                            type="checkbox"
                            name="consent1"
                            checked={formData.consent1}
                            onChange={handleChange}
                            className="mt-1 mr-2"
                            required
                        />
                        <div>
                            <label className="text-gray-700">
                                Moje CV zawiera aktualne niezbędne klauzule
                                <button
                                    type="button"
                                    onClick={toggleConsentDetails}
                                    className="ml-1 text-blue-600 underline font-normal"
                                >
                                    (aktualna klauzula)
                                </button>
                                *
                            </label>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <input
                            type="checkbox"
                            name="consent2"
                            checked={formData.consent2}
                            onChange={handleChange}
                            className="mt-1 mr-2"
                        />
                        <label className="text-gray-700">
                            Wyrażam zgodę na przetwarzanie moich danych osobowych w zakresie przyszłych procesów rekrutacyjnych.
                        </label>
                    </div>
                </div>

                {/* Przycisk wysyłania */}
                <button type="submit" className="w-full mt-6 bg-black text-white py-3 rounded-full text-lg">Wyślij</button>
            </form>

            {/* Modal / Popup z klauzulą */}
            {showConsentDetails && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 p-4">
                    <div className="bg-white p-6 rounded-lg max-w-2xl max-h-[80vh] overflow-y-auto">
                        <h2 className="text-xl font-bold mb-4">Klauzula RODO</h2>
                        <p className="text-gray-700 mb-6">
                            Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji (zgodnie z ustawą z dnia 10 maja 2018 roku o ochronie danych osobowych (Dz. Ustaw z 2018, poz. 1000) oraz zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO).
                        </p>
                        <button
                            type="button"
                            onClick={toggleConsentDetails}
                            className="bg-black text-white px-4 py-2 rounded-full"
                        >
                            Zamknij
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
}