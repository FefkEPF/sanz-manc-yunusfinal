import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogType?: string;
  ogUrl?: string;
}

export default function SEO({ title, description, keywords, ogType = "website", ogUrl }: SEOProps) {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // 2. Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // 3. Update Meta Keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute("content", keywords);
    }

    // 4. Update Open Graph (OG) Tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute("content", title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement("meta");
      ogDesc.setAttribute("property", "og:description");
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute("content", description);

    let ogTypeMeta = document.querySelector('meta[property="og:type"]');
    if (!ogTypeMeta) {
      ogTypeMeta = document.createElement("meta");
      ogTypeMeta.setAttribute("property", "og:type");
      document.head.appendChild(ogTypeMeta);
    }
    ogTypeMeta.setAttribute("content", ogType);

    if (ogUrl) {
      let ogUrlMeta = document.querySelector('meta[property="og:url"]');
      if (!ogUrlMeta) {
        ogUrlMeta = document.createElement("meta");
        ogUrlMeta.setAttribute("property", "og:url");
        document.head.appendChild(ogUrlMeta);
      }
      ogUrlMeta.setAttribute("content", ogUrl);
    }
  }, [title, description, keywords, ogType, ogUrl]);

  return null;
}
