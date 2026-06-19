import { BlogPost, FAQ, Service } from '../types';

export const faqs: FAQ[] = [
  {
    question: "Otomatik şanzıman arızası nasıl anlaşılır?",
    answer: "Vites geçişlerinde vuruntu, titreme, motordan gelen uğultu sesi, araç devirlenirken hızlanmama (kaçırma) ve gösterge panelinde yanan arıza lambası başlıca otomatik şanzıman arıza belirtileridir."
  },
  {
    question: "Şanzıman yağı kaç kilometrede bir değiştirilmelidir?",
    answer: "Marka ve modele göre değişiklik göstermekle birlikte, otomatik şanzıman yağlarının genelde 40.000 km ile 60.000 km arasında veya 2 yılda bir değiştirilmesi tavsiye edilir. DSG ve EDC şanzımanlarda bu süre daha kritik olabilir."
  },
  {
    question: "DSG ve EDC şanzıman tamiri garantili mi?",
    answer: "Evet, Şanzımancı Yunus olarak gerçekleştirdiğimiz tüm DSG, EDC ve diğer yarı/tam otomatik şanzıman revizyon işlemlerimiz tamamen garantilidir. Orijinal ve garantili yedek parça kullanmaktayız."
  },
  {
    question: "Çıkma şanzıman ile sıfır şanzıman arasındaki fark nedir?",
    answer: "Çıkma şanzıman, kaza yapmış veya hurdaya ayrılmış araçlardan sökülen, uzmanlarımız tarafından tüm testleri yapılmış orijinal ikinci el ürünlerdir. Sıfır şanzımanlara göre çok daha ekonomiktir. Revizyon garantisi ile güvenle kullanılabilir."
  },
  {
    question: "İstanbul dışına kargo ile şanzıman gönderimi yapıyor musunuz?",
    answer: "Evet, İstanbul'un tüm ilçelerine (Kadıköy, Esenyurt, Ümraniye vb.) servis ağımız olduğu gibi, tüm Türkiye'ye anlaşmalı kargo firmalarımızla revizyonlu veya çıkma şanzıman gönderimi sağlamaktayız."
  }
];

export const corporateFaqs: FAQ[] = [
  {
    question: "Şanzımancı Yunus olarak sadece İstanbul içine mi hizmet veriyorsunuz?",
    answer: "Hayır. Şanzıman tamiri yapılır, şanzıman parçaları bulunur ve uzman kadromuz ile Türkiye'nin her yerine kargo ile ulaştırılır. Anlaşmalı kargolarımızla 81 ilden arızalı şanzımanlarınızı alıyor, onarım sonrası tekrar garantili olarak adresinize kargoluyoruz."
  },
  {
    question: "Çalışma saatleriniz nedir ve size nasıl ulaşabilirim?",
    answer: "Çalışma saatlerimiz Pazartesi - Cumartesi 09:00 - 19:00 arasındadır. Bize 0532 397 29 75 numaralı telefondan, info@sanzimanciyunus.com adresinden veya sitemizde sol altta bulunan WhatsApp ve Hemen Ara butonları üzerinden anında ulaşabilirsiniz."
  },
  {
    question: "Şanzıman onarımlarınız garantili midir?",
    answer: "Kesinlikle. İşletmemizde yapılan tüm otomatik ve manuel şanzıman tamiratları, DSG, EDC revizyonları ve satılan çıkma/sıfır şanzımanlar faturalı ve belirli km/yıl garantisi altındadır. Kalite politikamız gereği orijinal yedek parça kullanmaktayız."
  },
  {
    question: "Aracımın şanzıman parçası Türkiye'de bulunmuyor, siz temin edebilir misiniz?",
    answer: "Evet. Geniş ithalat ağımız ve devasa yedek parça stoğumuz sayesinde 'Şanzıman parçaları bulunur' ilkemizi sonuna kadar koruyoruz. Chery'den Mercedes'e kadar zor bulunan beyin, mekatronik ve dişli gruplarını stoklarımızdan veya yurt dışı bağlantılarımızla hızla tedarik ediyoruz."
  },
  {
    question: "Fiyat almak için aracı servisimize getirmemiz şart mı?",
    answer: "Hayır. Üst menüde yer alan 'Hizmet Formu' üzerinden aracınızın marka, model ve arıza şikayetini veya arıza tespit cihazındaki hata kodunu bize iletebilir, WhatsApp üzerinden video/fotoğraf göndererek ön fiyatlandırma ve teknik yönlendirme alabilirsiniz."
  }
];

