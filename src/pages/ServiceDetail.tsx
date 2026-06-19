import { useParams, Link, Navigate } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  Phone,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { useState } from "react";
import { servicesData } from "../data/seoContent";
import SEO from "../components/SEO";
import WhatsAppIcon from "../components/WhatsAppIcon";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find((s) => s.slug === slug);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!service) {
    return <Navigate to="/hizmetlerimiz" replace />;
  }

  // Schema.org Service structured data
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription || service.description,
    provider: {
      "@type": "AutoRepair",
      name: "Şanzımancı Yunus",
      telephone: "+905323972975",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Esenyurt",
        addressRegion: "İstanbul",
        addressCountry: "TR",
      },
    },
  };

  // Related services (exclude current)
  const relatedServices = servicesData
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title={`${service.title} | Şanzımancı Yunus`}
        description={service.metaDescription || service.description}
        keywords={service.keywords || `${service.title}, şanzıman tamiri İstanbul`}
        ogUrl={`https://sanzimanciyunus.com/hizmetlerimiz/${service.slug}`}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* ── HERO ── */}
      <section className="relative bg-gray-900 pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[url('/images/hero/services.webp')] bg-cover bg-center" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 to-brand-700" />
        {/* Decorative blobs */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-brand-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to="/hizmetlerimiz"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-400 font-medium mb-8 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Tüm Hizmetler
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-brand-600/20 border border-brand-500/30 flex items-center justify-center">
              <Wrench className="w-6 h-6 text-brand-400" />
            </div>
            <span className="text-brand-400 font-semibold text-sm tracking-wider uppercase">
              Hizmet Detayı
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6 tracking-tight">
            {service.title}
          </h1>

          {service.shortDesc && (
            <p className="text-gray-300 text-lg sm:text-xl max-w-3xl leading-relaxed mb-10">
              {service.shortDesc}
            </p>
          )}

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+905323972975"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-brand-900/40 text-base"
            >
              <Phone className="w-5 h-5" /> Hemen Arayın
            </a>
            <a
              href="https://wa.me/905323972975"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-xl transition-all text-base"
            >
              <WhatsAppIcon className="w-5 h-5" /> WhatsApp ile Yaz
            </a>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* LEFT: Highlights + Process + FAQ */}
          <div className="lg:col-span-2 space-y-16">

            {/* Highlights */}
            {service.highlights && service.highlights.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <ShieldCheck className="w-7 h-7 text-brand-600" />
                  Bu Hizmetin Avantajları
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.highlights.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 hover:border-brand-200 hover:bg-brand-50/30 transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium text-sm leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Process */}
            {service.process && service.process.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  Nasıl Çalışıyoruz?
                </h2>
                <div className="relative">
                  {/* vertical line */}
                  <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-100 hidden sm:block" />
                  <div className="space-y-6">
                    {service.process.map((step) => (
                      <div
                        key={step.step}
                        className="relative flex gap-6 group"
                      >
                        {/* Step number */}
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border-2 border-brand-500 text-brand-600 font-bold text-sm flex items-center justify-center z-10 shadow-sm group-hover:bg-brand-600 group-hover:text-white transition-colors">
                          {step.step}
                        </div>
                        <div className="bg-white border border-gray-100 rounded-xl p-5 flex-1 shadow-sm hover:shadow-md hover:border-brand-100 transition-all">
                          <h3 className="font-bold text-gray-900 mb-2">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* FAQ */}
            {service.faqs && service.faqs.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Sıkça Sorulan Sorular
                </h2>
                <div className="space-y-3">
                  {service.faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="border border-gray-200 rounded-xl overflow-hidden"
                    >
                      <button
                        id={`faq-btn-${service.slug}-${i}`}
                        onClick={() =>
                          setOpenFaq(openFaq === i ? null : i)
                        }
                        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors gap-4"
                        aria-expanded={openFaq === i}
                      >
                        <span className="font-semibold text-gray-900 text-sm sm:text-base">
                          {faq.question}
                        </span>
                        {openFaq === i ? (
                          <ChevronUp className="w-5 h-5 text-brand-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        )}
                      </button>
                      {openFaq === i && (
                        <div className="px-6 pb-5 bg-gray-50 border-t border-gray-100">
                          <p className="text-gray-600 text-sm leading-relaxed pt-4">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* RIGHT: Sticky sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-5">
              {/* Contact card */}
              <div className="bg-gray-900 rounded-2xl p-7 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 to-brand-700" />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-600/10 rounded-full blur-2xl" />
                <h3 className="text-xl font-bold mb-2">Hemen Teklif Alın</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Aracınızın marka ve modelini paylaşın, size en kısa sürede dönüş yapalım.
                </p>
                <a
                  href="tel:+905323972975"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-brand-600 hover:bg-brand-500 rounded-xl font-semibold text-sm transition-colors mb-3"
                >
                  <Phone className="w-4 h-4" /> 0532 397 29 75
                </a>
                <a
                  href="https://wa.me/905323972975"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-white/10 hover:bg-white/20 border border-white/15 rounded-xl font-semibold text-sm transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" /> WhatsApp
                </a>
              </div>

              {/* Guarantee badge */}
              <div className="bg-brand-50 border border-brand-100 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <ShieldCheck className="w-8 h-8 text-brand-600" />
                  <h4 className="font-bold text-gray-900">Garanti Güvencesi</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Tüm işlemlerimiz faturalı ve belirli km/yıl garantisi kapsamında gerçekleştirilmektedir.
                </p>
              </div>

              {/* Working hours */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-4 text-sm">Çalışma Saatleri</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Pzt – Cmt</span>
                    <span className="font-semibold text-gray-900">09:00 – 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Pazar</span>
                    <span className="font-semibold text-red-500">Kapalı</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* ── RELATED SERVICES ── */}
        {relatedServices.length > 0 && (
          <section className="mt-16 sm:mt-24 pt-12 sm:pt-16 border-t border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Diğer Hizmetlerimiz
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((s) => (
                <Link
                  key={s.id}
                  to={`/hizmetlerimiz/${s.slug}`}
                  className="group bg-white border border-gray-100 rounded-xl p-6 hover:border-brand-200 hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-base">
                    {s.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                    {s.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-brand-600 font-semibold text-sm group-hover:gap-2.5 transition-all">
                    Detayları Gör <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
