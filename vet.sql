PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "_prisma_migrations" (
    "id"                    TEXT PRIMARY KEY NOT NULL,
    "checksum"              TEXT NOT NULL,
    "finished_at"           DATETIME,
    "migration_name"        TEXT NOT NULL,
    "logs"                  TEXT,
    "rolled_back_at"        DATETIME,
    "started_at"            DATETIME NOT NULL DEFAULT current_timestamp,
    "applied_steps_count"   INTEGER UNSIGNED NOT NULL DEFAULT 0
);
INSERT INTO _prisma_migrations VALUES('5a0c2e57-6c60-4f1b-83a9-5a63aa33917b','f778683164a9f846cc1e9dddb4433088e812ffb01e39a7be6d90444d1f563551',1772308507502,'20260228195507_init',NULL,NULL,1772308507501,1);
INSERT INTO _prisma_migrations VALUES('1194b133-862a-4b4b-951c-8f79cdcf7610','17ef9be7321836eaa54ece04516a243d4d29282ed22dec446a81e2bfe015b2c2',1772309207672,'20260228200647_add_category_and_blog',NULL,NULL,1772309207670,1);
CREATE TABLE IF NOT EXISTS "Service" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "icon" TEXT,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO Service VALUES('cmm6t59fn0000269kzfmx1xvi','Web Tasarım & Geliştirme','web-tasarim','Kurumsal ve özel web siteleri, modern arayüzler.','🌐',0,'2026-02-28T21:02:52.931+00:00','2026-02-28T21:02:52.931+00:00');
INSERT INTO Service VALUES('cmm6t59fp0001269kgncoln2x','Dijital Pazarlama','dijital-pazarlama','SEO, sosyal medya ve reklam kampanyaları.','📈',1,'2026-02-28T21:02:52.933+00:00','2026-02-28T21:02:52.933+00:00');
INSERT INTO Service VALUES('cmm6t59fp0002269k2oj9vpkw','Marka & Kimlik','marka-kimlik','Logo, kurumsal kimlik ve görsel iletişim.','✨',2,'2026-02-28T21:02:52.933+00:00','2026-02-28T21:02:52.933+00:00');
CREATE TABLE IF NOT EXISTS "Project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "imageUrl" TEXT,
    "clientName" TEXT,
    "projectUrl" TEXT,
    "serviceId" TEXT,
    "order" INTEGER NOT NULL DEFAULT 0,
    "published" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL, "category" TEXT,
    CONSTRAINT "Project_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO Project VALUES('cmm6t59fr0003269kxic7r60q','Sonax','sonax',NULL,'/references/1772314393189-5fzv9mb.png','Sonax Maslak',NULL,'cmm6t59fn0000269kzfmx1xvi',0,1,'2026-02-28T21:02:52.935+00:00','2026-02-28T21:33:28.610+00:00','Otomotiv');
INSERT INTO Project VALUES('cmm6t59fs0004269kdjimfn1o','Medicana','medicana','Hastane','/references/1772314414321-j0eu2jc.png','Medicana',NULL,'cmm6t59fn0000269kzfmx1xvi',1,1,'2026-02-28T21:02:52.936+00:00','2026-02-28T21:33:45.658+00:00','Sağlık');
INSERT INTO Project VALUES('cmm6tj0ml0000yx9kk0vhb0b6','Bolnut','b',NULL,'/references/1772313208406-qkgly6v.webp',NULL,NULL,NULL,0,1,'2026-02-28T21:13:34.701+00:00','2026-02-28T21:13:34.701+00:00','E-Ticaret');
CREATE TABLE IF NOT EXISTS "ContactMessage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "subject" TEXT,
    "message" TEXT NOT NULL,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS "Post" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "excerpt" TEXT,
    "content" TEXT NOT NULL,
    "imageUrl" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "publishedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO Post VALUES('cmm6t59fu0005269k247f4xfv','Google Ads''te AI Destekli Teklif Stratejileri ile ROAS Nasıl %340 Arttırılır?','google-ads-ai-teklif-stratejileri-roas','Gemini ve Performance Max kampanyalarının akıllı teklif optimizasyonuyla reklam harcama getirisini nasıl katlayabileceğinizi veri odaklı anlatıyoruz.','<p>Dijital reklamcılıkta yapay zeka destekli teklif stratejileri, manuel optimizasyonun çok ötesine geçti. Bu yazıda Google Ads''in AI modellerini nasıl kullanabileceğinizi detaylı olarak inceliyoruz.</p><h2>Performance Max Kampanyaları</h2><p>Performance Max, Google''ın tüm envanterini tek bir kampanyada birleştiren AI destekli kampanya türüdür. Doğru sinyal stratejileriyle ROAS''ınızı ciddi oranda artırabilirsiniz.</p>','https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200',1,'2026-02-25T00:00:00.000+00:00','2026-02-28T21:02:52.938+00:00','2026-02-28T21:02:52.938+00:00');
