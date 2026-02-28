# GitHub + Vercel ile Canlıya Alma

Bu proje PostgreSQL kullanır. Vercel'de canlıya almak için aşağıdaki adımları izleyin.

## 1. PostgreSQL veritabanı (ücretsiz)

**Neon** (önerilen, ücretsiz):

1. [neon.tech](https://neon.tech) → Sign up (GitHub ile giriş yapabilirsiniz).
2. Yeni proje oluşturun, bir veritabanı seçin.
3. **Connection string**’i kopyalayın (örnek: `postgresql://user:pass@ep-xxx.region.aws.neon.tech/neondb?sslmode=require`).

**Alternatif:** Vercel Dashboard → Storage → Postgres → Create. Bağlantı bilgisi otomatik projeye eklenir.

## 2. Projeyi GitHub’a push edin

```bash
cd /Users/anililter/Desktop/alamedya

# Henüz git repo değilse:
git init
git add .
git commit -m "Vercel deploy için hazır"

# GitHub’da yeni repo oluşturun (github.com/new), sonra:
git remote add origin https://github.com/KULLANICI_ADINIZ/alamedya.git
git branch -M main
git push -u origin main
```

## 3. Vercel’e bağlayın

1. [vercel.com](https://vercel.com) → **Login** (GitHub ile).
2. **Add New…** → **Project**.
3. **Import** ile GitHub’daki `alamedya` reposunu seçin.
4. **Environment Variables** bölümüne gidin (mutlaka deploy’dan önce ekleyin):
   - **Name:** `DATABASE_URL`
   - **Value:** Neon’dan kopyaladığınız PostgreSQL connection string (veya Vercel Postgres kullandıysanız otomatik gelir).
5. **Deploy**’a tıklayın.

Vercel build sırasında `prisma generate` ve `next build` çalışacak.

## 4. Veritabanı tablolarını oluşturun

İlk deploy’dan sonra tabloları oluşturmanız gerekir. **Bilgisayarınızda** (DATABASE_URL .env’de olmalı):

```bash
# .env dosyasına DATABASE_URL ekleyin (Neon connection string)
npx prisma db push
npm run db:seed
npx tsx scripts/create-admin.ts
```

Veya Vercel’in **Settings → Environment Variables** kısmına eklediğiniz `DATABASE_URL` ile yerelde bir kez:

```bash
echo 'DATABASE_URL="postgresql://..."' > .env
npx prisma db push
npm run db:seed
npx tsx scripts/create-admin.ts
```

Bundan sonra site canlıda çalışır; admin girişi: **admin** / **admin123**.

## 5. Sonraki güncellemeler

Kod değişikliğini GitHub’a push ettiğinizde Vercel otomatik yeni deploy alır:

```bash
git add .
git commit -m "Güncelleme"
git push
```

---

**Özet:** GitHub’da repo → Vercel’de import → `DATABASE_URL` (Neon veya Vercel Postgres) ekleyin → Deploy → Yerelde `prisma db push` + seed + create-admin çalıştırın.
