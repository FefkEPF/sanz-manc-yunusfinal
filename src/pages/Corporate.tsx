import FAQAccordion from "../components/FAQAccordion";
import { corporateTexts, corporateFaqs } from "../data/seoContent";
import SEO from "../components/SEO";

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
      <section className="bg-gray-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
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
      <section className="py-24">
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

            {/* Call To Action Insert */}
            <div className="mt-16 p-10 bg-gray-50 border border-gray-100 flex flex-col md:flex-row items-center gap-8 justify-between shadow-sm rounded-2xl">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 mt-0 tracking-tight">Şimdi Çözüme Ulaşın</h3>
                <p className="text-gray-600 m-0 leading-relaxed text-base">
                  Şanzıman sorununuzu büyütmeden kurumsal servisimize danışın. Pazartesi - Cumartesi 09:00 - 19:00 saatleri aralığında bizimle iletişime geçebilirsiniz.
                </p>
              </div>
              <div className="flex-shrink-0 flex gap-4">
                <a href="tel:+905323972975" className="px-6 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-semibold text-base transition-colors shadow-md">
                  📞 0532 397 29 75
                </a>
                <a href="https://wa.me/905323972975" target="_blank" rel="noreferrer" className="px-6 py-4 bg-[#25D366] hover:bg-[#1DA851] text-white rounded-xl font-semibold text-base transition-colors shadow-md">
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate FAQs */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <FAQAccordion faqs={corporateFaqs} />
        </div>
      </section>
    </div>
  );
}
