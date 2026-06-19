import { Link, Outlet, useLocation } from "react-router-dom";
import { Phone, Wrench, Menu, X, Mail, MapPin, ShieldCheck, ChevronDown, Clock } from "lucide-react";
import { ScrollToTop } from "./ScrollToTop";
import { useState, useEffect } from "react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Anasayfa", path: "/" },
    { name: "Kurumsal", path: "/kurumsal" },
    { 
      name: "Hizmetlerimiz", 
      path: "/hizmetlerimiz",
      dropdown: [
        { title: "EDC Otomatik Şanzıman Tamiri", path: "/hizmetlerimiz/edc-sanziman-tamiri", desc: "Mekatronik, beyin tamiri ve çift kavrama onarımı." },
        { title: "Manuel Şanzıman Tamiri", path: "/hizmetlerimiz/manuel-sanziman-tamiri", desc: "Vites geçiş zorlukları, cırlama ve dişli revizyonu." },
        { title: "Debriyaj & Kavrama Seti Değişimi", path: "/hizmetlerimiz/debriyaj-kavrama-seti-degisimi", desc: "Balata, baskı plakası, rulman ve volan değişimi." },
        { title: "Şanzıman Bakımı & Yağ Değişimi", path: "/hizmetlerimiz/sanziman-bakimi-yag-degisimi", desc: "Makineli flush yağ değişimi ve filtre yenileme." },
        { title: "Mercedes Şanzıman Tamiri", path: "/hizmetlerimiz/mercedes-sanziman-tamiri", desc: "Mercedes 7G-Tronic, 9G-Tronic premium onarımları." },
        { title: "Garantili Şanzıman Revizyonu", path: "/hizmetlerimiz/sanziman-tamiri", desc: "Komple vites kutusu söküm, onarım ve test döngüsü." },
      ]
    },
    { name: "Markalar", path: "/markalar" },
    { name: "Ürünlerimiz", path: "/urunler" },
    { name: "Şanzıman Rehberi", path: "/blog" },
    { name: "İletişim", path: "/iletisim" },
  ];

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setOpenMobileDropdown(null);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <ScrollToTop />
      
      {/* Top Bar for Corporate Feel */}
      <div className="hidden lg:block bg-gray-900 border-b-4 border-brand-600 text-gray-300 py-2 text-sm font-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-500" />
              Türkiye'nin Lider Şanzıman Revizyon Merkezi
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-500" />
              Tüm Türkiye'ye Kargo İmkanı
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="mailto:info@sanzimanciyunus.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4 text-brand-500" />
              info@sanzimanciyunus.com
            </a>
            <span className="flex items-center gap-2">
              <span className="text-brand-500 font-semibold">Pzt - Cts:</span> 09:00 - 19:00
            </span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header className="bg-white shadow-sm sticky top-0 z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-3">
              <img src="/sanzimanci_yunus_logo.webp" alt="Şanzımancı Yunus" className="h-14 w-auto object-contain" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex space-x-1 items-center">
              {navLinks.map((link) => (
                <div 
                  key={link.name}
                  className="relative group px-0.5 py-2"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.path}
                    className={`font-semibold transition-colors flex items-center gap-1 rounded-md px-2 py-2 text-sm ${
                      (link.path === "/" ? location.pathname === "/" : location.pathname === link.path || location.pathname.startsWith(link.path + "/"))
                        ? "text-brand-600 bg-brand-50" 
                        : "text-gray-700 hover:text-brand-600 hover:bg-gray-50"
                    }`}
                  >
                    {link.name}
                    {link.dropdown && <ChevronDown className="w-4 h-4" />}
                  </Link>

                  {/* Mega Menu Dropdown */}
                  {link.dropdown && (
                    <div 
                      className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 w-max max-w-[600px] z-50 ${
                        activeDropdown === link.name ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2 pointer-events-none"
                      }`}
                    >
                      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 grid grid-cols-2 gap-x-8 gap-y-6">
                        {link.dropdown.map((item) => (
                          <Link 
                            key={item.title} 
                            to={item.path}
                            className="group/item flex flex-col items-start hover:bg-gray-50 p-4 border border-transparent hover:border-gray-100 rounded-xl transition-colors -m-4"
                          >
                            <span className="font-bold text-gray-900 group-hover/item:text-brand-600 transition-colors mb-1">
                              {item.title}
                            </span>
                            <span className="text-sm text-gray-500 line-clamp-2">
                              {item.desc}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-2">
              <a href="tel:+905323972975" className="flex items-center gap-2 bg-brand-600 text-white px-3 py-2 rounded-lg font-semibold hover:bg-brand-700 transition-colors shadow-sm text-sm">
                <Phone className="w-4 h-4" />
                <span className="whitespace-nowrap">0532 397 29 75</span>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-brand-600 focus:outline-none p-2 rounded-md hover:bg-gray-100"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <div 
          className={`lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-[80vh] pb-6 overflow-y-auto" : "max-h-0"
          }`}
        >
          <div className="px-4 py-4 flex flex-col space-y-2">
             {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col border-b border-gray-100 pb-1">
                  <div className="flex items-center justify-between">
                    <Link
                      to={link.path}
                      className={`flex-1 text-base font-semibold px-3 py-3 rounded-md ${
                        (link.path === "/" ? location.pathname === "/" : location.pathname === link.path || location.pathname.startsWith(link.path + "/"))
                          ? "text-brand-600 bg-brand-50"
                          : "text-gray-800 hover:bg-gray-50"
                      }`}
                    >
                      {link.name}
                    </Link>
                    {link.dropdown && (
                      <button
                        onClick={() =>
                          setOpenMobileDropdown(
                            openMobileDropdown === link.name ? null : link.name
                          )
                        }
                        className="p-2 rounded-md text-gray-500 hover:text-brand-600 hover:bg-gray-50 transition-colors"
                        aria-label={`${link.name} alt menüyü aç/kapat`}
                      >
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-200 ${
                            openMobileDropdown === link.name ? "rotate-180 text-brand-600" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  {link.dropdown && openMobileDropdown === link.name && (
                    <div className="flex flex-col pl-4 pb-2 space-y-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.title}
                          to={item.path}
                          className="text-gray-600 hover:text-brand-600 hover:bg-gray-50 rounded-md px-3 py-2 font-medium text-sm block"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
               <div className="px-3 pt-4 space-y-3">
                 <a href="tel:+905323972975" className="flex items-center justify-center gap-2 bg-brand-600 text-white px-4 py-3 rounded-lg font-semibold w-full shadow-sm">
                  <Phone className="w-5 h-5" />
                  <span>0532 397 29 75'i Ara</span>
                </a>
                 <a href="https://wa.me/905323972975" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-4 py-3 rounded-lg font-semibold w-full shadow-sm transition-colors">
                   <WhatsAppIcon className="w-5 h-5" />
                   <span>WhatsApp'tan Ulaşın</span>
                 </a>
               </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full bg-white">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 sm:py-16 pb-24 sm:pb-16 text-sm border-t-[6px] border-brand-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
             <Link to="/" className="flex items-center gap-3 mb-6 w-fit inline-block hover:opacity-90 transition-opacity">
              <img src="/sanzimanci_yunus_logo.webp" alt="Şanzımancı Yunus" className="h-16 w-auto object-contain brightness-0 invert" />
            </Link>
            <p className="leading-relaxed mb-4 text-gray-400 text-sm">
              Şanzıman tamiri yapılır. Şanzıman parçaları bulunur. Uzman kadromuz ile Türkiye'nin her yerine kargo ile ulaştırılır.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-6">İletişim Bilgileri</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <div className="bg-gray-800 p-2 rounded-md"><Phone className="w-4 h-4 text-brand-500" /></div>
                <a href="tel:+905323972975" className="hover:text-white transition-colors font-medium">0532 397 29 75</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <div className="bg-gray-800 p-2 rounded-md"><Mail className="w-4 h-4 text-brand-500" /></div>
                <a href="mailto:info@sanzimanciyunus.com" className="hover:text-white transition-colors font-medium break-all">info@sanzimanciyunus.com</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                 <div className="bg-gray-800 p-2 rounded-md"><Clock className="w-4 h-4 text-brand-500" /></div>
                <span className="font-medium">Pzt - Cts: 09:00 - 19:00</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Hızlı Erişim</h4>
            <ul className="space-y-3 font-medium text-gray-400">
              <li><Link to="/kurumsal" className="hover:text-brand-500 transition-colors">Hakkımızda & Kurumsal</Link></li>
              <li><Link to="/hizmetlerimiz" className="hover:text-brand-500 transition-colors">Hizmetlerimiz</Link></li>
              <li><Link to="/urunler" className="hover:text-brand-500 transition-colors">Ürünlerimiz</Link></li>
              <li><Link to="/blog" className="hover:text-brand-500 transition-colors">Şanzıman Rehberi & Blog</Link></li>
              <li><Link to="/iletisim" className="hover:text-brand-500 transition-colors">İletişim & Konum</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Hizmet Ağımız</h4>
            <p className="leading-relaxed mb-4 text-gray-400 text-sm">
              Başta İstanbul tüm ilçeleri (Esenyurt, Kadıköy, vb.) olmak üzere Türkiye'nin 81 iline arızalı şanzıman alımı ve gönderimi.
            </p>
            <div className="flex gap-2 items-center text-brand-500 font-semibold mb-2">
              <ShieldCheck className="w-5 h-5" /> Garantili Hizmet
            </div>
            <div className="flex gap-2 items-center text-brand-500 font-semibold">
              <MapPin className="w-5 h-5" /> Türkiye Geneli
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 font-medium text-sm mx-4 sm:mx-6 lg:mx-8">
          © {new Date().getFullYear()} Şanzımancı Yunus. Tüm Hakları Saklıdır.
        </div>
      </footer>

      {/* Sticky Action Buttons */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto z-50 flex flex-col gap-2 sm:gap-3 items-end sm:items-start">
        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/905323972975" 
          target="_blank" 
          rel="noreferrer"
          className="group w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none"
          aria-label="WhatsApp üzerinden hemen iletişime geç"
          title="WhatsApp'tan Ulaşın"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-8 sm:h-8">
            <path d="M12.031 0C5.394 0 .004 5.391.004 12.029c0 2.121.552 4.186 1.602 6.002L.031 24l6.103-1.604c1.748.956 3.738 1.464 5.894 1.464 6.634 0 12.022-5.392 12.022-12.029C24.05 5.39 18.665 0 12.031 0zm-.003 21.849c-1.803 0-3.56-.484-5.097-1.396l-.364-.217-3.791.993 1.011-3.696-.239-.379a9.986 9.986 0 0 1-1.536-5.111C2 6.505 6.508 2 12.028 2 17.545 2 22.05 6.505 22.05 12.043c0 5.536-4.505 10.043-10.022 10.043v-.237zm5.512-7.538c-.302-.152-1.786-.882-2.062-.982-.278-.102-.479-.153-.68.151-.202.302-.779.982-.954 1.183-.176.202-.352.227-.655.076-.302-.152-1.275-.47-2.428-1.5-.898-.802-1.503-1.795-1.68-2.097-.176-.301-.02-.465.132-.616.136-.135.302-.352.453-.528.15-.176.201-.301.302-.502.1-.202.05-.378-.026-.529-.075-.152-.68-1.643-.931-2.25-.246-.593-.497-.512-.68-.521-.176-.009-.379-.009-.58-.009-.202 0-.528.075-.805.378-.277.302-1.057 1.033-1.057 2.518 0 1.485 1.082 2.92 1.233 3.121.151.202 2.128 3.253 5.156 4.557.72.311 1.28.497 1.718.636.721.228 1.378.196 1.896.118.578-.087 1.786-.73 2.038-1.436.252-.705.252-1.309.176-1.435-.075-.126-.277-.202-.579-.352z"/>
          </svg>
        </a>
        
        {/* Phone Button */}
        <a 
          href="tel:+905323972975" 
          className="group w-12 h-12 sm:w-14 sm:h-14 bg-brand-600 hover:bg-brand-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none"
          aria-label="Acil şanzıman desteği için ara"
          title="0532 397 29 75'i Çevir"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
