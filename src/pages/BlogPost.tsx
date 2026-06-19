import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { blogPosts, faqs } from "../data/seoContent";
import FAQAccordion from "../components/FAQAccordion";
import SEO from "../components/SEO";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Schema.org Article setup conceptually
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "author": {
      "@type": "Organization",
      "name": post.author
    },
    "datePublished": post.date,
    "description": post.excerpt
  };

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title={`${post.title} | Şanzımancı Yunus`} 
        description={post.excerpt}
        keywords={`${post.tags.join(", ")}, şanzıman rehberi, şanzıman arızaları`}
        ogUrl={`https://sanzimanciyunus.com/blog/${post.slug}`}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <Link to="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-600 font-semibold mb-12 transition-colors text-sm">
          <ArrowLeft className="w-4 h-4" /> Blog'a Dön
        </Link>
        
        <header className="mb-12 border-b border-gray-100 pb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-500 font-medium text-sm">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-brand-500" /> {post.date}</span>
            <span className="flex items-center gap-1.5 border-l border-gray-200 pl-4"><User className="w-4 h-4 text-brand-500" /> {post.author}</span>
          </div>
        </header>

        <article 
          className="prose prose-lg prose-brand max-w-none text-gray-700 prose-headings:text-gray-900 prose-headings:font-bold prose-headings:tracking-tight prose-h2:mt-12 prose-a:text-brand-600 prose-a:font-semibold"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-16 pt-8 border-t border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Tag className="w-5 h-5 text-brand-500" /> İlgili Etiketler
          </h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, idx) => (
              <span key={idx} className="bg-gray-50 border border-gray-100 text-gray-700 px-4 py-2 rounded-lg text-xs font-semibold hover:border-brand-200 hover:text-brand-600 cursor-default transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* SEO FAQ Section placed logically at the bottom of the long content pieces */}
      <div className="bg-gray-50 py-14 sm:py-20 border-t border-gray-100 mt-8">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <FAQAccordion faqs={faqs} />
         </div>
      </div>

    </div>
  );
}