export const corporateTexts = {
  about: `
    <h1>Şanzımancı Yunus: Şanzıman Sanayii'nde Otorite Kurum</h1>
    
    <h2>Yılların Tecrübesi ile Sektörün Lideri</h2>
    <p>Otomotiv bakım ve revizyon sektöründe yılların getirdiği derin tecrübe, bitmek bilmeyen araştırma hevesi ve profesyonel altyapı ile yola çıkan <strong>Şanzımancı Yunus - Şanzıman Sanayii</strong>, hem otomatik hem de manuel şanzıman tamiri konusunda Türkiye'nin öncü kurumlarından biri konumuna yükselmiştir. Hizmet anlayışımız sadece sıradan bir sanayi tamirhanesi olmanın çok ötesindedir. Biz, araç sahiplerinin en büyük maliyet kalemi ve korkulu rüyası olan "şanzıman" konusunda güven kapısıyız. Kurumsal ilkemiz olan "<strong>Şanzıman tamiri yapılır. Şanzıman parçaları bulunur. Uzman kadromuz ile Türkiye’nin her yerine kargo ile ulaştırılır.</strong>" prensibiyle yola çıkıyor, bu sözün hakkını her tamiratımızda veriyoruz.</p>
    
    <p>Gelişen ve globalleşen otomotiv endüstrisinde, araçlardaki aktarma organları her geçen yıl daha da karmaşıklaşmaktadır. Eskiden sadece debriyaj setlerinden ve düz viteslerden söz edilirken, günümüzde otomobil pazarında çift kavramalı sistemler (DSG, EDC, Powershift vb.), Tork Konvertörlü Tam Otomatik Şanzımanlar ve robotize vites yapıları hüküm sürmektedir. İşte tam bu noktada Şanzımancı Yunus olarak sürekli eğitim ve "sıfır hata" politikasıyla teknolojiye hızla adapte olan dev bir yatırım merkezine dönüştük. Arıza tespit cihazlarımızdan hidrolik test ünitelerimize kadar her adımımız fabrikasyon kalite standartlarına uygun şekilde yapılandırılmıştır.</p>

    <h2>Türkiye'nin Her Noktasına Güvenli Kargo ve Hizmet Ağı</h2>
    <p>Merkezimiz üzerinden sadece bulunduğumuz ile değil, Türkiye'nin dört bir yanına hizmet ulaştırıyoruz. İster doğuda bir ilimizde olun, ister batı sınırımızda; bulunduğunuz yerin bir önemi yoktur. Arızalı şanzımanınızı veya mekatronik beyninizi anlaşmalı kargolarımız ile iş yerinizden alıyor, atölyemizde uzman kadromuz ile en ince detayına kadar test edip onarıyor ve tekrar sağlam bir şekilde size ulaştırıyoruz. Eğer zamanınız çok kısıtlıysa ve tamir süresini beklemek istemezseniz, bu süreçte de yanınızdayız. Elimizde bulanan binlerce garantili <strong>ikinci el çıkma şanzıman</strong> veya sıfır şanzıman seçeneği ile stoklarımızdan anında kargolama yapıyoruz. Bu sayede günlerce, haftalarca aracınız lifte bağlı kalmadan hemen şanzıman değişimi yapılarak ticari veya şahsi yaşantınıza kaldığınız yerden güvenle devam edebilirsiniz.</p>

    <p>Siz de zaman kaybetmek istemiyor veya bulunduğunuz bölgedeki yetersiz tamir koşullarından şikayet ediyorsanız, hemen sol alt köşemizde daima sabit olan <a href="https://wa.me/905323972975" class="font-bold text-green-600 hover:underline">WhatsApp</a> veya <a href="tel:+905323972975" class="font-bold text-brand-600 hover:underline">Hemen Ara</a> butonlarımıza tıklayarak bizi <strong>0532 397 29 75</strong> numaralı telefondan arayabilirsiniz. Ayrıca web sitemizin üst menüsündeki "Hizmet Formu" üzerinden aracınızın detaylarını girerek bizden hızlı ve ücretsiz ekspertiz desteği de alabilirsiniz. Çalışma saatlerimiz <strong>Pazartesi - Cumartesi 09:00 - 19:00</strong> arasında olup, bu saatler içerisinde kesintisiz ve ayrıcalıklı çağrı destek hizmeti sunuyoruz.</p>
    
    <h3>Parça Tedariğinde Benzersiz Stok: "Şanzıman Parçaları Bulunur"</h3>
    <p>Piyasada yaşanan en büyük krizlerden biri de arızalı bir şanzımanın teşhisi doğru yapılsa bile yedek parçasının haftalarca bulunamaması veya yurt dışından absürt maliyetlerle getirtilmeye çalışılmasıdır. Şanzımancı Yunus, adının hakkını veren güçlü ithalat bağı sayesinde, en nadir şanzıman gruplarının dahi spesifik donanımlarını tek kalemde tedarik edebilir. Firmamız, Chery (Tiggo serileri, Omoda 5), Fiat, Ford, Hyundai, Mercedes, Opel, Renault, Skoda, Volkswagen ve daha onlarca markanın şanzıman anatomisine tamamen hakimdir.</p>
    
    <p>En ufak senkromeç dişlisinden, baskı balataya, kavrama setinden, valf gövdelerine ve şanzıman elektronik beyinlerine kadar tüm araç markalarına uygun on binlerce parça stoğumuzla çalışıyoruz. Bizimle iletişime geçtiğiniz an, doğru parçaya tek seferde ulaşır ve sürpriz gizli maliyetlerle karşılaşmazsınız.</p>
    
    <h3>Talepten Teslimata Kadar Şeffaflık İlkesi</h3>
    <p>Şanzıman revizyonlarında müşteri şikayetlerinin temelini, "Aracımı verdim ama bana ne yapıldığını söylemeden fahiş bir fatura çıkardılar" cümlesi oluşturur. Biz Şanzımancı Yunus olarak, aracınız servisimize geldiği an bir Check-Up analizine tutarız. Arızanın kaynağı tam tespit edildikten sonra (mekanik aşınma mı, elektronik hata mı, yağ basıncı sorunu mu vb.) sizinle irtibata geçer, kullanılacak orijinal yedek parça listesini, tamir fiyatını ve işlem sonu faturasını birebir izah ederiz. Müşterimizin "onayı" olmadan asla bir vidayı dahi fazladan söküp işlem yapmayız.</p>

    <p>Şanzıman gibi milimetrik hassasiyetler gerektiren bir mühendislik ürünü, kulaktan dolma bilgilerle tamir edilemez. Tam otomatik veya manuel şanzıman tamiratı için firmamıza güvendiğinizde sadece geçici bir yama hizmeti değil, aracınızı fabrikadan ilk çıktığı kondisyona döndürecek bir revizyon hizmeti alırsınız. Detaylı bilgi, randevu veya kargo gönderimleri için bizi iletişim numaralarımızdan <strong>(0532 397 29 75)</strong> veya <a href="mailto:info@sanzimanciyunus.com" class="text-brand-600 font-bold hover:underline">info@sanzimanciyunus.com</a> üzerinden gün içinde çekinmeden arayabilirsiniz.</p>
  `,
  mission: `
    <h2>Misyonumuz</h2>
    <p>Misyonumuz, otomotiv revizyon sektöründe karmaşık, stresli ve epey maliyetli görünen şanzıman ve aktarma organı arızalarını en hızlı, en güvenilir ve en ekonomik şekilde profesyonelce çözüme kavuşturmaktır. <strong>Şanzımancı Yunus - Şanzıman Sanayii</strong> olarak birincil varlık nedenimiz ve temel vazifemiz, ne araç sahiplerini ne de parça desteği almak isteyen sanayideki diğer usta meslektaşlarımızı mağdur etmemektir. </p>
    <p>Sınırlarımızı asla kendi bulunduğumuz lokasyonla daraltmadan; <strong>Türkiye'nin her yerine kargo ile ulaştırılır</strong> şeklindeki mottomuzla en uzak noktadaki köye bile uzmanlığımızı taşımaktayız. Şanzıman arızası yaşadığınız anda aklınıza gelen ilk yer olarak kalarak, tüm beklentilerinizi şeffaflık testinden geçirmek ana gayemizdir. Şanzımanınıza temas eden her elin yetkin ve eğitimli olmasını sağlar, üst menümüzdeki <strong>Hizmet Formu</strong> veya sol alttaki <strong>WhatsApp ve Hemen Ara</strong> (0532 397 29 75) butonlarımız vasıtasıyla size sadece bir tıklama uzağınızda oluruz.</p>
  `,
  vision: `
    <h2>Vizyonumuz</h2>
    <p>Vizyonumuz, inovatif tamir teknolojilerini, yapay zeka destekli hasar tespit cihazlarını ve en hassas test stantlarını Türkiye otomotiv bakım sektörüne entegre eden "lider vizyoner servis" olmanın ötesine geçerek, markamızı uluslararası arenada da geçerli bir standart haline getirmektir. "Şanzımancı" veya "Şanzıman Tamircisi" denildiğinde jenerik olarak akla gelen ilk, tek, en saygın ve en dürüst marka konumunu ilelebet muhafaza etmektir.</p>
    <p>Gelecek perspektifimizde, yedek parça ve çıkma şanzıman depolarımızı çok daha devasa bir tedarik zincirine dönüştürerek Türkiye pazarındaki ihtiyacın %100'ünü karşılayacak hacme ulaşmayı hedeflemekteyiz. İnanıyoruz ki; mükemmel işçilik, iyi iletişimle birleştiğinde (Pazartesi - Cumartesi 09:00 - 19:00 tam destek) otomotiv sektöründeki güven tabuları Şanzımancı Yunus adıyla yeniden yazılacaktır.</p>
  `,
  quality: `
    <h2>Kalite Politikamız</h2>
    <p>Kurumsal kalite ve güven politikamızın genetiği, sadece sözde kalmayan bir "sıfır hata toleransına" dayanır. Temel mottomuz olan <strong>"Şanzıman tamiri yapılır. Şanzıman parçaları bulunur."</strong> deyişinin içi, atölyemizdeki her onarım öncesi ve sonrası yapılan aşırı zorlu basınç, sıcaklık ve uzun test sürüşü aşamalarıyla doldurulur.</p>
    
    <ul>
      <li class="mb-2"><strong>Global Kalitede Orijinal Yedek Parça:</strong> Değiştirilen her dişli, mekatronik sensör, tork konvertör veya balata seti uluslararası sertifikaları haiz, %100 onaylı malzemelerdir. Müşterimizin can güvenliği bizim için bütçe tasarrufundan daha mühimdir.</li>
      <li class="mb-2"><strong>Maksimum Şeffaflık ve Aydınlatma:</strong> Sürpriz faturalar, işlemi yapıldıktan sonra ortaya çıkan ekstra ücretlemeler bizde yoktur. Arıza öncesinde aydınlatıcı teklifi size sunarız. Hizmet ile ilgili her konuyu bizlere <strong>info@sanzimanciyunus.com</strong> üzerinden sorabilir veya sağ/sol alt butonlarımızdan pratik aramalarla <strong>0532 397 29 75</strong> numaramıza iletebilirsiniz.</li>
      <li class="mb-2"><strong>Daimi Ulaşılabilirlik ve Acil Aksiyon:</strong> "Hemen Ara" ve "WhatsApp" butonlarımızın amacı tam da budur. Yolda kaldığınızda saniyeler içinde yetkin bir teknik danışmana hızla ulaşabilmeniz. Müşteri iletişiminde bekleme süresini asgariye indirerek süreci kolaylaştırmak ana kalite kuralımızdır.</li>
      <li class="mb-2"><strong>Sürdürülebilirlik ve Eğitim:</strong> Çırak, kalfa ve ustalarımızın tamamı, Chery gibi ülkemize yeni giren araç markalarından Tesla'nın aktarma organlarına kadar sayısız yeni model üzerine sürekli olarak oryantasyon ve teknik eğitimden geçirilirler.</li>
    </ul>
  `
};

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "EDC Şanzıman Beyni Arızası Nasıl Anlaşılır? Kesin Çözümler",
    slug: "edc-sanziman-beyni-arizasi-nasil-anlasilir",
    date: "14 Mart 2026",
    author: "Uzman Servis Ekibi",
    tags: ["EDC", "Şanzıman Tamiri", "Renault"],
    excerpt: "Renault ve Dacia başta olmak üzere birçok araçta kullanılan EDC şanzıman beyni arızalarının belirtileri ve uzman teknik serviste uygulanan kesin çözümleri detaylarıyla anlatıyoruz.",
    content: `
      <h2>EDC Şanzıman Beyni Neden Arızalanır?</h2>
      <p>Efficient Dual Clutch (EDC), çift kavramalı yarı otomatik bir şanzıman türüdür. EDC şanzıman beyni (TCM), elektro-mekanik yapısı gereği aşırı ısınma, düşük voltaj, yazılım hataları veya zamanla oluşan elektronik devre yıpranmaları nedeniyle arıza verebilir. Vites atışlarının ana beyni olan bu parça arızalandığında araçta ciddi sürüş problemleri görülür.</p>
      
      <h2>Belirtileri Nelerdir?</h2>
      <p>EDC beyin arızasının en yaygın belirtileri şunlardır:</p>
      <ul>
        <li>Gösterge panelinde beliren <strong>"Vites Kutusunu Kontrol Ettirin"</strong> uyarısı.</li>
        <li>Aracın sürüş halindeyken aniden vites boşa alması veya vites değişimlerinde vuruntu yaşanması.</li>
        <li>Özellikle yoğun trafikte (ısınıp soğuma stresinden kaynaklı) 1. veya 2. vitese geçerken yaşanan yoğun titremeler.</li>
        <li>Araç çalıştırıldığında geri vitesin (R) devreye girmemesi.</li>
      </ul>
      
      <h2>Kesin Çözümler Nelerdir?</h2>
      <p>Yunus Şanzıman olarak öncelikle orijinal arıza tespit cihazlarımızla sistem verilerini okuyoruz. EDC arızası genellikle iki şekilde çözülür:</p>
      <ol>
        <li><strong>Beyin Tamiri (Klonlama & Tamir):</strong> Eğer pcb kart üzerindeki hasar mikroskobik inceleme ile tamir edilebilecek düzeydeyse, orijinal lehimleme ve işlemci değişimi teknikleri ile beyin sıfırlanıp onarılır. Ciddi maliyet avantajı sağlar.</li>
        <li><strong>Yeni Beyin Değişimi:</strong> Tamir edilemeyecek derecede yanma veya ağır donanımsal hasar var ise çıkma veya sıfır EDC beyni montajı yapılıp, aracın şasisine online adaptasyonu (kodlaması) gerçekleştirilir.</li>
      </ol>
      <p>Unutmayın; şanzıman beyni tamiri uzmanlık gerektiren hassas bir mühendislik işlemidir. Sıradan servislerde yapılan bilinçsiz müdahaleler çok daha büyük şanzıman revizyon masraflarına yol açabilir.</p>
    `
  },
  {
    id: "2",
    title: "DSG Şanzıman Kullanıcılarının Dikkat Etmesi Gereken 5 Altın Kural",
    slug: "dsg-sanziman-kullanicilari-dikkat-etmesi-gereken-5-altin-kural",
    date: "02 Nisan 2026",
    author: "Uzman Servis Ekibi",
    tags: ["DSG", "Volkswagen", "Bakım"],
    excerpt: "Volkswagen, Skoda, Seat ve Audi'nin vazgeçilmezi DSG şanzımanın ömrünü uzatmak, yüksek maliyetli arızaların önüne geçmek için uygulamanız gereken 5 hayati kural.",
    content: `
      <h2>Mükemmel Vites Geçişleri: DSG Şanzıman</h3>
      <p>Direct Shift Gearbox (DSG), piyasadaki en hızlı vites değiştiren şanzıman teknolojilerinden biridir. Ancak mekanik karmaşıklığı sebebiyle kullanıcı hatasına karşı oldukça toleranssızdır. İşte DSG şanzımanın ömrünü iki katına çıkaracak altın kurallar:</p>
      
      <h3>1. Yokuşlarda Park Ederken El Frenini Doğru Kullanın</h3>
      <p>Araç eğimli bir yüzeye park edilirken yapılan en büyük hata, aracın tüm yükünü doğrudan "P" (Park) vitesine yani şanzıman dişlisine bindirmektir. Doğru yöntem: Önce ayak frenine basarak aracı durdurun, vitesi "N" (Boş) konumuna alın, el frenini çekin ve ayak frenini bırakın. Aracın yükü el frenine bindikten sonra tekrar ayak frenine basarak vitesi "P"ye alıp aracı stop edin.</p>

      <h3>2. Dur-Kalk Trafikte Manuel Mod Kullanımı</h3>
      <p>Sıkışık trafikte DSG şanzıman sürekli 1. ve 2. vites arasında kararsız kalır. Bu yarım debriyaj durumu kavramanın (mekatronik ve baskı balatanın) aşırı ısınmasına yol açar. Yoğun trafikte vitesi manuel moda alarak aracı 1. viteste tutmak ısınmayı engelleyecektir.</p>

      <h3>3. Sık Sık "N" (Boş) Kademesine Almayın</h3>
      <p>Hareket halindeyken kırmızı ışığa yaklaşırken aracı asla N (Boş) konumuna almayın. Bu eylem yağlama sisteminin basıncını keser, şanzımanın içindeki hareketli parçaları yağsız bırakarak mekanik sürtünmeye sebep olur.</p>

      <h3>4. Geri veya İleri Vites Arasında Tam Durmadan Geçiş Yapmamak</h3>
      <p>D konumundan R'ye veya R'den D'ye geçerken aracın istisnasız bir şekilde tam olarak 0 km/s hızda olması yani tamamen durmuş olması şarttır. Araç akarken vites atmak senkromeçlerin parçalanmasına ve mekatronik arızalarına yol açar.</p>

      <h3>5. Periyodik Şanzıman Yağı Değişimini Geciktirmeyin</h3>
      <p>Özellikle ıslak kavramalı (6 ileri DSG vb.) sistemlerde şanzıman yağı, sadece yağlama değil aynı zamanda hidrolik basınç ve soğutma işlevini üstlenir. Yağın viskozitesini (kayganlığını) yitirmesi erken arızanın bir numaralı sebebidir. 60.000 KM kuralını aşmayın.</p>
    `
  },
  {
    id: "3",
    title: "Yeni Nesil Araçlarda (Örn: Chery) Şanzıman Yağı Ne Zaman Değişmeli?",
    slug: "yeni-nesil-arac-sanziman-yagi-degisimi-chery",
    date: "25 Nisan 2026",
    author: "Uzman Servis Ekibi",
    tags: ["Bakım", "Chery", "Yağ Değişimi", "Yeni Nesil"],
    excerpt: "Son dönemin popüler SUV modellerinden Chery başta olmak üzere, yeni nesil teknolojik araçlarda otomatik şanzıman bakımının incelikleri ve periyodik tablosu.",
    content: `
      <h2>Yeni Teknoloji, Hassas Bakım Gereksinimi</h2>
      <p>Türkiye pazarına hızlı ve güçlü bir giriş yapan Chery (Tiggo 7, Tiggo 8 Pro, Omoda 5) ve TOGG, Tesla gibi markaların yeni nesil yürüyen aksam mimarileri, eski nesil otomobillere kıyasla çok daha yüksek tork değerleri üretiyor. Çift kavramalı ve gelişmiş otomatik şanzımanlara sahip bu araçlar, yoğun mekanik basınç altında çalışırlar.</p>
      
      <h2>"Ömür Boyu Yağ Değişimi Gerekmez" Mitine İnanmayın</h2>
      <p>Bazı yetkili servis formlarında veya el kitapçıklarında şanzıman yağı değişiminin ömür boyu gerekmediği ibaresi bulunabilir. Buradaki "ömür" kelimesi, otomotiv sanayisinde aracın garantili kullanım ömrü olan yaklaşık 100.000 - 150.000 KM arasını temsil eder. Oysa uzun yıllar arıza vermeden kullanılmak istenen bir araç için bu tamamen yanlıştır.</p>

      <h3>Değişim Periyodu Ne Olmalı?</h3>
      <p>Yüksek torka sahip yeni nesil SUV (Chery) araçlarında, şanzıman içindeki süzgeç ve yağın her <strong>50.000 KM ile 60.000 KM arasında</strong> muhakkak yenilenmesi gereklidir. Isınan sentetik yağ yapısını bozarak çapaklanmaya neden olur. Yağ değişmediği takdirde valf gövdeleri çapakla dolar ve kavrama ömrü yarıya düşer.</p>

      <h3>Yalnızca Uygun Spekifikasyondaki Yağlar Kullanılmalı</h3>
      <p>Her markanın şanzıman sisteminin mühendislik toleransları farklıdır. DCT için üretilmiş tam sentetik, üreticinin belirlediği kalite koduna (API/OEM numarasına) uyan bir sıvının kullanılması zorunludur. Yanlış yağ eklenmesi şanzımanın komple dağılmasıyla sonuçlanabilir.</p>
      
      <p>Şanzımancı Yunus olarak özel cihazlar ile şanzımanın içindeki yağı %100 oranında vakumla çekip tamamen taze yağ ile dolduruyor (flush-makineli değişim) ve sistemi adeta fabrikadan çıktığı ilk güne döndürüyoruz.</p>
    `
  },
  {
    id: "4",
    title: "Manuel mi Otomatik Şanzıman mı? Masraf ve Ömür Karşılaştırması",
    slug: "manuel-mi-otomatik-sanziman-mi-masraf-ve-omur",
    date: "05 Mayıs 2026",
    author: "Uzman Servis Ekibi",
    tags: ["Manuel Şanzıman", "Otomatik Şanzıman", "Karşılaştırma"],
    excerpt: "Sıfır veya ikinci el araç alırken en çok sorulan sorulardan biri: Otomatik vitesin yüksek tamir maliyeti efsanesi doğru mu? Tüm gerçekler bu rehberde.",
    content: `
      <h2>Sürücü Tercihi mi, Mekanik Gerçekler mi?</h2>
      <p>Otomobil tutkunlarını ikiye bölen geleneksel bir tartışmadır: "Manuel vites aracın kontrolünü sürücüye verir, masrafsızdır", "Otomatik vites ise rahatlıktır ancak arızalanırsa ocağınıza incir ağacı diker". Peki bu kalıp yargılar günümüz teknolojisinde halen geçerli mi? Maliyetler, ömür ve arıza istatistikleri üzerinden teknik bir inceleme yapalım.</p>
      
      <h3>Manuel Şanzıman: Basit, Dayanıklı Ama Sürücüye Bağımlı</h3>
      <p>Manuel şanzımanın mekaniği basittir. İçerisinde mekatronik beyinler veya çok diskli kavrama sistemleri barındırmaz. Arıza yapma ihtimali çok daha düşüktür.</p>
      <p><strong>Ömür:</strong> Düzgün kullanıldığında 300.000+ KM rahatlıkla gidebilir.</p>
      <p><strong>Masraf Kalemi:</strong> Debriyaj baskı-balata setinin ve duruma göre volanın (çift kütleli ise pahalı olabilir) belirli aralıklarla (70.000 - 100.000 KM) değişmesi gerekir. Şanzıman çok nadir dağılır ancak dağılırsa tamir fiyatı otomatiğe göre %60 daha düşüktür.</p>
      <p><strong>Zayıf Noktası:</strong> Tamamen sürücü hatalarına açıktır. Acemi bir sürücü motor devri ile vites oranını uyumsuz yaparak dişlileri sıyırabilir veya yarım debriyaj alışkanlığı ile balatayı 10.000 KM'de yakabilir.</p>

      <h3>Otomatik Şanzıman: Konforlu Fakat Hassas Geometri</h3>
      <p>Otomatik şanzımanlar kendi içlerinde Tam Otomatik (Tork Konvertörlü), Çift Kavramalı (DSG/EDC/Powershift) ve CVT olarak alt gruplara ayrılır.</p>
      <p><strong>Ömür:</strong> Özellikle klasik tork konvertörlüler (BMW - ZF Şanzıman, Toyota) inanılmaz dayanıklıdır ve milyona kadar yol kat edebilir. Ancak çift kavramalılar periyodik ve ağır bakıma ihtiyaç duyarlar.</p>
      <p><strong>Masraf Kalemi:</strong> Bakımları ihmal edildiğinde beyin, valf gövdesi veya komple revizyon maliyetleri (yaklaşık 15.000 TL ile 60.000 TL arası hasarın boyutuna göre değişebilir) karşınıza çıkabilir. Periyodik olarak pahalı olan filtre ve şanzıman yağı değişim masrafı vardır.</p>
      
      <h2>Sonuç ve Tavsiyemiz</h2>
      <p>Eğer yoğun metropol trafiğinde yaşıyorsanız (İstanbul gibi), manuel şanzımanın dize ve sinirlere verdiği zarar göz önüne alındığında otomatik şanzımanın konforu tartışılamaz. Otomatik şanzımanın arızasından korkmayın. Doğru kullanım teknikleri bilindiği ve bakımları güvenilir bir servis tarafından düzenli yapıldığı sürece her ikisi de size uzun yıllar güvenle hizmet eder.</p>
    `
  }
];

