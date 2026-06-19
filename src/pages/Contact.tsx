import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from "lucide-react";
import SEO from "../components/SEO";

const CAR_BRANDS = [
  "Alfa Romeo", "Aston Martin", "Audi", "Bentley", "BMW", "Chery", "Chevrolet", 
  "Chrysler", "Citroen", "Dacia", "DS Automobiles", "Ferrari", "Fiat", "Ford", 
  "Honda", "Hyundai", "Isuzu", "Iveco", "Jaguar", "Jeep", "Kia", "Lada", 
  "Land Rover", "Lexus", "Maserati", "Mazda", "Mercedes-Benz", "Mini", "Mitsubishi", 
  "Nissan", "Opel", "Peugeot", "Porsche", "Renault", "Seat", "Skoda", "Smart", 
  "SsangYong", "Subaru", "Suzuki", "Togg", "Toyota", "Volkswagen", "Volvo"
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    brand: "",
    model: "",
    message: ""
  });
  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let { name, value } = e.target;

    // Remove emojis using regex
    value = value.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{2300}-\u{23FF}]/gu, '');

    // Strict formatting for phone number
    if (name === "phone") {
      const numbers = value.replace(/\D/g, ''); // Extract only digits
      if (numbers.length > 0) {
        let formatted = numbers;
        if (formatted[0] !== '0') formatted = '0' + formatted; // Force start with 0
        
        formatted = formatted.slice(0, 11); // Max 11 digits
        
        if (formatted.length > 3 && formatted.length <= 6) {
          value = `${formatted.slice(0, 4)} ${formatted.slice(4)}`;
        } else if (formatted.length > 6 && formatted.length <= 8) {
          value = `${formatted.slice(0, 4)} ${formatted.slice(4, 7)} ${formatted.slice(7)}`;
        } else if (formatted.length > 8) {
          value = `${formatted.slice(0, 4)} ${formatted.slice(4, 7)} ${formatted.slice(7, 9)} ${formatted.slice(9)}`;
        } else {
          value = formatted;
        }
      } else {
        value = "";
      }
    }

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.brand) {
      setStatus({ type: "error", message: "Lütfen zorunlu alanları (*) doldurun." });
      return;
    }

    setStatus({ type: "loading", message: "Talebiniz iletiliyor, lütfen bekleyin..." });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({
          type: "success",
          message: "Teklif talebiniz başarıyla e-posta adresimize iletildi. En kısa sürede dönüş yapacağız."
        });
        setFormData({
          name: "",
          phone: "",
          brand: "",
          model: "",
          message: ""
        });
      } else {
        setStatus({
          type: "error",
          message: result.error || "E-posta gönderilemedi. Lütfen daha sonra tekrar deneyin."
        });
      }
    } catch (error) {
      console.error("Error submitting quote:", error);
      setStatus({
        type: "error",
        message: "Bağlantı hatası oluştu. Lütfen internetinizi kontrol edip tekrar deneyin."
      });
    }
  };

  return (
    <div className="flex flex-col w-full bg-white">
      <SEO 
        title="İletişim & Konum Bilgileri | Şanzımancı Yunus" 
        description="Şanzımancı Yunus Esenyurt İstanbul atölyemizin adres bilgileri, müşteri hizmetleri telefon numaraları, WhatsApp destek kanalı ve hızlı ekspertiz hizmet formu."
        keywords="şanzımancı yunus iletişim, şanzıman tamiri telefon, esenyurt şanzıman konumu, istanbul şanzımancı telefon, şanzıman fiyat teklifi"
        ogUrl="https://sanzimanciyunus.com/iletisim"
      />
      {/* Header */}
      <section className="bg-gray-900 py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 to-brand-700"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('/images/hero/contact.webp')] bg-cover bg-center" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10 pt-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">İletişim & Hizmet Formu</h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Özellikle manuel şanzıman olmak üzere tüm onarım ve eksperiz hizmetlerimiz için bize ulaşın.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            
            {/* Contact Info blocks */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">Merkez Ofis</h2>
              
              <div className="flex items-start gap-4 p-6 bg-white border border-gray-100 rounded-2xl hover:border-brand-300 hover:shadow-md transition-all group">
                <div className="bg-gray-50 p-4 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors rounded-xl flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-1 tracking-tight">Müşteri Hizmetleri</h3>
                  <p className="text-gray-600 mb-3 text-sm">Acil şanzıman sorunu mu yaşıyorsunuz? Hemen arayın.</p>
                  <div className="flex flex-col gap-1">
                    <a href="tel:+905323972975" className="text-xl font-bold text-brand-600 hover:text-brand-700 transition-colors">0532 397 29 75</a>
                    <a href="tel:+902124286929" className="text-base font-semibold text-gray-700 hover:text-brand-600 transition-colors">0212 428 69 29</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white border border-gray-100 rounded-2xl hover:border-brand-300 hover:shadow-md transition-all group">
                <div className="bg-gray-50 p-4 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors rounded-xl flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-1 tracking-tight">E-Posta Adresimiz</h3>
                  <p className="text-gray-600 mb-3 text-sm">Detaylı soru ve işbirlikleri için mail atabilirsiniz.</p>
                  <a href="mailto:info@sanzimanciyunus.com" className="text-[15px] font-semibold text-gray-800 hover:text-brand-600 transition-colors">info@sanzimanciyunus.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white border border-gray-100 rounded-2xl hover:border-brand-300 hover:shadow-md transition-all group">
                <div className="bg-gray-50 p-4 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors rounded-xl flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-1 tracking-tight">Çalışma Saatleri</h3>
                  <p className="text-gray-600 mb-1 text-sm">Pazartesi - Cumartesi</p>
                  <p className="text-lg font-bold text-gray-800">09:00 - 19:00</p>
                  <p className="text-xs text-gray-500 mt-2 font-medium tracking-wide">Pazar Kapalı</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white border border-gray-100 rounded-2xl hover:border-brand-300 hover:shadow-md transition-all group">
                <div className="bg-gray-50 p-4 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors rounded-xl flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-1 tracking-tight">Merkez Servis Adresi</h3>
                  <p className="text-gray-600 text-sm">Akşemseddin, 209. Sk. No:30 D:1, 34510</p>
                  <p className="text-gray-800 font-bold mt-2 text-base">Esenyurt / İstanbul</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-8 bg-gray-900 rounded-2xl border border-gray-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <MapPin className="w-32 h-32 text-brand-500" />
                </div>
                <div className="relative z-10 w-full">
                  <h3 className="font-bold text-white text-xl mb-4 tracking-tight">Türkiye Geneli Hizmet</h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    Sadece İstanbul değil! <b>Şanzıman tamiri yapılır. Şanzıman parçaları bulunur. Uzman kadromuz ile Türkiye'nin her yerine kargo ile ulaştırılır.</b> 
                    Eğer farklı bir ildeyseniz kargo ile arızalı şanzımanınızı gönderebilirsiniz.
                  </p>
                </div>
              </div>

            </div>

            {/* Service Form */}
            <div id="hizmet-formu" className="bg-white p-6 sm:p-10 lg:p-12 shadow-xl shadow-gray-200/50 border border-gray-100 rounded-2xl relative">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Hızlı Ekspertiz Formu</h2>
              <p className="text-gray-600 mb-8 text-base">Aracınızın bilgilerini eksiksiz doldurun, size en uygun tamir seçeneği veya parça mevcudiyetini iletelim.</p>
              
              {status.type !== "idle" && (
                <div className={`p-4 rounded-lg mb-6 text-sm font-medium ${
                  status.type === "success" ? "bg-green-50 text-green-800 border border-green-200" :
                  status.type === "error" ? "bg-red-50 text-red-800 border border-red-200" :
                  "bg-blue-50 text-blue-800 border border-blue-200 animate-pulse"
                }`}>
                  {status.message}
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit}>
                <datalist id="car-brands">
                  {formData.brand.length > 0 && CAR_BRANDS.map(brand => (
                    <option key={brand} value={brand} />
                  ))}
                </datalist>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[13px] font-semibold text-gray-700 mb-2 tracking-wide uppercase">Adınız Soyadınız *</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" 
                      placeholder="Ahmet Yılmaz" 
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-gray-700 mb-2 tracking-wide uppercase">Telefon *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" 
                      placeholder="05XX XXX XX XX" 
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[13px] font-semibold text-gray-700 mb-2 tracking-wide uppercase">Araç Markası *</label>
                    <input 
                      type="text" 
                      name="brand"
                      list="car-brands"
                      required
                      value={formData.brand}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" 
                      placeholder="Örn: Volkswagen" 
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-gray-700 mb-2 tracking-wide uppercase">Model / Yıl</label>
                    <input 
                      type="text" 
                      name="model"
                      value={formData.model}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" 
                      placeholder="Örn: Passat 2018" 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-[13px] font-semibold text-gray-700 mb-2 tracking-wide uppercase">Şikayet veya Arıza</label>
                  <textarea 
                    rows={5} 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all resize-none" 
                    placeholder="Vites geçişlerinde sertlik, debriyaj kaçırma, cırtlama sesi... vb."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={status.type === "loading"}
                  className="w-full flex items-center justify-center gap-3 py-4 bg-brand-600 hover:bg-brand-500 disabled:bg-brand-400 text-white font-semibold rounded-lg transition-colors shadow-md text-base mt-2 cursor-pointer disabled:cursor-not-allowed"
                >
                  {status.type === "loading" ? (
                    <>
                      <span>Gönderiliyor...</span>
                      <Loader2 className="w-5 h-5 animate-spin" />
                    </>
                  ) : (
                    <>
                      <span>Gönder ve Fiyat Al</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
