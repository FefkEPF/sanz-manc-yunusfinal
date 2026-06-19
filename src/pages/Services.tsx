import { Link } from "react-router-dom";
import { Settings, ArrowRight, CheckCircle2 } from "lucide-react";
import { servicesData } from "../data/seoContent";
import SEO from "../components/SEO";

export default function Services() {
  return (
    <div className="flex flex-col w-full bg-gray-50 min-h-screen">
      <SEO
        title="Garantili Şanzıman Hizmetlerimiz | Şanzımancı Yunus"
        description="Manuel ve otomatik şanzıman tamiri, EDC kavrama ve mekatronik revizyonları, sıfır ve çıkma şanzıman satışı, makineyle yağ değişimi hizmetlerimiz."
        keywords="şanzıman tamiri hizmetleri, otomatik şanzıman tamiri, dsg mekatronik tamiri, şanzıman satışı, çıkma şanzıman, şanzıman yağı değişimi"
        ogUrl="https://sanzimanciyunus.com/hizmetlerimiz"
      />
      <section className="bg-gray-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/hero/services.webp')] bg-cover bg-center" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 to-brand-700"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10 pt-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 border-l-4 border-brand-500 bg-gray-900/80 text-brand-400 font-semibold text-sm tracking-wider uppercase mb-6 shadow-xl rounded-r-md">
            Profesyonel Onarım Çözümleri
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">Hizmetlerimiz</h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Garantili işçilik ve orijinal yedek parça güvencesiyle sunduğumuz spesifik manuel ve otomatik şanzıman çözümleri.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-100 outline outline-1 outline-transparent shadow-sm hover:shadow-lg hover:outline-brand-200 hover:-translate-y-1 transition-all duration-300 flex flex-col items-start h-full group"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Settings className="w-7 h-7" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h2>
                <p className="text-gray-600 leading-relaxed max-w-sm mb-8 flex-1 text-sm">
                  {service.description}
                </p>
                <div className="flex items-center gap-3 text-sm font-semibold text-gray-700 mb-6 w-full border-t border-gray-100 pt-6 mt-auto">
                  <CheckCircle2 className="w-5 h-5 text-brand-500" />
                  Garantili Çözüm
                </div>
                <Link
                  to={`/hizmetlerimiz/${service.slug}`}
                  className="inline-flex items-center gap-2 text-brand-600 font-semibold group-hover:gap-3 transition-all text-sm cursor-pointer justify-center w-full bg-gray-50 border border-gray-100 py-3 rounded-lg group-hover:bg-brand-50 group-hover:border-brand-100 group-hover:text-brand-700"
                >
                  Hizmet Detayı <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-white p-10 sm:p-14 rounded-2xl border border-gray-100 text-center mx-auto max-w-4xl shadow-xl shadow-gray-200/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-600 to-brand-400" />
            <h3 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Türkiye'nin Her Yerine Hizmet</h3>
            <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Geniş hizmet ağımız ile "Şanzıman tamiri yapılır. Şanzıman parçaları bulunur. Uzman kadromuz ile Türkiye'nin her yerine kargo ile ulaştırılır." kuralımız değişmez doğrumuzdur. İstanbul dışından arızalı şanzıman veya yedek parça talep ediyorsanız bizimle hemen iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#hizmet-formu" className="px-8 py-4 rounded-xl bg-gray-900 text-white font-semibold hover:bg-black transition-colors shadow-lg text-base flex items-center justify-center">
                Hizmet Formu Gönder
              </a>
              <a href="tel:+905323972975" className="px-8 py-4 rounded-xl bg-brand-600 text-white font-semibold hover:bg-brand-500 transition-colors shadow-lg text-base flex items-center justify-center">
                Hemen Bizi Arayın
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
