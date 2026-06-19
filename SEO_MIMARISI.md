# Şanzımancı Yunus - Kapsamlı SEO ve Sistem Mimarisi Raporu

Bir SEO uzmanı ve TALL Stack (Tailwind, Alpine.js, Laravel, Livewire) mimarı gözüyle, "Şanzımancı Yunus" için organik aramalarda 1. sırayı hedefleyen, rakibi domine edecek yapı aşağıda detaylandırılmıştır.

## 1. SEO Odaklı URL ve Silo Mimarisi

Arama motorları hiyerarşiyi (silo) sever. URL yapısı hem kullanıcıya (ne aradığını URL'den anlayabilme) hem de bota (sayfanın bağlamı) hitap etmelidir.

**Yedek Parça ve Ürün Silosu:**
Temel strateji, OEM kodları, marka, model ve parça türünü URL'de geçirmektir.
* Ana Kategori: `/yedek-parca`
* Kategori + Parça Türü: `/yedek-parca/senkromec`, `/yedek-parca/ayna-mahruti`
* Marka + Model Kırılımı (Rakibi Ezmek İçin): `/yedek-parca/{marka}/{model}` -> Örn: `/yedek-parca/volkswagen/golf`
* Tam Kırılım (Ürün Detay): `/yedek-parca/{marka}/{model}/{parca-kategorisi}/{urun-slug}` 
  * Örn: `/yedek-parca/volkswagen/golf/senkromec/golf-7-1-6-tdi-1-vites-senkromeci-oem-02t311239`

**Hizmetler Silosu (Local & Auto Repair SEO):**
* Ana Hizmetler: `/hizmetlerimiz`
* Hizmet Detay: `/hizmetlerimiz/otomatik-sanziman-tamiri`
* Geo-Targeting (Yerel SEO): `/hizmetlerimiz/sanziman-tamiri/istanbul-esenyurt` (Bölgesel aramalar için)

**Blog ve Bilgi Silosu:**
* Ana Blog: `/blog` veya `/sanziman-rehberi`
* Kategori: `/blog/ariza-belirtileri`
* İçerik Detay: `/blog/dsg-sanziman-beyin-arizasi-belirtileri`

---

## 2. Veri Tabanı (MySQL) Şeması (Laravel Migration Yapısı)

Spesifik şanzıman veritabanı, araç uyumluluklarını ve OEM kodlarını kusursuz yönetmelidir.

**1. `brands` (Markalar)**
- `id`, `name` (Örn: Volkswagen), `slug`, `logo_path`, `is_active`

**2. `car_models` (Modeller - One-to-Many with Brands)**
- `id`, `brand_id`, `name` (Örn: Golf), `slug`

**3. `engine_types` (Motor Tipleri)**
- `id`, `name` (Örn: 1.6 TDI, 1.3 Multijet, 1.5 dCi), `code`

**4. `part_categories` (Parça Kategorileri - Hiyerarşik/Self-Referencing olabilir)**
- `id`, `parent_id` (Alt kategoriler için), `name` (Örn: Senkromeç), `slug`

**5. `products` (Ürünler/Parçalar)**
- `id`, `part_category_id`, `name`, `slug`, `oem_code` (Kritik: OEM arayanlar için exact match), `sku` (Stok kodu), `description`, `price`, `stock_status`

**6. `product_car_model` (Pivot Tablo - Many-to-Many)**
Bir parça birden fazla modele uyabilir.
- `product_id`, `car_model_id`, `start_year`, `end_year`

**7. `product_engine_type` (Pivot Tablo - Many-to-Many)**
Bir parça spesifik motorlara uyabilir.
- `product_id`, `engine_type_id`

**8. `articles` (Blog / Rehber)**
- `id`, `category_id`, `title`, `slug`, `content`, `meta_title`, `meta_desc`, `published_at`

*Laravel Eloquent İlişkileri:* `Product::with(['carModels', 'engineTypes', 'category'])->where('oem_code', $request->oem)->first();`

---

## 3. Technical SEO ve Schema Markup Planı

Google'ın sayfa içeriğini %100 doğru anlaması için JSON-LD Schema biçimlendirmesi şarttır.

**JSON-LD Schema Stratejisi:**
1. **Ürün Sayfaları (`Product` & `Offer`):** Fiyat, stok durumu (InStock), değerlendirmeler (AggregateRating) ve özellikle `gtin` veya `sku` alanlarına OEM kodunu ekleyerek Google Alışveriş ve organik aramalarda parça koduyla çıkan sonuçlara hükmedin.
2. **Hizmet Sayfaları (`AutoRepair` & `LocalBusiness`):** Çalışma saatleri, konum, telefon ve verilen hizmetler (Örn: "Transmission Repair") belirtilmeli.
3. **Blog Sayfaları (`Article` & `FAQPage`):** Makalelere eklenen Sıkça Sorulan Sorular bölümü (Örn: "Şanzıman vuruntusu nasıl geçer?") `FAQPage` schema ile işaretlenip "Sıfırıncı Sıra Seçkin Snippet" (Featured Snippet) alanına oturulmalı.

**TALL Stack Performans (Core Web Vitals) Önlemleri:**
* **Livewire Optimizesi:** Livewire bileşenlerini sayfanın altına atıp, sadece etkileşim olduğunda (tıklama, arama) DOM'u güncelleyin (`wire:ignore` kullanarak statik kısımların gereksiz render edilmesini önleyin). Yüklü listelemelerde (binlerce parça) sayfalamayı (pagination) Ajax/Livewire ile yaparken URL state'ini güncellemeyi unutmayın (SEO için `?page=2`).
* **Tailwind ve Assets:** Tailwind'in JIT compiler'ı zaten minimum CSS üretir. Görselleri (özellikle yedek parça fotoğrafları) Spatie Media Library aracılığıyla `WebP` veya `AVIF` formatına convert edin. Laravel Blade üzerinde `loading="lazy"` attribute'unu tüm ürün görsellerine ekleyin.
* **Alpine.js:** Modal, dropdown ve tab gibi basit interaktiviteleri Livewire (sunucu gidiş-dönüşü) yerine Alpine.js (istemci tarafı) ile çözerek TTFB (Time to First Byte) ve TTI (Time to Interactive) sürelerini minimize edin.

---

## 4. İçerik ve Blog Stratejisi (Topical Authority)

Rakip sadece URL spamı (programmatic SEO) yapıyor olabilir. Onları içerik derinliğiyle (Topical Authority) geçeceğiz.

**Hub & Spoke Modeli (İçerik Kümeleri):**
* **Hub Sayfası (Kapsamlı Rehber):** "Otomatik Şanzıman Arızaları ve Çözüm Rehberi" (Min. 2500 kelime).
* **Spoke Sayfalar (Spesifik/Long-Tail Alt İçerikler):** 
  * "DSG Şanzıman Beyin Arızası Belirtileri Nelerdir?"
  * "CVT Şanzıman Isınma Sorunu Neden Olur?"
  * "EDC Şanzıman Kavrama Bittiği Nasıl Anlaşılır?"

**Internal Link (İç Link) Stratejisi:**
Trafiği blogdan çekip satışa yönlendireceğiz.
1. Kullanıcı Google'da "Golf 7 DSG 1'den 2'ye geçerken titreme" arar.
2. Bizim Spoke sayfamıza girer. (İçerik problemi ve çözümü anlatır).
3. Paragrafın tam ortasında ve sonunda: *"Bu sorunu çözmek için Orijinal DSG Kavrama Seti (LUK) gerekmektedir."* diyerek, `/yedek-parca/volkswagen/golf/kavrama/dsg-kavrama-seti` ürün sayfasına keyword-rich (DSG Kavrama Seti) bir çapa metni (anchor text) ile link verilir.
4. Ayrıca sayfanın en altına Local SEO için bir CTA (Call To Action) eklenir: *"Kavrama değişimi için Esenyurt/İstanbul merkezimizde garantili hizmet sunuyoruz. [Hemen Fiyat Alın]"* -> Hizmet/İletişim sayfasına yönlendirilir.

Bu strateji, sitenizi Google gözünde sadece bir "yedek parça dükkanı" olmaktan çıkarıp, "şanzıman konusunda Türkiye'nin en otoriteli kaynağı" haline getirecektir.
