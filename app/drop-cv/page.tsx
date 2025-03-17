"use client";
import { useState } from "react";
import Image from "next/image";

export default function DropCV() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        jobTitle: "",
        linkedin: "",
        jobType: [],
        officePolicy: [],
        message: "",
        file: null,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            setFormData((prev) => ({
                ...prev,
                [name]: checked
                    ? [...prev[name], value]
                    : prev[name].filter((v) => v !== value),
            }));
        } else if (type === "file") {
            setFormData((prev) => ({
                ...prev,
                file: e.target.files[0],
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append("firstName", formData.firstName);
        formDataToSend.append("lastName", formData.lastName);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("jobTitle", formData.jobTitle);
        formDataToSend.append("linkedin", formData.linkedin);
        formDataToSend.append("jobType", formData.jobType.join(", "));
        formDataToSend.append("officePolicy", formData.officePolicy.join(", "));
        formDataToSend.append("message", formData.message);
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
                });
            } else {
                alert("Błąd wysyłki!");
            }
        } catch (error) {
            console.error("Błąd:", error);
            alert("Coś poszło nie tak.");
        }
    };

    return (
        <main className="bg-[#F9F6F2] text-black min-h-screen flex flex-col items-center py-16">
            <h1 className="text-5xl font-bold mb-4">Drop your CV / Portfolio</h1>
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

                {/* Przycisk wysyłania */}
                <button type="submit" className="w-full mt-6 bg-black text-white py-3 rounded-full text-lg">Wyślij</button>
            </form>
        </main>
    );
}