INSERT INTO Post VALUES('cmm6t59fv0006269kayzdabfx','ChatGPT-4 ile SEO İçerik Üretimi: Semantik Arama Çağında Kaliteli İçerik','chatgpt-seo-icerik-uretimi-semantik-arama','Yapay zeka ile üretilen içeriklerin Google''da nasıl üst sıralara çıkabileceğini, E-E-A-T kriterlerini ve semantik SEO stratejilerini inceliyoruz.','<p>Google''ın Helpful Content güncellemesiyle birlikte, AI destekli içerik üretimi yeni bir boyut kazandı. ChatGPT-4''ün güçlü dil modeli ile kaliteli, özgün ve SEO dostu içerikler oluşturmak artık mümkün.</p><h2>E-E-A-T ve AI İçerik</h2><p>Deneyim, Uzmanlık, Otorite ve Güvenilirlik — bu dört kriter, AI ile üretilen içeriklerin başarısını belirleyen temel faktörler.</p>','https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200',1,'2026-02-20T00:00:00.000+00:00','2026-02-28T21:02:52.939+00:00','2026-02-28T21:02:52.939+00:00');
INSERT INTO Post VALUES('cmm6t59fv0007269keo0rzbxp','Sosyal Medyada Gemini ile Trend Analizi: Viral İçerik Stratejileri','sosyal-medya-gemini-trend-analizi-viral','Google Gemini''nin çoklu modal analiz yeteneklerini kullanarak sosyal medya trendlerini önceden tespit etmenin ve viral içerik üretmenin yolları.','<p>Sosyal medya pazarlamasında zamanlamak her şeydir. Gemini''nin gelişmiş analiz yetenekleri sayesinde trendleri rakiplerden önce yakalayabilir ve marka bilinirliğinizi katlayabilirsiniz.</p>','https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200',1,'2026-02-15T00:00:00.000+00:00','2026-02-28T21:02:52.939+00:00','2026-02-28T21:02:52.939+00:00');
INSERT INTO Post VALUES('cmm6t59fv0008269k8xk5qce3','Claude ile UX Analizi: Dönüşüm Oranlarını %85 Artıran Tasarım Kararları','claude-ux-analizi-donusum-oranlari','Claude''un analitik yeteneklerini kullanarak kullanıcı deneyimini nasıl iyileştirebileceğinizi, A/B test sonuçlarımızı ve pratik önerilerimizi paylaşıyoruz.','<p>Kullanıcı deneyimi tasarımında veri odaklı kararlar almak kritik önem taşır. Claude''un gelişmiş analiz ve muhakeme yetenekleri, UX araştırma süreçlerinizi hızlandırır ve doğru tasarım kararları almanızı sağlar.</p>','https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200',1,'2026-02-10T00:00:00.000+00:00','2026-02-28T21:02:52.939+00:00','2026-02-28T21:02:52.939+00:00');
INSERT INTO Post VALUES('cmm6t59fw0009269kg4je3bgl','2026''da Meta Ads: AI Advantage+ Kampanyaları ile E-Ticaret Büyümesi','meta-ads-ai-advantage-plus-eticaret','Meta''nın Advantage+ yapay zeka kampanya araçlarıyla e-ticaret satışlarını nasıl ölçeklendirebileceğinizi gerçek vaka analizleriyle anlatıyoruz.','<p>Meta Ads platformu, Advantage+ suite ile reklam optimizasyonunu tamamen AI''a devretmenize olanak tanıyor. Doğru kurulum ve sinyal stratejileriyle e-ticaret performansınızı dramatik şekilde artırabilirsiniz.</p>','https://images.unsplash.com/photo-1563986768609-322da13575f2?w=1200',1,'2026-02-05T00:00:00.000+00:00','2026-02-28T21:02:52.940+00:00','2026-02-28T21:02:52.940+00:00');
INSERT INTO Post VALUES('cmm6t59fw000a269kim194a7z','Yapay Zeka Destekli Marka Kimliği Tasarımı: Otomasyondan Kreativiteye','yapay-zeka-marka-kimligi-tasarimi','AI araçlarının marka kimliği süreçlerini nasıl dönüştürdüğünü, renk psikolojisinden tipografi seçimine kadar veri destekli tasarım yaklaşımımızı paylaşıyoruz.','<p>Marka kimliği tasarımı, artık sadece estetik tercihlerden ibaret değil. Yapay zeka araçları ile hedef kitle analizi, renk psikolojisi ve tipografi seçimi veri destekli hale geldi.</p>','https://images.unsplash.com/photo-1561070791-2526d31d5b35?w=1200',1,'2026-01-28T00:00:00.000+00:00','2026-02-28T21:02:52.940+00:00','2026-02-28T21:02:52.940+00:00');
INSERT INTO Post VALUES('cmm6t59fx000b269kpicd37zb','LinkedIn Ads B2B Stratejisi: AI ile Doğru Karar Vericilere Ulaşmak','linkedin-ads-b2b-ai-strateji','B2B pazarlamada LinkedIn Ads''in AI hedefleme özelliklerini kullanarak doğru karar vericilere ulaşmanın ve lead kalitesini artırmanın yolları.','<p>B2B pazarlamada doğru kişiye ulaşmak her şeydir. LinkedIn Ads''in yapay zeka destekli hedefleme özellikleri, şirket büyüklüğünden pozisyona kadar hassas filtreleme imkanı sunar.</p>','https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=1200',1,'2026-01-20T00:00:00.000+00:00','2026-02-28T21:02:52.941+00:00','2026-02-28T21:02:52.941+00:00');
INSERT INTO Post VALUES('cmm6t59fx000c269klo3478cm','Core Web Vitals 2026: Site Hızı, SEO Sıralaması ve AI Optimizasyonu','core-web-vitals-2026-site-hizi-seo','Google''ın güncellenmiş Core Web Vitals metriklerini, INP skorunuzu iyileştirmeyi ve AI ile otomatik performans optimizasyonunu derinlemesine inceliyoruz.','<p>2026''da Core Web Vitals metrikleri SEO sıralamalarında daha da belirleyici hale geldi. Interaction to Next Paint (INP) metriği artık FID''in yerini aldı ve kullanıcı etkileşim performansını ölçüyor.</p>','https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200',1,'2026-01-15T00:00:00.000+00:00','2026-02-28T21:02:52.941+00:00','2026-02-28T21:02:52.941+00:00');
INSERT INTO Post VALUES('cmm6t59fx000d269kvtn98vmh','Video İçerik Pazarlaması: AI ile Kısa Video Üretimi ve Dağıtım Stratejileri','video-icerik-pazarlamasi-ai-kisa-video','TikTok, Reels ve Shorts için AI destekli video içerik üretim süreçlerimizi, otomasyon araçlarımızı ve başarılı dağıtım stratejilerimizi paylaşıyoruz.','<p>Kısa video formatı, dijital pazarlamanın en güçlü silahı haline geldi. AI araçları ile senaryo oluşturmadan montaja kadar tüm video üretim sürecinizi hızlandırabilirsiniz.</p>','https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=1200',1,'2026-01-08T00:00:00.000+00:00','2026-02-28T21:02:52.941+00:00','2026-02-28T21:02:52.941+00:00');
INSERT INTO Post VALUES('cmm6t59fy000e269k30jd73fm','Dijital Pazarlamada Veri Gizliliği ve AI: Cookie-less Dünyaya Hazırlık','dijital-pazarlama-veri-gizliligi-ai-cookieless','Üçüncü taraf cookie''lerin sonu yaklaşırken, AI destekli birinci taraf veri stratejileri ve gizlilik odaklı pazarlama yaklaşımımızı anlatıyoruz.','<p>Üçüncü taraf cookie''lerin kaldırılması, dijital pazarlama ekosistemini temelden değiştiriyor. Birinci taraf veri stratejileri ve AI destekli modelleme ile bu geçişe hazırlanmanız kritik önem taşıyor.</p>','https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200',1,'2026-01-02T00:00:00.000+00:00','2026-02-28T21:02:52.942+00:00','2026-02-28T21:02:52.942+00:00');
INSERT INTO Post VALUES('cmm6uj3t90001yx9kqxsb9ysr','Gemini şunu dedi: Harika bir fikir! Ala Medya''nın enerjisini ve profesyonelliğini yansıtan, hem bilgilendirici hem de okuyucuyu yakalayan bir blog taslağı hazırladım.  Mart 2026 itibarıyla dijital dünyanın nabzını tutan bir içerik markanız için oldukça etkileyici olacaktır.  2026 Dijital Trendleri: Markanızı Geleceğe Nasıl Hazırlarsınız?','gemini-sunu-dedi-harika-bir-fikir-ala-medya-nin-enerjisini-ve-profesyonelligini-yansitan-hem-bilgilendirici-hem-de-okuyucuyu-yakalayan-bir-blog-taslagi-hazirladim-mart-2026-itibariyla-dijital-dunyanin-nabzini-tutan-bir-icerik-markaniz-icin-oldukca-etkileyici-olacaktir-2026-dijital-trendleri-markanizi-gelecege-nasil-hazirlarsiniz','Dijital dünya artık sadece bir "seçenek" değil, markaların nefes aldığı ana atmosfer. Ancak 2026’da bu atmosferde hayatta kalmak, dünün stratejileriyle pek mümkün değil. Ala Medya olarak, markaların bu hızlı değişime sadece ayak uydurmasını değil, bu değişime öncülük etmesini sağlıyoruz.',unistr('Dijital dünya artık sadece bir "seçenek" değil, markaların nefes aldığı ana atmosfer. Ancak 2026’da bu atmosferde hayatta kalmak, dünün stratejileriyle pek mümkün değil. Ala Medya olarak, markaların bu hızlı değişime sadece ayak uydurmasını değil, bu değişime öncülük etmesini sağlıyoruz.\u000a\u000aİşte bu yıl markanızın stratejisinde mutlaka yer alması gereken 3 anahtar nokta:\u000a\u000a1. Hiper-Kişiselleştirilmiş Deneyimler\u000aArtık genel geçer reklamların devri kapandı. Tüketiciler, kendilerini özel hissetmek istiyor. Yapay zeka destekli veri analizi sayesinde, doğru hedef kitleye tam da ihtiyaç duydukları anda ulaşıyoruz.\u000a\u000aİpucu: Müşterilerinizin sadece ne satın aldığını değil, neden satın aldığını anlamaya odaklanın.\u000a\u000a2. "Samimiyet" Yeni Lüks Oldu\u000aMükemmel filtrelenmiş fotoğraflar yerine, kamera arkası görüntüleri ve gerçek insan hikayeleri çok daha fazla etkileşim alıyor. İnsanlar bir logoyla değil, o logonun arkasındaki ruhla bağ kurmak istiyor. Ala Medya olarak içerik üretiminde "insan odaklı" bir yaklaşımı benimsiyoruz.\u000a\u000a3. Kısa Videoların (Reels & Shorts) Evrimi\u000aVideo içerikler hala kral, ancak format değişiyor. 2026''da izleyicinin dikkatini ilk 1.5 saniyede çekemeyen içerikler kaybolup gidiyor. Görsel kalitenin yanı sıra, hikaye anlatıcılığının (storytelling) gücü hiç olmadığı kadar kritik.\u000a\u000aUnutmayın: Dijitalde var olmak bir varış noktası değil, bir yolculuktur. Bu yolculukta doğru pusulaya sahip olmak sizi her zaman bir adım öne taşır.\u000a\u000aAla Medya ile Markanızı Dönüştürmeye Hazır mısınız?\u000a\u000aDijital dünyada sesinizi yükseltmek ve rakiplerinizin arasından sıyrılmak için profesyonel bir dokunuşa ihtiyacınız varsa, doğru yerdesiniz. Gelin, markanızın potansiyelini birlikte keşfedelim.\u000a\u000aBu taslağı nasıl buldunuz?\u000aEğer isterseniz bu yazıyı belirli bir hizmetinize (örneğin: Sosyal Medya Yönetimi, SEO veya Prodüksiyon) odaklanacak şekilde özelleştirebilir veya markanızın ses tonuna göre (daha kurumsal veya daha esprili) yeniden düzenleyebilirim.\u000a\u000aBu blog yazısı için özel bir görsel konsepti oluşturmamı ister misiniz?'),NULL,1,'2026-02-28T21:41:38.444+00:00','2026-02-28T21:41:38.445+00:00','2026-02-28T21:41:38.445+00:00');
CREATE TABLE IF NOT EXISTS "Partner" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "published" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO Partner VALUES('cmm6uujvf0001789kw6apf7g1','google','/partners/1772315432462-uchyjqc.webp',1,1,'2026-02-28T21:50:32.475+00:00','2026-02-28T21:50:32.475+00:00');
INSERT INTO Partner VALUES('cmm6uunl40002789kyzikjdr3','bing','/partners/1772315437274-ybumz55.webp',2,1,'2026-02-28T21:50:37.288+00:00','2026-02-28T21:50:37.288+00:00');
INSERT INTO Partner VALUES('cmm6uv3470003789k2iv3tgsj','adobe','/partners/1772315457401-oa524nh.webp',3,1,'2026-02-28T21:50:57.415+00:00','2026-02-28T21:50:57.415+00:00');
INSERT INTO Partner VALUES('cmm6uvadl0004789kud9z9xqp','meta','/partners/1772315466810-7mgysm7.webp',4,1,'2026-02-28T21:51:06.825+00:00','2026-02-28T21:51:06.825+00:00');
INSERT INTO Partner VALUES('cmm6uvhvc0005789k4s134qte','yandex','/partners/1772315476524-2t7fmzh.webp',5,1,'2026-02-28T21:51:16.536+00:00','2026-02-28T21:51:16.536+00:00');
CREATE TABLE IF NOT EXISTS "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'editor',
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO User VALUES('cmm6vmxbf0000149kqoqquq61','admin','$2b$12$hXnPulXuEYpqpq6V74Gj6OA0hBZySjwhHBHzA9Ed62lTTDgEzoJTa','Yönetici','admin',1,'2026-02-28T22:12:36.267+00:00','2026-02-28T22:12:36.267+00:00');
INSERT INTO User VALUES('cmm6w0khb0001909kml8n7f20','sevcan','$2b$12$F42Upomr1XJ2PjkGsZBjFObvNF3DMWuQaLR6Tx9IUdS2/EZeSmkSK','sari','admin',1,'2026-02-28T22:23:12.815+00:00','2026-02-28T22:23:27.211+00:00');
CREATE TABLE IF NOT EXISTS "Session" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expiresAt" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO Session VALUES('cmm6w14kb0002909k4v0kyqgv','cmm6w0khb0001909kml8n7f20','5a57bc27c33e95240a4ed71f4fc2cc97edbd71eb47f985f17cbbc9e3468c5ad2','2026-03-07T22:23:38.843+00:00','2026-02-28T22:23:38.843+00:00');
CREATE UNIQUE INDEX "Service_slug_key" ON "Service"("slug");
CREATE UNIQUE INDEX "Project_slug_key" ON "Project"("slug");
CREATE UNIQUE INDEX "Post_slug_key" ON "Post"("slug");
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
CREATE UNIQUE INDEX "Session_token_key" ON "Session"("token");
COMMIT;
