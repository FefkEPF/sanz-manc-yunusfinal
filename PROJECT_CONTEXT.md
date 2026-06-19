# Şanzımancı Yunus - Proje Bağlamı ve Güncel Durum

Bu dosya, model geçişlerinde veya yeni oturumlarda projenin güncel durumunu, yapısını ve yapılan işlemleri hızlıca anlamak için oluşturulmuştur. Her yeni işlem sonrasında bu dosya güncellenmelidir.

---

## 🛠️ Teknoloji Yığını (Tech Stack)
- **Framework:** React 19 (TypeScript ile)
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS v4
- **Routing:** React Router v7
- **Icons:** Lucide React
- **Optimizasyon Araçları:** `cwebp` (WebP Dönüştürücü)

---

## 📁 Proje Yapısı ve Dizinler
- `public/`: Statik varlıklar (Logolar vb.)
  - [sanzimanci_yunus_logo.webp](file:///Users/zafer/antigravity/Şanzımancı-Yunus-Kurumsal-Web-Sitesi/public/sanzimanci_yunus_logo.webp): Sıkıştırılmış yüksek kaliteli kurumsal logo.
- `src/`: Kaynak kodlar
  - `components/`: Ortak bileşenler (Layout, Akordeon vb.)
  - `pages/`: Sayfa bileşenleri (Home, Corporate, Services, Brands, Products, Contact, Blog)
  - `data/`: SEO içerikleri, marka verileri vb.
  - `App.tsx`: Rotalama ve ana uygulama bileşeni.
  - `index.css`: Tailwind CSS v4 importları ve global stiller.
- `package.json`: Bağımlılıklar ve npm scriptleri.
- `index.html`: Giriş HTML dosyası (Dil ayarı `tr` olarak yapılandırıldı).
- `vite.config.ts`: Vite yapılandırması.

---

## 🚀 Çalışan Süreçler (Active Tasks)
- **Local Dev Server:** `npm run dev` ile yerel sunucu çalışır vaziyettedir.
  - **URL:** [http://localhost:3000/](http://localhost:3000/)
  - **Port:** 3000
  - **Host:** 0.0.0.0

---

## 🔄 Yapılan Değişiklikler ve Güncellemeler (Change Log)

### 1. Projenin Ayağa Kaldırılması
- `npm install` çalıştırılarak tüm paketler kuruldu.
- `npm run dev` ile sunucu yerelde ayağa kaldırıldı.

### 2. Logo Optimizasyonu ve Entegrasyonu
- Kullanıcı tarafından sağlanan `sanzımancı_yunus_logo.png` görseli `cwebp` aracıyla yüksek kalitede sıkıştırılarak `public/sanzimanci_yunus_logo.webp` dosyasına dönüştürüldü (13.6 KB).
- Orijinal PNG temizlendi.
- [Layout.tsx](file:///Users/zafer/antigravity/Şanzımancı-Yunus-Kurumsal-Web-Sitesi/src/components/Layout.tsx) güncellenerek:
  - Header'daki metin logo yerine yeni WebP logo entegre edildi. Başlangıçta `h-12` (48px) olan yükseklik, global UI standartlarına ve yerleşime daha uygun olan `h-14` (56px) değerine yükseltilerek okunabilirliği artırıldı.
  - Footer'daki metin logo yerine yeni WebP logo `brightness-0 invert` filtresiyle (koyu arka planla uyumlu olması için beyaz renkte) eklendi. Buradaki yükseklik de daha belirgin olması için `h-16` (64px) olarak ayarlandı.

### 3. Kapsamlı SEO ve Yerel (Local) SEO Altyapısı
- **Dil Ayarı:** [index.html](file:///Users/zafer/antigravity/Şanzımancı-Yunus-Kurumsal-Web-Sitesi/index.html) dosyasında sitenin ana dili Türkçe (`lang="tr"`) yapıldı.
- **Dinamik SEO Bileşeni:** [SEO.tsx](file:///Users/zafer/antigravity/Şanzımancı-Yunus-Kurumsal-Web-Sitesi/src/components/SEO.tsx) adında dinamik bir React meta etiket yöneticisi oluşturuldu. Bu bileşen, her sayfa değişiminde tarayıcı başlığını (`document.title`), meta açıklamayı (`description`), anahtar kelimeleri (`keywords`) ve Open Graph (sosyal medya paylaşım) etiketlerini dinamik olarak günceller.
- **Tüm Sayfalara SEO Entegrasyonu:** SEO bileşeni projedeki tüm sayfalara (Ana Sayfa, Kurumsal, Hizmetlerimiz, Markalar, Ürünlerimiz, BlogList, BlogPost ve İletişim) entegre edildi. Her sayfa için yerel SEO (İstanbul, Esenyurt vb.) anahtar kelimeleriyle zenginleştirilmiş özel başlıklar ve açıklamalar tanımlandı.
- **Yerel SEO ve Şema İşaretlemesi (JSON-LD Schema):**
  - Ana sayfaya `AutoRepair` (Oto Tamir Servisi) standartlarında zenginleştirilmiş yerel şema verileri (adres, koordinatlar, çalışma saatleri ve telefon numaraları) JSON-LD biçiminde dinamik olarak enjekte edildi.
  - Blog detay sayfalarında Google arama botları için `Article` şema işaretlemeleri yapılandırıldı.
- **SEO Standart Dosyaları:**
  - **`robots.txt`:** Crawl yönergelerini içeren ve sitemap yolunu gösteren `public/robots.txt` dosyası oluşturuldu.
  - **`sitemap.xml`:** Tüm statik ve dinamik blog sayfalarının taranma önceliklerini (`priority`) ve frekanslarını barındıran `public/sitemap.xml` dosyası oluşturuldu.
  - **`llms.txt`:** Modern yapay zeka ve LLM arama crawler botları için site özetini ve yapısını barındıran `public/llms.txt` dosyası oluşturuldu.

### 4. Instagram Gönderi Akışı (Feed) Entegrasyonu
- İletilen 6 adet Instagram gönderisinin kapak görselleri ilk etapta Instagram'ın varsayılan kare kırpılmış (cropped) CDN linklerinden çekilmişti; bu durum şanzıman parçalarının kadraja girmemesine (sadece üstteki kırmızı alet panosunun görünmesine) neden oluyordu.
- Sorunu çözmek için tarayıcı subagent yardımıyla Instagram sayfalarından kırpılmamış (uncropped - `1440x1920` çözünürlüğünde dikey) orijinal görsel linkleri çekilerek indirildi.
- İndirilen görseller `cwebp` aracıyla yüksek kalitede sıkıştırılmış WebP formatına dönüştürülerek `public/images/instagram/post_1.webp` - `post_6.webp` dosyalarının üzerine yazıldı.
- [Home.tsx](file:///Users/zafer/antigravity/Şanzımancı-Yunus-Kurumsal-Web-Sitesi/src/pages/Home.tsx) üzerinde SSS (FAQ) alanının altına şık ve modern bir Instagram alanı eklendi:
  - Mobil uyumlu, 6 sütunlu (`grid-cols-2 md:grid-cols-3 lg:grid-cols-6`) duyarlı görsel kart tasarımı.
  - Kartların en/boy oranı dikey görselleri kesmeden tam gösterebilmek amacıyla `aspect-square` değerinden **`aspect-[3/4]`** değerine güncellendi. Böylece fotoğrafların altındaki şanzımanlar tamamen görünür hale getirildi.
  - Hover (üzerine gelme) efektiyle animasyonlu şekilde "Gönderiyi Gör" overlay katmanı ve Instagram markalama ikonu eklendi.
  - Kullanıcıyı doğrudan `@sanzimanci_yunus` profiline yönlendiren, Instagram gradyanlı modern "Takip Et" butonu eklendi.

### 5. Kahraman (Hero) Görsel Slayt Gösterisi Güncellemesi
- Kullanıcı tarafından iletilen `sanzıman_gorselleri/` klasöründeki 8 adet gerçek atölye şanzıman görseli (Ford Transit ve Renault Master modellerine ait) `cwebp` aracıyla yüksek kalitede WebP formatına dönüştürüldü.
- Dönüştürülen dosyalar `public/images/slider/` klasörüne temiz isimlendirmelerle (`ford_transit_X.webp`, `renault_master_X.webp`) kaydedilerek orijinal ağır JPG klasörü temizlendi.
- [Home.tsx](file:///Users/zafer/antigravity/Şanzımancı-Yunus-Kurumsal-Web-Sitesi/src/pages/Home.tsx) üzerinde yer alan slayt gösterisi (Slider) bu görselleri karışık/shuffled sırada kullanacak şekilde güncellendi:
  - Slayt gösterisinin sağ alt/orta kısmına, gösterilen aktif şanzıman görselinin marka ve model ismini ("Ford Transit Şanzıman", "Renault Master Şanzıman") ve revizyon açıklamasını dinamik olarak gösteren yarı şeffaf buzlu cam (`backdrop-blur-md bg-gray-950/70`) bir bilgi paneli eklendi.
  - Slayt noktaları (dots) ve katman düzenleri bu bilgi paneliyle çakışmayacak şekilde z-index ve hizalama yönünden optimize edildi.

---

## 📌 Sonraki Adımlar ve Kurallar

### 1. Görsel Ekleme ve Optimizasyon Kuralları
- Eklenen her yeni resim (hizmet, blog yazısı, slider veya ürün görseli), hız ve performans için **`cwebp -q 90`** (veya eşdeğer kaliteli bir araç) ile **maksimum yüksek kalitede WebP formatına** sıkıştırılmalı ve projenin `public/images/` altındaki ilgili klasörüne taşınmalıdır.
- Sitedeki tüm görsellerde arama botlarının anlamlandırabilmesi için anlamlı `alt` etiketleri zorunlu olarak kullanılmalıdır.

### 2. Yeni Sayfa, Hizmet ve Blog Yazısı Ekleme Kuralları
- Sisteme eklenen her yeni hizmet veya blog makalesi sonrasında `src/data/seoContent.ts` güncellenmeli ve sayfa için dinamik `<SEO>` bileşeni çağrılmalıdır.
- `<SEO>` bileşeni çağrılırken sayfa konusuna özel, **yerel ve bölgesel (Local SEO / Geo-targeting)** odaklı (örn: *İstanbul, Esenyurt şanzıman tamiri*, *81 ile hızlı kargo şanzıman* vb.) anahtar kelimeler (`keywords`) ve özgün meta açıklamalar (`description`) girilmelidir.
- Yeni eklenen dinamik blog yazıları için [BlogPost.tsx](file:///Users/zafer/antigravity/Şanzımancı-Yunus-Kurumsal-Web-Sitesi/src/pages/BlogPost.tsx) içindeki Schema.org `Article` işaretlemesine uygun biçimde şema nesnesi doldurulmalıdır.
- Yeni eklenen hizmetler veya sayfalar için Google zengin sonuçları göz önünde bulundurularak ilgili şema türü (`AutoRepair` veya `Product` vb.) JSON-LD formatında sayfaya entegre edilmelidir.

### 3. Yapılandırma Dosyalarının Güncellenmesi
- Yeni eklenen her kalıcı sayfa rotası (örn: yeni hizmet detayı veya yeni blog) sonrasında:
  - [sitemap.xml](file:///Users/zafer/antigravity/Şanzımancı-Yunus-Kurumsal-Web-Sitesi/public/sitemap.xml) güncellenerek yeni URL ve tarama önceliği eklenmelidir.
  - AI arama crawler'ları için [llms.txt](file:///Users/zafer/antigravity/Şanzımancı-Yunus-Kurumsal-Web-Sitesi/public/llms.txt) dosyasına ilgili rotanın özeti eklenmelidir.

### 4. Proje Takibi
- Yapılan her yeni geliştirme, değişiklik ve optimizasyon sonrasında bu dosya (`PROJECT_CONTEXT.md`) güncel tutulmalıdır.
