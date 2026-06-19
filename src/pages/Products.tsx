import { MessageCircle, Settings, Phone, ShieldCheck } from "lucide-react";
import SEO from "../components/SEO";

export default function Products() {
  const products = [
    {
      id: "cikma-sanziman",
      title: "Orijinal Çıkma Şanzımanlar",
      description: "Test cihazlarında %100 kontrol edilmiş, revizyonlu ve garantili orijinal çıkma şanzımanlar. (DSG, EDC, CVT, ZF)",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "sifir-sanziman",
      title: "Sıfır (Kutu) Şanzımanlar",
      description: "Tüm marka ve modeller için üretici onaylı (OEM) kutulu, garantili sıfır komple şanzıman üniteleri.",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "mekatronik",
      title: "Mekatronik & Şanzıman Beyni",
      description: "Vites geçişlerini sağlayan hidrolik ve elektronik beyin üniteleri (TCM). Yeni ve klonlama yapılmış revizyonlu modüller.",
      image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b6?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "kavrama-setleri",
      title: "Çift Kavrama (Debriyaj) Setleri",
      description: "LUK, Sachs gibi orijinal ekipman üreticilerinden DSG (Kuru/Islak) ve EDC kavrama balata setleri.",
      image: "https://images.unsplash.com/photo-1616456093817-640be0cce5ea?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "tork-konvertoru",
      title: "Tork Konvertörleri (Türbin)",
      description: "Tam otomatik şanzımanların tork aktarma kısımlarına ait sıfır ve garantili revizyonlu türbinler.",
      image: "https://images.unsplash.com/photo-1536250674068-07decaef04fe?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "valf-govdesi",
      title: "Şanzıman Valf Gövdeleri (Şartel)",
      description: "Vitesleme arızalarının başlıca sebebi olan şanzıman selenoid valfleri ve şartel blokları.",
      image: "https://images.unsplash.com/photo-1620601550974-9040c5417830?q=80&w=800&auto=format&fit=crop"
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
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1563260797-cb5cd70254c8?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
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
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-white/95 backdrop-blur-sm text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-2 border border-white/20">
                      <Settings className="w-3 h-3 text-brand-600" /> Stokta Var
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-1">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">{product.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6 flex-1 text-sm">
                    {product.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 mt-auto pt-6 border-t border-gray-100">
                    <a 
                      href="https://wa.me/905323972975" 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white font-semibold py-3 px-4 rounded-lg transition-colors text-sm"
                    >
                      <MessageCircle className="w-4 h-4" /> Bilgi Al
                    </a>
                    <a 
                      href="tel:+905323972975"
                      className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-4 rounded-lg transition-colors text-sm"
                    >
                      <Phone className="w-4 h-4 text-brand-400" /> Hemen Ara
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-white border border-gray-100 rounded-2xl p-10 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-lg shadow-gray-200/40 outline outline-1 outline-brand-100">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-1 bg-brand-600 rounded-full"></div>
                <h3 className="text-3xl font-bold text-gray-900 tracking-tight">Aradığınız Parçayı Bulamadınız mı?</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-0">
                Stoklarımızda binlerce farklı kalem şanzıman yedek parçası mevcuttur. Araç ruhsatınızdaki şasi numarasını (VIN) bize WhatsApp'tan ileterek dakikalar içinde doğru parçanın fiyat bilgisini alabilirsiniz.
              </p>
            </div>
            <div className="flex-shrink-0 w-full sm:w-auto">
               <a 
                  href="https://wa.me/905323972975" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 bg-gray-900 hover:bg-gray-800 text-white px-8 py-5 rounded-xl font-semibold w-full text-base transition-all shadow-md"
                >
                  <MessageCircle className="w-6 h-6 text-[#25D366]" />
                  WhatsApp'tan Parça Sor
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
