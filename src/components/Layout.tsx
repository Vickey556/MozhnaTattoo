
import { Link, Outlet } from "react-router-dom";

// Icons as simple SVGs
const TelegramIcon = () => (
  <img src="/telegram.svg" alt="Telegram" className="w-6 h-6" />
);

const InstagramIcon = () => (
  <img src="/instagram.svg" alt="Instagram" className="w-6 h-6" />
);

const PhoneIcon = () => (
  <img src="/phone.svg" alt="Phone" className="w-6 h-6" />
);

const Logo = () => (
  <img src="/mozhna%20logo.svg" alt="Можна Тату Логотип" className="h-12 w-auto" />
);

// Header Component
const Header = () => {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[1780px] h-[70px] px-8 rounded-[35px] flex items-center justify-between bg-white/5 backdrop-blur-md border border-white/10 shadow-xl">
      <div className="flex items-center gap-4 text-white">
        <Link to="/"><Logo /></Link>
      </div>
      <nav className="hidden lg:flex nav-menu font-serif uppercase">
        <Link to="/#about">Про нас</Link>
        <Link to="/services">Послуги</Link>
        <Link to="/tattoo">Татуювання</Link>
        <Link to="/piercing">Пірсинг</Link>
        <Link to="/#masters">Майстри</Link>
        <Link to="/#reviews">Відгуки</Link>
        <a href="#contacts">Контакти</a>
      </nav>
      <div className="flex items-center social-icons">
        <a href="#"><TelegramIcon /></a>
        <a href="#"><InstagramIcon /></a>
        <a href="#"><PhoneIcon /></a>
      </div>
    </header>
  );
};

// Contacts Footer
const ContactsFooter = () => {
  return (
    <footer id="contacts" className="py-24 px-4 md:px-12 lg:px-24 bg-[#0a1208] border-t border-[#73934A]/20 font-serif text-[#EBEBDF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 justify-between relative z-10">

        {/* Contact Info */}
        <div className="flex flex-col gap-8 lg:w-1/2">
          <div>
            <Logo />
            <p className="mt-4 opacity-70 text-sm max-w-sm">
              Ми створюємо не просто татуювання, а моменти, які залишаються з вами назавжди.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <PhoneIcon />
              <div>
                <h4 className="text-[#b6ff40] mb-1">Телефон</h4>
                <p className="text-lg">+38 063 000 00 00</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-1">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <div>
                <h4 className="text-[#b6ff40] mb-1">Адреса</h4>
                <p className="text-lg">м. Черкаси, вул. Хрещатик, 1</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-1">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <div>
                <h4 className="text-[#b6ff40] mb-1">Графік роботи</h4>
                <p className="text-lg">Пн-Нд: 10:00 - 20:00<br /><span className="opacity-60 text-sm">Тільки за попереднім записом</span></p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <a href="#" className="p-3 bg-[#122110] rounded-full hover:bg-[#b6ff40] hover:text-[#122110] transition-colors"><TelegramIcon /></a>
            <a href="#" className="p-3 bg-[#122110] rounded-full hover:bg-[#b6ff40] hover:text-[#122110] transition-colors"><InstagramIcon /></a>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="lg:w-1/2 h-80 lg:h-auto rounded-[32px] overflow-hidden bg-[#122110] border border-[#73934A]/30 relative flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500">
          {/* Додав pointer-events-none, щоб цей зелений шар не блокував можливість рухати карту мишкою */}
          <div className="absolute inset-0 bg-[#b6ff40]/10 mix-blend-overlay pointer-events-none z-10"></div>
          
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2594.096209210345!2d32.058796!3d49.444898599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d14b004e80a5bf%3A0x95063f2eb8226ca5!2z0JzQntCW0J3QkCDQotCQ0KLQow!5e0!3m2!1suk!2sua!4v1777577116583!5m2!1suk!2sua" 
            className="absolute inset-0 w-full h-full" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="mt-24 pt-8 border-t border-[#73934A]/20 text-center text-sm opacity-50 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-4">
        <p>&copy; {new Date().getFullYear()} МОЖНА ТАТУ. Всі права захищено.</p>
        <p>Розроблено з любов'ю</p>
      </div>
    </footer>
  );
};

export const Layout = () => {
  return (
    <div className="min-h-screen bg-[#122110] text-[#F0F4E8] font-serif overflow-x-hidden selection:bg-[#73934A] selection:text-white flex flex-col">
      <Header />
      <div className="flex-grow pt-[100px]">
        <Outlet />
      </div>
      <ContactsFooter />
    </div>
  );
};
