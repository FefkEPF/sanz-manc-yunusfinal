import { CheckCircle2, ShieldCheck, Car } from "lucide-react";
import { Link } from "react-router-dom";
import { allBrands } from "../data/brandsData";
import SEO from "../components/SEO";

export default function Brands() {
  return (
    <div className="flex flex-col w-full bg-gray-50 min-h-screen">
      <SEO 
        title="Araç Markalarına Özel Şanzıman Çözümleri | Şanzımancı Yunus" 
        description="Renault EDC, Fiat Dualogic, Ford Powershift, Chery, Peugeot EAT ve tüm araç markalarının otomatik/manuel şanzıman revizyon ve tamiri."
        keywords="volkswagen dsg tamiri, renault edc mekatronik, ford powershift tamiri, chery şanzıman, fiat dualogic tamiri, markaya özel şanzıman"
        ogUrl="https://sanzimanciyunus.com/markalar"
      />
      <section className="bg-gray-900 py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/hero/brands.webp')] bg-cover bg-center" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 to-brand-700"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10 pt-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 border-l-4 border-brand-500 bg-gray-900/80 text-brand-400 font-semibold text-sm tracking-wider uppercase mb-6 shadow-xl rounded-r-md">
            <Car className="w-4 h-4" /> Tüm Markalara Orijinal Parçalarla Müdahale
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">Markalara Özel Şanzıman Çözümleri</h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Her marka aracın şanzıman yapısı ve kronik arızaları farklıdır. Biz tüm mekanik yapıları ezbere biliyoruz. Özellikle <strong>manuel şanzımanlarda ve debriyaj sistemlerinde</strong> yüksek başarı oranına sahibiz.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allBrands.map((brand) => (
              <div key={brand.id} id={brand.id} className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm border border-gray-100 hover:border-brand-300 hover:shadow-lg transition-all duration-300 group scroll-mt-32 flex flex-col">
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:scale-105 transition-transform overflow-hidden shrink-0">
                    <img src={brand.logo} alt={brand.name} className="w-full h-full object-contain p-2" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 tracking-tight">{brand.name}</h2>
                    <span className="text-gray-700 font-semibold text-xs bg-gray-100 px-3 py-1 mt-2 inline-block rounded-md tracking-wide">
                      {brand.models}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-base mb-8">
                  {brand.desc}
                </p>
                <div className="mt-auto mb-8">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-gray-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                      Manuel Şanzıman Prizdirek Bilyası Onarımı
                    </li>
                    <li className="flex items-start gap-3 text-gray-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                      Senkromeç ve Vites Dişlisi Değişimi
                    </li>
                    <li className="flex items-start gap-3 text-gray-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                      Debriyaj Baskı Balata & Volant Revizyonu
                    </li>
                    <li className="flex items-start gap-3 text-gray-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                      Otomatik Vites Mekatronik onarımı
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-gray-100 rounded-xl">
                  <span className="font-semibold text-gray-900 flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-brand-600" />
                    1 Yıl Garantili Revizyon
                  </span>
                  <a href="tel:+905323972975" className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold transition-colors shadow-md rounded-lg text-sm">
                    Fiyat Alın
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 sm:mt-24 max-w-4xl mx-auto text-center bg-gray-50 p-6 sm:p-10 lg:p-12 rounded-3xl border border-gray-200 shadow-sm relative overflow-hidden">
            <div className="w-12 h-1 bg-brand-600 mb-6 mx-auto rounded-full"></div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight">Aracınızın Markası Listede Yok mu?</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
              Burada listelenmeyen diğer tüm markalar (BMW, Mercedes, Audi, Opel, Honda, Chery, vb.) için de uzman çözümlerimiz mevcuttur. Manuel ve modern şanzımanlara kadar her mekanik yapıda profesyonel destek sağlıyoruz.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+905323972975" className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-semibold shadow-md transition-colors inline-block text-base rounded-lg">
                Hemen Teknik Bilgi Alın
              </a>
              <Link to="/iletisim" className="px-8 py-4 bg-white border border-gray-300 hover:bg-gray-50 text-gray-900 font-semibold shadow-sm transition-colors inline-block text-base rounded-lg">
                Servisimize Ulaşın
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
