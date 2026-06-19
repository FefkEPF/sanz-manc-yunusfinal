import { Phone, ShieldCheck, Wrench } from "lucide-react";
import SEO from "../components/SEO";
import WhatsAppIcon from "../components/WhatsAppIcon";

export default function Products() {
  const products = [
    {
      id: "cikma-sanziman",
      title: "Orijinal Çıkma Şanzımanlar",
      description: "Test cihazlarında %100 kontrol edilmiş, revizyonlu ve garantili orijinal çıkma şanzımanlar. (EDC, CVT, ZF ve tüm modeller)",
      image: "/images/products/cikma-sanziman.png"
    },
    {
      id: "sifir-sanziman",
      title: "Sıfır (Kutu) Şanzımanlar",
      description: "Tüm marka ve modeller için üretici onaylı (OEM) kutulu, garantili sıfır komple şanzıman üniteleri.",
      image: "/images/products/sifir-sanziman.png"
    },
    {
      id: "mekatronik",
      title: "Mekatronik & Şanzıman Beyni",
      description: "Vites geçişlerini sağlayan hidrolik ve elektronik beyin üniteleri (TCM). Yeni ve klonlama yapılmış revizyonlu modüller.",
      image: "/images/products/mekatronik-beyin.png"
    },
    {
      id: "kavrama-setleri",
      title: "Çift Kavrama (Debriyaj) Setleri",
      description: "LUK, Sachs gibi orijinal ekipman üreticilerinden çift kavramalı (kuru/ıslak) EDC kavrama balata setleri.",
      image: "/images/products/kavrama-seti.png"
    },
    {
      id: "tork-konvertoru",
      title: "Tork Konvertörleri (Türbin)",
      description: "Tam otomatik şanzımanların tork aktarma kısımlarına ait sıfır ve garantili revizyonlu türbinler.",
      image: "/images/products/tork-konvertoru.png"
    },
    {
      id: "valf-govdesi",
      title: "Şanzıman Valf Gövdeleri (Şartel)",
      description: "Vitesleme arızalarının başlıca sebebi olan şanzıman selenoid valfleri ve şartel blokları.",
      image: "/images/products/valf-govdesi.png"
    }
  ];

  return (
    <div className="flex flex-col w-full bg-gray-50 min-h-screen">
      <SEO 
        title="Orijinal Çıkma & Sıfır Şanzıman Satışı | Şanzımancı Yunus" 
        description="Şanzımancı Yunus'tan garantili çıkma şanzıman, sıfır vites kutusu, mekatronik beyni, çift kavrama setleri ve valf gövdeleri. Tüm Türkiye'ye hızlı kargo."
        keywords="çıkma şanzıman satışı, sıfır şanzıman fiyatları, şanzıman beyni mekatronik, dsg debriyaj seti, tork konvertörü, şanzıman parçaları"
        ogUrl="https://sanzimanciyunus.com/urunler"
      />
      <section className="bg-gray-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/hero/products.webp')] bg-cover bg-center" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 to-brand-700"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10 pt-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 border-l-4 border-brand-500 bg-gray-900/80 text-brand-400 font-semibold text-sm tracking-widest uppercase mb-6 shadow-xl rounded-r-md">
            <ShieldCheck className="w-4 h-4" /> Tüm Ürünler Faturalı ve Garantilidir
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">Şanzıman ve Yedek Parçalar</h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Şanzıman tamiri yapılır. Şanzıman parçaları bulunur. Uzman kadromuz ile Türkiye'nin her yerine kargo ile ulaştırılır.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 outline outline-1 outline-transparent hover:shadow-lg hover:outline-brand-200 hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-8 flex flex-col flex-1">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">{product.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6 flex-1 text-sm">
                    {product.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 mt-auto pt-6 border-t border-gray-100">
                    <a
                      href="tel:+905323972975"
                      className="flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-semibold py-3 px-4 rounded-lg transition-colors text-sm shadow-sm"
                    >
                      <Phone className="w-4 h-4" /> Hemen Ara
                    </a>
                    <a
                      href="https://wa.me/905323972975"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 border border-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors text-sm"
                    >
                      <WhatsAppIcon className="w-4 h-4" /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Premium CTA */}
          <div className="mt-20 relative rounded-2xl overflow-hidden bg-gray-900 shadow-2xl shadow-gray-900/30">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 to-brand-700" />
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-400/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 px-10 py-10">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-600/20 border border-brand-500/30 flex items-center justify-center">
                    <Wrench className="w-5 h-5 text-brand-400" />
                  </div>
                  <span className="text-brand-400 font-semibold text-sm tracking-widest uppercase">Parça Desteği</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
                  Aradığınız Parçayı Bulamadınız mı?
                </h3>
                <p className="text-gray-400 leading-relaxed text-base">
                  Stoklarımızda binlerce farklı kalem şanzıman yedek parçası mevcuttur. Araç ruhsatınızdaki şasi numarasını (VIN) bize ileterek dakikalar içinde doğru parçanın fiyat bilgisini alabilirsiniz.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0 w-full lg:w-auto">
                <a
                  href="tel:+905323972975"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-brand-900/40 text-sm whitespace-nowrap"
                >
                  <Phone className="w-4 h-4" />
                  Hemen Arayın
                </a>
                <a
                  href="https://wa.me/905323972975"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-white/10 hover:bg-white/20 border border-white/15 text-white font-semibold rounded-xl transition-all text-sm whitespace-nowrap"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  WhatsApp'tan Sor
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
