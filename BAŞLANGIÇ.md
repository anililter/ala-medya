# Alamedya — Veritabanlı Ajans Sitesi Başlangıç Rehberi

Bu proje **Next.js 16**, **React 19**, **Tailwind CSS 4** ve **Prisma 7 (SQLite)** ile kurulmuş bir ajans sitesidir. Veritabanı ile hizmetler, projeler ve iletişim mesajları yönetilir.

## Nereden Başlamalı?

### 1. Bağımlılıklar ve veritabanı

```bash
npm install
npx prisma migrate dev    # Tabloları oluşturur (zaten uygulandıysa atla)
npm run db:seed           # Örnek hizmet ve proje verisi ekler
```

### 2. Geliştirme sunucusu

```bash
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) adresine gidin. Ana sayfada veritabanından gelen **Hizmetler** ve **Projeler** listelenir; **İletişim** formu mesajları veritabanına kaydeder.

### 3. Veritabanını görüntüleme / düzenleme

```bash
npm run db:studio
```

Prisma Studio açılır; tarayıcıdan `Service`, `Project` ve `ContactMessage` tablolarını görüntüleyip düzenleyebilirsiniz.

---

## Proje Yapısı

| Konum | Açıklama |
|--------|-----------|
| `prisma/schema.prisma` | Veritabanı şeması (Service, Project, ContactMessage) |
| `prisma/seed.ts` | Örnek veri script’i |
| `src/lib/db.ts` | Prisma client (SQLite adapter) — tüm veritabanı erişimi buradan |
| `src/app/api/services/route.ts` | GET: Hizmet listesi API |
| `src/app/api/projects/route.ts` | GET: Proje listesi API |
| `src/app/api/contact/route.ts` | POST: İletişim mesajı kaydetme API |
| `src/app/page.tsx` | Ana sayfa (sunucuda veri çekiyor) |
| `src/components/ContactForm.tsx` | İletişim formu (istemci bileşeni) |

---

## Veritabanı Modelleri

- **Service**: Hizmetler (başlık, slug, açıklama, ikon, sıra).
- **Project**: Projeler / portföy (başlık, açıklama, müşteri, isteğe bağlı olarak bir hizmete bağlı).
- **ContactMessage**: İletişim formundan gelen mesajlar (ad, e-posta, konu, mesaj, okundu bilgisi).

Şemayı değiştirdikten sonra:

```bash
npx prisma migrate dev --name aciklama
```

---

## Sonraki Adımlar

1. **Admin paneli**: Mesajları listelemek/okundu işaretlemek için basit bir `/admin` sayfası eklenebilir.
2. **Proje detay sayfası**: `/projeler/[slug]` gibi dinamik sayfalar.
3. **Görsel yükleme**: Proje görselleri için dosya yükleme (örn. Cloudinary veya yerel `public/`).
4. **Üretim veritabanı**: Canlıda SQLite yerine **PostgreSQL** kullanmak için `schema.prisma` içinde `provider = "postgresql"` yapıp `DATABASE_URL` ile bağlanabilirsiniz; Prisma 7’de PostgreSQL için `@prisma/adapter-pg` kullanılır.

---

## Özet Komutlar

| Komut | Açıklama |
|--------|-----------|
| `npm run dev` | Geliştirme sunucusu |
| `npm run build` | Production build |
| `npm run db:seed` | Örnek veri yükle |
| `npm run db:studio` | Prisma Studio |
| `npx prisma migrate dev` | Migration uygula / yeni migration oluştur |
| `npx prisma generate` | Prisma Client’ı yeniden üret |

Bu rehberle projeyi çalıştırıp, veritabanını ve API’leri kullanarak ajans sitesini genişletebilirsiniz.
