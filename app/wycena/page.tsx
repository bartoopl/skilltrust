import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function WycenaPage() {
  return (
    <main className="bg-[#F9F6F2] text-black">
      {/* Hero Section */}
      <section className="bg-[#F9F6F2] text-black py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Wyceń rekrutację dla swojej firmy</h1>
            <p className="text-lg mb-6">
              {/* Text from image */}
                Jesteśmy przekonani, że każdy biznes jest inny i ma unikatowe potrzeby, dlatego nie zaoferujemy Ci gotowego, szablonowego rozwiązania. Rekrutację zaczynamy od zrozumienia Twojego biznesu, następnie dopasujemy elementy oferty do potrzeb Twojej firmy. Doradzimy Ci również, jaki kandydat wpisze się w Twój zespół i przygotujemy wycenę rekrutacji.
                <br/><br/>
                Specjalizujemy się w rekrutacjach na stanowiska inżynieryjne, w branży automotive, IT, dla dużych firm produkcyjnych  (doradztwo firma-firma). Wspieramy firmy, które szukają wysoko wykwalifikowanych specjalistów w obszarach: automotive, IT, HR i marketingu. Znamy branże automotive „od wewnątrz”, dlatego możesz być pewien, że znajdziemy kandydata dopasowanego do specyfiki Twojej branży, procesów celów i kultury organizacyjnej.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-black">
            <h2 className="text-2xl font-bold mb-6 text-center">Wypełnij formularz</h2>
            {/* Placeholder form */}
            <form>
              <div className="mb-4">
                <input type="text" placeholder="Twój adres e-mail" className="border border-gray-300 p-3 rounded-md w-full" />
              </div>
              <div className="mb-4">
                <input type="text" placeholder="Twój numer telefonu" className="border border-gray-300 p-3 rounded-md w-full" />
              </div>
              <div className="mb-4 text-sm text-gray-600">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Wyrażam zgodę na przetwarzanie danych osobowych w celu nawiązania kontaktu i przedstawienia oferty. Zostałem poinformowany o przysługujących mi prawach wynikających z Polityki Prywatności.</span>
                </label>
              </div>
              <button type="submit" className="bg-black text-white px-6 py-3 rounded-full w-full hover:bg-gray-800 transition-colors">Wyślij zapytanie</button>
            </form>
          </div>
        </div>
      </section>

      {/* Areas of Recruitment Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-12">Do jakich obszarów rekrutujemy?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Placeholder icons/text - replace with actual content later */}

          <div className="flex flex-col items-center">
             <div className="mb-4 w-16 h-16 bg-gray-300 rounded-full"></div> {/* Placeholder for icon */}
             <p className="text-lg font-medium">Do działów marketingu</p>
           </div>
           <div className="flex flex-col items-center">
             <div className="mb-4 w-16 h-16 bg-gray-300 rounded-full"></div> {/* Placeholder for icon */}
             <p className="text-lg font-medium">Do działów logistyki i zakupów</p>
           </div>
           <div className="flex flex-col items-center">
             <div className="mb-4 w-16 h-16 bg-gray-300 rounded-full"></div> {/* Placeholder for icon */}
             <p className="text-lg font-medium">Do działów obsługi klienta</p>
           </div>
            <div className="flex flex-col items-center">
             <div className="mb-4 w-16 h-16 bg-gray-300 rounded-full"></div> {/* Placeholder for icon */}
             <p className="text-lg font-medium">Do działów HR</p>
           </div>
           <div className="flex flex-col items-center">
             <div className="mb-4 w-16 h-16 bg-gray-300 rounded-full"></div> {/* Placeholder for icon */}
             <p className="text-lg font-medium">Do działów IT</p>
           </div>
           <div className="flex flex-col items-center">
             <div className="mb-4 w-16 h-16 bg-gray-300 rounded-full"></div> {/* Placeholder for icon */}
             <p className="text-lg font-medium">Do działów produkcyjnych</p>
           </div>
           <div className="flex flex-col items-center">
             <div className="mb-4 w-16 h-16 bg-gray-300 rounded-full"></div> {/* Placeholder for icon */}
             <p className="text-lg font-medium">Do działów inżynieryjnych</p>
           </div>
        </div>
      </section>

      {/* Process/Q&A Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          {/* Placeholder Q&A - replace with actual content later */}
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">01. Jakie pytania Ci zadamy?</h3>
              <p className="text-gray-700">Aby precyzyjnie wycenić usługę, zapytamy Cię o szczegółowy profil poszukiwanego kandydata – od niezbędnych kompetencji i doświadczenia, po oczekiwania finansowe. Kluczowe będzie również zrozumienie specyfiki stanowiska i panującej kultury biznesowej Twojej firmy, abyśmy mogli znaleźć osobę, która idealnie wpasuje się w zespół. Dzięki tym informacjom przygotujemy ofertę dopasowaną do Twoich unikalnych potrzeb. </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">02. Z kim najczęściej pracujemy?</h3>
              <p className="text-gray-700">Skuteczna rekrutacja to efekt ścisłej współpracy z kilkoma kluczowymi osobami w Twojej firmie: działem HR, osobą zlecającą rekrutację, oraz przyszłym przełożonym kandydata. To właśnie manager, który na co dzień pracuje z zespołem, najlepiej rozumie jego dynamikę, luki kompetencyjne oraz specyficzne wymagania stanowiska. Jego wgląd w codzienne operacje i strategie zespołu jest dla nas bezcenny. Dzięki temu możemy nie tylko dopasować umiejętności, ale również kulturę osobistą i styl pracy kandydata do realnych potrzeb Twojego zespołu.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">03. Czy konsultacja do czegoś zobowiązuje?</h3>
              <p className="text-gray-700">Absolutnie nie. Potraktuj naszą pierwszą rozmowę jak spotkanie biznesowe przy dobrej kawie (nawet jeśli będzie online). To dla nas okazja, by lepiej poznać Twoje potrzeby, a dla Ciebie – by zrozumieć, jak możemy Ci pomóc. Konsultacja może być pierwszym krokiem do potencjalnej współpracy, nie wymaga od Ciebie niczego poza poświęconym czasem na swobodną rozmowę. Wierzymy, że budowanie relacji opartych na zaufaniu zaczyna się od transparentności i braku presji.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-12">Te marki nam zaufały</h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-center">
          {/* Placeholder logos - replace with actual images later */}
          <div className="w-24 h-12 bg-gray-300 mx-auto"></div>
          <div className="w-24 h-12 bg-gray-300 mx-auto"></div>
          <div className="w-24 h-12 bg-gray-300 mx-auto"></div>
          <div className="w-24 h-12 bg-gray-300 mx-auto"></div>
          <div className="w-24 h-12 bg-gray-300 mx-auto"></div>
          <div className="w-24 h-12 bg-gray-300 mx-auto"></div>
          <div className="w-24 h-12 bg-gray-300 mx-auto"></div>
          <div className="w-24 h-12 bg-gray-300 mx-auto"></div>
          <div className="w-24 h-12 bg-gray-300 mx-auto"></div>
          <div className="w-24 h-12 bg-gray-300 mx-auto"></div>
          <div className="w-24 h-12 bg-gray-300 mx-auto"></div>
          <div className="w-24 h-12 bg-gray-300 mx-auto"></div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-[#ECE7DE] text-black py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
           <div className="text-black bg-white p-8 rounded-lg shadow-md">
               <h2 className="text-2xl font-bold mb-6 text-center">Skontaktuj się z nami</h2>
               {/* Placeholder form - similar to hero */}
                <form>
                 <div className="mb-4">
                   <input type="text" placeholder="Twój adres e-mail" className="border border-gray-300 p-3 rounded-md w-full" />
                 </div>
                 <div className="mb-4">
                   <input type="text" placeholder="Twój numer telefonu" className="border border-gray-300 p-3 rounded-md w-full" />
                 </div>
                  <div className="mb-4">
                   <textarea placeholder="Twoja wiadomość" rows={4} className="border border-gray-300 p-3 rounded-md w-full"></textarea>
                 </div>
                 <div className="mb-4 text-sm text-gray-600">
                   <label className="flex items-center">
                     <input type="checkbox" className="mr-2" />
                     <span>Wyrażam zgodę na przetwarzanie danych osobowych...</span> {/* Abbreviated for now */}
                   </label>
                 </div>
                 <button type="submit" className="bg-black text-white px-6 py-3 rounded-full w-full hover:bg-gray-800 transition-colors">Wyślij wiadomość</button>
               </form>
           </div>
           <div>
             <h2 className="text-3xl font-bold mb-4">Bezpośredni kontakt</h2>
             <p className="text-lg mb-2">kontakt@skilltrust.pl</p>
             <p className="text-lg">+48 780 740 087</p>
             {/* Placeholder for illustration */}
             <div className="mt-8 w-32 h-32 bg-gray-300 mx-auto"></div>
           </div>
        </div>
      </section>

      {/* Footer will be a separate component */}
    </main>
  );
} 