export const servicesData: Service[] = [
  {
    id: "tamir",
    title: "Şanzıman Tamiri",
    slug: "sanziman-tamiri",
    description: "Her marka ve model aracın otomatik ve manuel şanzıman arızaları yetkili servis hassasiyetinde tamir edilir.",
    content: "İstanbul merkezli tam donanımlı revizyon atölyemizde şanzıman onarımı garantili ve faturalı olarak gerçekleştirilmektedir..."
  },
  {
    id: "cikma",
    title: "Çıkma Şanzıman",
    slug: "cikma-sanziman",
    description: "Orijinal çıkma şanzıman satışlarımızda Türkiye'nin her yerine kargo ve montaj sonrası uygunluk test garantisi vardır.",
    content: "Bütçe dostu orijinal çıkma şanzıman çözümlerimiz sayesinde aracınızı sıfır hissiyle güvenle kullanmaya devam edebilirsiniz. Depomuzdaki binlerce şanzıman testlerden geçerek sizlere ulaştırılır."
  },
  {
    id: "bakim",
    title: "Şanzıman Bakımı ve Yağ Değişimi",
    slug: "sanziman-bakimi-yag-degisimi",
    description: "Periyodik şanzıman yağı değişimi ve selenoid temizlikleri ile şanzıman ömrünüzü iki katına çıkarıyoruz.",
    content: "Tam otomatik şanzımanlarda makine sistemiyle (fluid flush) yağ değişimi yapmaktayız. Şanzıman içindeki tortu ve talaş tamamen tahliye edilmektedir."
  },
  {
    id: "dsg",
    title: "DSG & EDC Şanzıman Tamiri",
    slug: "dsg-edc-sanziman-tamiri",
    description: "Volkswagen DSG ve Renault/Dacia EDC çift kavramalı şanzıman sistemleri için uzmanlaşmış çözüm merkezi.",
    content: "Mekatronik arızaları, beyin tamiri ve çift kavrama değişimi için özel alet (special tools) ve fabrika verileriyle işlem yapmaktayız."
  }
];
