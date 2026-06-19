import FAQAccordion from "../components/FAQAccordion";
import { corporateTexts, corporateFaqs } from "../data/seoContent";
import SEO from "../components/SEO";
import { Phone, ShieldCheck, Clock } from "lucide-react";
import WhatsAppIcon from "../components/WhatsAppIcon";

export default function Corporate() {
  return (
    <div className="flex flex-col w-full bg-white">
      <SEO 
        title="Kurumsal & Hakkımızda | Şanzımancı Yunus" 
        description="Şanzımancı Yunus şanzıman sanayiinde otorite kurumdur. Yılların tecrübesiyle otomatik ve manuel vites kutusu revizyonu yapmaktayız. Misyonumuz ve vizyonumuz hakkında bilgi edinin."
        keywords="hakkımızda, şanzımancı yunus kurumsal, şanzıman sanayii, garantili şanzıman onarımı, şanzıman vizyon misyon"
        ogUrl="https://sanzimanciyunus.com/kurumsal"
      />
      {/* Hero Header */}
      <section className="bg-gray-900 py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/hero/corporate.webp')] bg-cover bg-center" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 to-brand-700"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 border-l-4 border-brand-500 bg-gray-900/80 text-brand-400 font-semibold text-sm tracking-wider uppercase mb-6 shadow-xl rounded-r-md">
            Kurumsal Bilgiler
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Hakkımızda</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Türkiye'nin dört bir yanına uzanan sanayi ağımızla, manuel ve otomatik şanzıman teknolojilerinin onarım sanatını icra ediyoruz. 
          </p>
        </div>
      </section>

      {/* Structured Content Area */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div 
            className="prose prose-lg sm:prose-xl prose-brand max-w-none text-gray-700 space-y-12 prose-headings:text-gray-900 prose-headings:font-bold prose-h1:text-4xl prose-h2:mt-12 prose-a:text-brand-600"
          >
            {/* About */}
            <div dangerouslySetInnerHTML={{ __html: corporateTexts.about }} />
            
            <hr className="border-gray-200" />
            
            {/* Mission */}
            <div dangerouslySetInnerHTML={{ __html: corporateTexts.mission }} />
            
            {/* Vision */}
            <div dangerouslySetInnerHTML={{ __html: corporateTexts.vision }} />
            
            <hr className="border-gray-200" />

            {/* Quality Policy */}
            <div dangerouslySetInnerHTML={{ __html: corporateTexts.quality }} />

            {/* Call To Action — Tasarıma Uygun Premium Versiyon */}
            <div className="mt-16 not-prose relative rounded-2xl overflow-hidden bg-gray-900 shadow-2xl shadow-gray-900/30">
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 to-brand-700" />
              {/* Decorative blobs */}
              <div className="absolute -top-16 -right-16 w-72 h-72 bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-brand-400/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 px-6 sm:px-10 py-8 sm:py-10">
                {/* Left: text */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-600/20 border border-brand-500/30 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-brand-400" />
                    </div>
                    <span className="text-brand-400 font-semibold text-sm tracking-widest uppercase">
                      Uzman Destek
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight leading-snug">
                    Şimdi Çözüme Ulaşın
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-base">
                    Şanzıman sorununuzu büyütmeden kurumsal servisimize danışın.
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <Clock className="w-4 h-4 text-brand-400" />
                    <span className="text-gray-400 text-sm">Pzt – Cmt &nbsp;|&nbsp; <span className="text-white font-semibold">09:00 – 19:00</span></span>
                  </div>
                </div>

                {/* Right: buttons */}
                <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0 w-full md:w-auto">
                  <a
                    href="tel:+905323972975"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-brand-900/40 text-sm whitespace-nowrap"
                  >
                    <Phone className="w-4 h-4" />
                    0532 397 29 75
                  </a>
                  <a
                    href="https://wa.me/905323972975"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-white/10 hover:bg-white/20 border border-white/15 text-white font-semibold rounded-xl transition-all text-sm whitespace-nowrap"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Corporate FAQs */}
      <section className="py-14 sm:py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <FAQAccordion faqs={corporateFaqs} />
        </div>
      </section>
    </div>
  );
}
