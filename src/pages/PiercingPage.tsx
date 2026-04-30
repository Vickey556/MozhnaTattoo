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

export const PiercingPage = () => {
  return (
    <div className="pt-32 pb-0 px-0 min-h-screen">
      <h1 className="font-serif text-5xl md:text-7xl mb-16 text-center uppercase">Пірсинг</h1>

      {/* Preparation Block */}
      <section className="px-4 md:px-12 lg:px-24 max-w-7xl mx-auto mb-24 flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2 flex justify-center order-2 lg:order-1">
          <div className="w-80 h-80 bg-[#b6ff40] star-clip-path overflow-hidden p-1 shadow-[0_0_50px_rgba(182,255,64,0.3)]">
             <div className="w-full h-full star-clip-path overflow-hidden relative">
               <img src="https://images.unsplash.com/photo-1590432326759-c29013f99a38?q=80&w=1964&auto=format&fit=crop" alt="Piercing preparation" className="w-full h-full object-cover scale-110" />
               <div className="absolute inset-0 bg-[#2B451A]/20 mix-blend-overlay"></div>
             </div>
          </div>
        </div>
        <div className="lg:w-1/2 order-1 lg:order-2">
          <h2 className="font-serif text-3xl md:text-4xl mb-8 uppercase text-[#b6ff40]">Як підготуватись до проколу</h2>
          <ul className="space-y-6 font-serif text-lg opacity-90">
            <li className="flex gap-4">
              <span className="text-[#b6ff40] text-2xl">•</span>
              <p>Обов'язково поїжте за 1-2 години до сеансу. Це запобіжить запамороченню.</p>
            </li>
            <li className="flex gap-4">
              <span className="text-[#b6ff40] text-2xl">•</span>
              <p>Вимийте волосся (особливо якщо плануєте прокол вуха), щоб уникнути потрапляння бруду на свіжий прокол.</p>
            </li>
            <li className="flex gap-4">
              <span className="text-[#b6ff40] text-2xl">•</span>
              <p>Не плануйте похід в басейн чи сауну на найближчі тижні після сеансу.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Booking Block */}
      <section className="bg-[#0a1208] py-24 px-4 border-y border-[#73934A]/20">
         <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start order-2 md:order-1">
               <h2 className="font-serif text-4xl mb-6 uppercase">Професійний пірсинг</h2>
               <p className="font-serif text-lg opacity-80 mb-8 max-w-md">
                 Використовуємо лише титанові прикраси високої якості. Стерильно, безпечно та естетично.
               </p>
               <button className="px-10 py-4 bg-[#b6ff40] text-[#122110] font-serif uppercase tracking-widest rounded-full hover:bg-white transition-colors">
                 Записатися онлайн
               </button>
            </div>
            <div className="w-full md:w-1/2 h-[500px] rounded-t-[200px] overflow-hidden border border-[#73934A]/50 relative order-1 md:order-2">
               <img src="https://images.unsplash.com/photo-1618255955620-3b497e2b1022?q=80&w=1964&auto=format&fit=crop" alt="Booking Piercing" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#122110] to-transparent opacity-60"></div>
            </div>
         </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 md:px-12 lg:px-24 max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl mb-12 text-center uppercase">Часті питання</h2>
        <div className="flex flex-col gap-2">
          <FAQItem question="Який метал використовується для первинного проколу?" answer="Ми використовуємо виключно титан ASTM F-136. Це гіпоалергенний матеріал, який найкраще підходить для свіжих проколів." />
          <FAQItem question="Скільки заживає прокол?" answer="Все залежить від місця проколу. Мочки вух заживають 1.5-2 місяці, хрящі - від 6 до 9 місяців, пупок - до року. Майстер дасть точні терміни для вашого випадку." />
          <FAQItem question="Чи можна приходити зі своєю прикрасою?" answer="Для первинного проколу ми використовуємо лише наші стерильні титанові прикраси. Це гарантує вашу безпеку та правильне загоєння." />
        </div>
      </section>

      {/* Filtered Reviews */}
      <ReviewsSection />
    </div>
  );
};
