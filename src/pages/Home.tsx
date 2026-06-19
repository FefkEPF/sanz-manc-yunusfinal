import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2, Search, Settings, ShieldCheck, Wrench, Award, Clock, Phone, Car, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import FAQAccordion from "../components/FAQAccordion";
import { faqs, servicesData } from "../data/seoContent";
import { allBrands } from "../data/brandsData";
import SEO from "../components/SEO";

export default function Home() {
  const heroImages = [
    { src: "/images/slider/ford_transit_1.webp", title: "Ford Transit Şanzıman", desc: "Transit 6 vites orijinal şanzıman revizyon ve satış hizmetleri." },
    { src: "/images/slider/renault_master_3.webp", title: "Renault Master Şanzıman", desc: "Master vites kutusu, dişli ve senkromeç onarımları." },
    { src: "/images/slider/ford_transit_4.webp", title: "Ford Transit Şanzıman", desc: "Fabrikasyon standartlarında garantili Transit şanzıman revizyonu." },
    { src: "/images/slider/renault_master_1.webp", title: "Renault Master Şanzıman", desc: "Master serisi vites geçiş arızalarına profesyonel revizyon çözümleri." },
    { src: "/images/slider/ford_transit_2.webp", title: "Ford Transit Şanzıman", desc: "Geniş yedek parça stoğumuzla Transit şanzıman tamir hizmeti." },
    { src: "/images/slider/renault_master_4.webp", title: "Renault Master Şanzıman", desc: "Renault Master garantili revizyonlu vites kutusu temini." },
    { src: "/images/slider/ford_transit_3.webp", title: "Ford Transit Şanzıman", desc: "Transit şanzıman parçaları ve dişli grupları stoktan teslim." },
    { src: "/images/slider/renault_master_2.webp", title: "Renault Master Şanzıman", desc: "Renault Master şanzıman revizyon ve mekanik onarım uzmanlığı." }
  ];
  
  const [currentHeroImg, setCurrentHeroImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroImg((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const instagramPosts = [
    { id: 1, image: "/images/instagram/post_1.webp", link: "https://www.instagram.com/p/DQHKD-DCC4t/" },
    { id: 2, image: "/images/instagram/post_2.webp", link: "https://www.instagram.com/p/DQHJyHiiPmw/" },
    { id: 3, image: "/images/instagram/post_3.webp", link: "https://www.instagram.com/p/DQHJFYniPjn/" },
    { id: 4, image: "/images/instagram/post_4.webp", link: "https://www.instagram.com/p/DQHIym1iEeT/" },
    { id: 5, image: "/images/instagram/post_5.webp", link: "https://www.instagram.com/p/DQG9Wj4CGET/" },
    { id: 6, image: "/images/instagram/post_6.webp", link: "https://www.instagram.com/p/DQG61F6iPk7/" }
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "Şanzımancı Yunus",
    "image": "https://sanzimanciyunus.com/sanzimanci_yunus_logo.webp",
    "@id": "https://sanzimanciyunus.com/#organization",
    "url": "https://sanzimanciyunus.com/",
    "telephone": "+905323972975",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Akşemseddin, 209. Sk. No:30 D:1",
      "addressLocality": "Esenyurt",
      "addressRegion": "İstanbul",
      "postalCode": "34510",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.0264,
      "longitude": 28.6733
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    },
    "sameAs": [
      "https://www.instagram.com/sanzimanci_yunus/"
    ]
  };

  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="Şanzımancı Yunus | Şanzıman Revizyon & Tamir Merkezi" 
        description="Şanzımancı Yunus olarak EDC, otomatik ve manuel şanzıman tamiri ve garantili revizyon yapmaktayız. Şanzıman yedek parçaları bulunur ve Türkiye'nin her yerine kargo ile ulaştırılır."
        keywords="şanzıman tamiri, şanzıman parçaları, dsg tamiri, edc şanzıman tamiri, çıkma şanzıman, istanbul şanzımancı, esenyurt şanzıman tamiri, şanzıman revizyonu"
        ogUrl="https://sanzimanciyunus.com/"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      {/* Hero Section */}
      <section className="relative bg-gray-950 text-white overflow-hidden py-10 sm:py-24 lg:py-32 m-2 sm:m-6 lg:m-8 rounded-2xl sm:rounded-3xl shadow-2xl">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="flex flex-col items-start text-left z-10 py-4 sm:py-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-brand-500/30 bg-brand-500/10 text-brand-400 font-semibold text-xs sm:text-sm tracking-wider uppercase mb-6 rounded-full shadow-lg">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              Manuel & Otomatik Şanzıman Uzmanı
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight mb-4 sm:mb-6 leading-tight">
              Şanzıman <span className="text-brand-500">Arızalarına</span> <br className="hidden sm:block" /> 
              Garantili Çözüm
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-xl mb-10 leading-relaxed">
              Özellikle manuel şanzıman ve debriyaj onarımlarında yılların ustalığı ile yanınızdayız. Tüm marka ve model araçlarınızın şanzıman tamiri yapılır, parçaları tesis edilir. Türkiye'nin her yerine kargo seçeneğiyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg">
              <a href="tel:+905323972975" className="px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-600/20 transition-all text-center flex justify-center items-center gap-2 sm:gap-3 rounded-lg">
                <Phone className="w-5 h-5" />
                Ücretsiz Ekspertiz
              </a>
              <Link to="/markalar" className="px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all text-center rounded-lg border border-white/10">
                Araç Markaları
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col sm:block relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-gray-800 z-10 group">
            <div className="relative w-full aspect-video sm:aspect-auto sm:h-[400px] lg:h-[600px]">
              {heroImages.map((img, idx) => (
                <div 
                  key={idx}
                  className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${currentHeroImg === idx ? 'opacity-100' : 'opacity-0'}`}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Image Caption - Flow on mobile, Absolute on sm+ */}
            <div className="sm:absolute sm:bottom-12 sm:left-6 sm:right-6 bg-gray-950/50 backdrop-blur-xl sm:bg-gray-950/70 border-t border-white/10 sm:border sm:border-white/10 sm:backdrop-blur-md p-4 sm:rounded-2xl text-left z-20 flex-shrink-0">
              <span className="text-brand-500 font-bold text-[10px] sm:text-xs uppercase tracking-wider">Atölyemizden Gerçek Görseller</span>
              <h3 className="text-white text-base sm:text-xl font-bold mt-0.5 sm:mt-1">{heroImages[currentHeroImg].title}</h3>
              <p className="text-gray-300 text-sm mt-1 line-clamp-2 hidden sm:block">{heroImages[currentHeroImg].desc}</p>
              
              {/* Slider Dots - Flow on mobile, Absolute on sm+ */}
              <div className="flex justify-start sm:absolute sm:-bottom-6 sm:left-0 sm:right-0 sm:justify-center gap-2 mt-3 sm:mt-0 z-20">
                {heroImages.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setCurrentHeroImg(idx)}
                    className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all ${currentHeroImg === idx ? 'bg-brand-500 w-6 sm:w-8' : 'bg-white/50 hover:bg-white/80'}`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Logo Marquee */}
      <section className="bg-white border-y border-gray-100 py-6 overflow-hidden flex relative z-10 w-full group">
        <div className="flex animate-slide w-max gap-12 sm:gap-16 px-6 sm:px-8 items-center cursor-default group-hover:[animation-play-state:paused]">
          {[...allBrands, ...allBrands].map((brand, i) => (
            <div key={i} className="flex flex-col items-center gap-2 justify-center shrink-0 w-24">
              <img src={brand.logo} alt={brand.name} className="w-16 h-16 object-contain p-1 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 mx-auto" />
              <span className="text-xs font-semibold text-gray-500 tracking-wider uppercase text-center block w-full whitespace-nowrap">{brand.name}</span>
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </section>

      {/* Trust Badges Bar */}
      <section className="bg-white border-b border-gray-100 py-12 relative z-10 shadow-sm border-t-4 border-brand-600">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 sm:gap-8 divide-y-0 sm:divide-y-0 sm:divide-x divide-gray-100">
            <div className="flex items-center gap-3 sm:gap-4 px-2 sm:px-4 pl-0">
              <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 text-brand-600 shrink-0" />
              <div className="flex flex-col">
                <h3 className="font-bold text-gray-900 text-sm sm:text-base">Garantili İşçilik</h3>
                <p className="text-xs sm:text-sm text-gray-500">%100 Test ve Onay</p>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 px-2 sm:px-4">
              <Settings className="w-8 h-8 sm:w-10 sm:h-10 text-brand-600 shrink-0" />
              <div className="flex flex-col">
                <h3 className="font-bold text-gray-900 text-sm sm:text-base">Orijinal Parça</h3>
                <p className="text-xs sm:text-sm text-gray-500">Uzun Ömürlü Çözüm</p>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 px-2 sm:px-4">
              <Award className="w-8 h-8 sm:w-10 sm:h-10 text-brand-600 shrink-0" />
              <div className="flex flex-col">
                <h3 className="font-bold text-gray-900 text-sm sm:text-base">Uzman Kadro</h3>
                <p className="text-xs sm:text-sm text-gray-500">Sanayide Öncü Atölye</p>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 px-2 sm:px-4">
              <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-brand-600 shrink-0" />
              <div className="flex flex-col">
                <h3 className="font-bold text-gray-900 text-sm sm:text-base">81 İle Hizmet</h3>
                <p className="text-xs sm:text-sm text-gray-500">Hızlı Kargo Gönderimi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 flex flex-col items-center">
            <div className="w-12 h-1 bg-brand-600 mb-6 rounded-full"></div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Kurumsal Şanzıman Çözümlerimiz</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Özellikle manuel aktarma organları ve mekatronik onarımında sektörün en yetkin ustalarıyla hizmetinize hazırız.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {servicesData.map((service, index) => (
              <div key={index} className="group p-8 bg-white border border-gray-100 hover:border-brand-200 hover:shadow-lg transition-all duration-300 shadow-sm rounded-xl flex flex-col">
                <div className="w-14 h-14 bg-brand-50 text-brand-600 flex items-center justify-center mb-6 rounded-xl group-hover:scale-110 transition-transform">
                  <Wrench className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-1 text-sm">{service.description}</p>
                <div className="mt-auto">
                  <Link to="/hizmetlerimiz" className="text-brand-600 font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all text-sm">
                    İncele <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section (SEO Context) */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="w-12 h-1 bg-brand-600 mb-6 rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight">Araç Markalarına Profesyonel Destek</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Geniş parça ağımız ve mekanik bilgi birikimimiz sayesinde tüm popüler marka ve modellere hizmet veriyoruz. Vites çatalı aşınmaları, bilya rulman dağılması, prizdirek sesi veya debriyaj sistemi sorunları artık tarih oluyor.
              </p>
              <div className="flex gap-4">
                <Link to="/markalar" className="inline-flex items-center gap-3 text-white font-semibold text-base px-8 py-4 bg-gray-900 hover:bg-gray-800 shadow-lg rounded-lg transition-colors">
                  Tüm Markaları İncele <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 w-full grid grid-cols-2 sm:grid-cols-3 gap-4 border border-gray-100 p-6 rounded-2xl bg-gray-50/50 shadow-sm">
              {allBrands.slice(0, 6).map((brand, i) => (
                <Link to={`/markalar#${brand.id}`} key={i} className="px-4 py-5 bg-white border border-gray-100 text-gray-800 font-semibold flex flex-col items-center justify-center gap-3 hover:border-brand-300 hover:shadow-md cursor-pointer transition-all rounded-xl shrink-0 group">
                  <div className="w-12 h-12 overflow-hidden bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100 group-hover:scale-105 transition-transform">
                    <img src={brand.logo} alt={brand.name} className="w-full h-full object-contain p-1.5" />
                  </div>
                  <span className="text-center text-sm">{brand.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Geo-SEO Text Content Section */}
      <section className="py-16 sm:py-24 bg-gray-900 text-gray-300 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 to-brand-700"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          <div className="flex-1">
             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 tracking-tight">Türkiye'nin Her Yerine Güvenli Şanzıman Gönderimi</h2>
            <div className="prose prose-lg prose-invert max-w-none leading-relaxed text-gray-400">
              <p className="mb-6 border-l-4 border-brand-500 pl-6">
                Merkezimiz İstanbul'da bulunmakla birlikte, Türkiye'nin dört bir yanındaki sanayi sitelerindeki usta meslektaşlarımıza ve bireysel müşterilerimize garantili servis sunmaktayız. <strong>Şanzıman tamiri yapılır. Şanzıman parçaları bulunur. Uzman kadromuz ile Türkiye'nin her yerine kargo ile ulaştırılır.</strong>
              </p>
              <p>
                Ağırlıklı olarak ilgilendiğimiz manuel mekanik şanzımanlar ve debriyaj aktarma sistemleri daima uzman ve hatasız işçilik ister. Bunun yanı sıra arızalı EDC veya tork konvertörlü şanzımanlarınızı da bize gönderdiğinizde, test edildikten sonra araca montaja hazır şekilde kargolanır.
              </p>
            </div>
            <div className="mt-10 flex gap-4">
              <a href="tel:+905323972975" className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-semibold shadow-lg transition-colors inline-flex items-center gap-3 rounded-lg">
                <Phone className="w-5 h-5" /> Merkez Müşteri Hizmetleri
              </a>
            </div>
          </div>
          <div className="flex-1 w-full relative">
             <div className="bg-white p-6 sm:p-10 lg:p-12 border border-gray-100 shadow-xl relative overflow-hidden rounded-2xl">
                <div className="absolute -bottom-10 -right-10 opacity-5">
                  <Settings className="w-64 h-64 text-gray-900" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 relative z-10 flex items-center gap-3">
                  <Award className="w-8 h-8 text-brand-600" /> Sık Rastlanan Arızalar
                </h3>
                <ul className="space-y-6 relative z-10 text-gray-700">
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-brand-500 shrink-0 mt-0.5" />
                    <span>Vites geçişlerinde cırtlama, vuruntu veya zor geçme</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-brand-500 shrink-0 mt-0.5" />
                    <span>Araç hareket etmiyor veya rampa çıkmıyor, yokuşta yığılıyor</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-brand-500 shrink-0 mt-0.5" />
                    <span>Sürüş esnasında şanzımandan gelen uğultu / ötme sesi</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-brand-500 shrink-0 mt-0.5" />
                    <span>Debriyaj setinde aşınma, kaçırma veya yanık kokusu</span>
                  </li>
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-16 sm:py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <div>
              <div className="w-12 h-1 bg-brand-600 mb-6 rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight flex items-center gap-3">
                <Instagram className="w-8 h-8 text-pink-600" />
                Bizi Instagram'da Takip Edin
              </h2>
              <p className="text-lg text-gray-600 mt-2">
                Atölyemizden en son şanzıman revizyonları, sıfır ve çıkma yedek parça paylaşımları.
              </p>
            </div>
            
            <a 
              href="https://www.instagram.com/sanzimanci_yunus/" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-all shadow-lg shadow-pink-500/20 text-base"
            >
              <Instagram className="w-6 h-6" />
              <span>@sanzimanci_yunus Takip Et</span>
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-6">
            {instagramPosts.map((post) => (
              <a 
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noreferrer"
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 bg-white block"
              >
                <img 
                  src={post.image} 
                  alt="Şanzımancı Yunus Instagram Gönderisi" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-3 text-white">
                  <Instagram className="w-8 h-8 text-white scale-75 group-hover:scale-100 transition-transform duration-300" />
                  <span className="text-xs font-semibold tracking-wide uppercase px-2.5 py-1 bg-white/25 rounded-md backdrop-blur-sm">
                    Gönderiyi Gör
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}