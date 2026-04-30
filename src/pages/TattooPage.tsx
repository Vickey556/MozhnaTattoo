import { useState } from 'react';
import { ReviewsSection } from './HomePage';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-[#73934A]/30 py-4">
      <button 
        className="w-full flex justify-between items-center text-left font-serif text-xl focus:outline-none hover:text-[#b6ff40] transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <svg 
          className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#b6ff40]' : ''}`} 
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="font-serif opacity-80">{answer}</p>
      </div>
    </div>
  );
};

export const TattooPage = () => {
  return (
    <div className="pt-32 pb-0 px-0 min-h-screen">
      <h1 className="font-serif text-5xl md:text-7xl mb-16 text-center uppercase">Татуювання</h1>

      {/* Preparation Block */}
      <section className="px-4 md:px-12 lg:px-24 max-w-7xl mx-auto mb-24 flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
          <h2 className="font-serif text-3xl md:text-4xl mb-8 uppercase text-[#b6ff40]">Як підготуватись до сеансу</h2>
          <ul className="space-y-6 font-serif text-lg opacity-90">
            <li className="flex gap-4">
              <span className="text-[#b6ff40] text-2xl">•</span>
              <p>Добре виспіться. Здоровий сон допоможе легше перенести процес.</p>
            </li>
            <li className="flex gap-4">
              <span className="text-[#b6ff40] text-2xl">•</span>
              <p>Обов'язково поїжте перед сеансом. Це стабілізує рівень цукру в крові.</p>
            </li>
            <li className="flex gap-4">
              <span className="text-[#b6ff40] text-2xl">•</span>
              <p>Не вживайте алкоголь за добу до сеансу. Він розріджує кров.</p>
            </li>
            <li className="flex gap-4">
              <span className="text-[#b6ff40] text-2xl">•</span>
              <p>Одягніть зручний одяг, який забезпечить доступ до місця майбутнього татуювання.</p>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <div className="w-80 h-80 bg-[#b6ff40] star-clip-path overflow-hidden p-1 shadow-[0_0_50px_rgba(182,255,64,0.3)]">
             <div className="w-full h-full star-clip-path overflow-hidden relative">
               <img src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=2070&auto=format&fit=crop" alt="Tattoo preparation" className="w-full h-full object-cover scale-110" />
               <div className="absolute inset-0 bg-[#2B451A]/20 mix-blend-overlay"></div>
             </div>
          </div>
        </div>
      </section>

      {/* Booking Block */}
      <section className="bg-[#0a1208] py-24 px-4 border-y border-[#73934A]/20">
         <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 h-[500px] rounded-t-[200px] overflow-hidden border border-[#73934A]/50 relative">
               <img src="https://images.unsplash.com/photo-1598371839696-5e5bb00b059f?q=80&w=1974&auto=format&fit=crop" alt="Booking" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#122110] to-transparent opacity-60"></div>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
               <h2 className="font-serif text-4xl mb-6 uppercase">Готові до нового тату?</h2>
               <p className="font-serif text-lg opacity-80 mb-8 max-w-md">
                 Запишіться на безкоштовну консультацію з нашим майстром. Ми обговоримо ескіз, розмір та місце нанесення.
               </p>
               <button className="px-10 py-4 bg-[#b6ff40] text-[#122110] font-serif uppercase tracking-widest rounded-full hover:bg-white transition-colors">
                 Записатися онлайн
               </button>
            </div>
         </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 md:px-12 lg:px-24 max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl mb-12 text-center uppercase">Часті питання</h2>
        <div className="flex flex-col gap-2">
          <FAQItem question="Скільки коштує татуювання?" answer="Вартість залежить від розміру, складності ескізу та витраченого часу. Точну ціну майстер зможе сказати після консультації та затвердження ескізу. Мінімальна вартість сеансу - 1500 грн." />
          <FAQItem question="Чи боляче робити тату?" answer="Больові відчуття залежать від місця нанесення та вашого індивідуального порогу болю. У більшості випадків це терпимо і нагадує подряпини." />
          <FAQItem question="Як доглядати за тату після сеансу?" answer="Майстер детально розповість про всі етапи догляду і порадить загоюючу плівку або мазь. Головне - тримати в чистоті та не здирати шкіринки." />
        </div>
      </section>

      {/* Filtered Reviews */}
      <ReviewsSection />
    </div>
  );
};
