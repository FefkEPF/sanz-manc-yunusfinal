import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";
import { blogPosts } from "../data/seoContent";
import SEO from "../components/SEO";

export default function BlogList() {
  return (
    <div className="flex flex-col w-full bg-gray-50 min-h-screen">
      <SEO 
        title="Şanzıman Rehberi & Teknik Bilgi Blogu | Şanzımancı Yunus" 
        description="Şanzımancı Yunus'tan otomatik şanzıman arıza belirtileri, EDC kavrama değişim ipuçları, EDC beyin arızası tamir yöntemleri ve şanzıman yağı değişim rehberi."
        keywords="şanzıman rehberi, şanzıman blogu, dsg arıza belirtileri, edc beyin arızası, şanzıman yağı ne zaman değişir, otomatik vites bakımı"
        ogUrl="https://sanzimanciyunus.com/blog"
      />
      {/* Header */}
      <section className="bg-gray-900 py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 to-brand-700"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10 pt-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">Şanzıman Rehberi & Blog</h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Mekatronik arızalardan şanzıman kullanım kurallarına kadar teknik servisimizin paylaştığı en değerli makaleler.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:border-brand-300 hover:shadow-lg transition-all duration-300 flex flex-col h-full group">
                <div className="p-6 sm:p-8 lg:p-10 flex flex-col flex-1">
                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-gray-500 mb-4 tracking-wide">
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-brand-500" /> {post.date}</span>
                    <span className="flex items-center gap-1.5 border-l border-gray-200 pl-4"><User className="w-4 h-4 text-brand-500" /> {post.author}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2 tracking-tight group-hover:text-brand-600 transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-600 mb-8 line-clamp-3 leading-relaxed flex-1 text-sm">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-auto pt-6 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag, i) => (
                        <span key={i} className="inline-flex items-center gap-1 px-3 py-1 bg-gray-50 text-gray-700 rounded-lg text-xs font-medium border border-gray-100">
                          <Tag className="w-3 h-3 text-brand-500" /> {tag}
                        </span>
                      ))}
                    </div>
                    <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 group text-sm transition-colors">
                      Makaleyi Oku <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
