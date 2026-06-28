# دانار كابيتال — Danar Capital Links Page

A premium, production-ready Linktree-style landing page built with Next.js 15, React 19, TypeScript, Tailwind CSS v4, and Framer Motion.

## 🚀 Tech Stack

| Tool | Version |
|------|---------|
| Next.js | 15 (App Router) |
| React | 19 |
| TypeScript | 5 |
| Tailwind CSS | v4 |
| Framer Motion | 11 |
| Lucide React | 0.475 |

---

## 📦 Installation

```bash
git clone https://github.com/your-org/danar-capital.git
cd danar-capital
npm install
```

---

## 🛠 Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🏗 Build

```bash
npm run build
npm start
```

---

## 🚀 Deploy to Vercel

### Option 1 — Vercel CLI (fastest)
```bash
npm i -g vercel
vercel
```

### Option 2 — GitHub Integration
1. Push to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repo → click **Deploy**
4. Zero configuration needed

---

## 🌐 Custom Domain

In Vercel dashboard:
1. **Settings → Domains**
2. Add `links.danarcapital.com`
3. Set DNS record per instructions

---

## ✏️ Editing Links

**Only edit `src/data/links.ts`** — everything else updates automatically.

```ts
// Add a new link:
{
  id: "youtube",
  label: "يوتيوب",
  sublabel: "Danar Capital",
  href: "https://youtube.com/@danarcapital",
  icon: Youtube,
  color: "#FF0000",
  gradient: "linear-gradient(135deg, #FF0000 0%, #CC0000 100%)",
  external: true,
},

// Add Telegram VIP:
{
  id: "telegram",
  label: "تيليغرام VIP",
  sublabel: "مجموعة حصرية",
  href: "https://t.me/danarcapital",
  icon: Send,
  color: "#229ED9",
  gradient: "linear-gradient(135deg, #229ED9 0%, #1a7abf 100%)",
  external: true,
},

// Add XTB affiliate link:
{
  id: "xtb",
  label: "سجّل في XTB",
  sublabel: "ابدأ رحلتك مجاناً",
  href: "https://www.xtb.com/ar?ref=danar",
  icon: Globe,
  color: "#C9A227",
  gradient: "linear-gradient(135deg, #C9A227 0%, #a07d1c 100%)",
  external: true,
},
```

---

## 🎨 Editing Colors

All colors are defined in two places:

### 1. `src/app/globals.css` — CSS variables
```css
@theme {
  --color-bg:      #070B15;   /* Background */
  --color-primary: #1B3A6B;   /* Blue primary */
  --color-accent:  #C9A227;   /* Gold accent */
  --color-white:   #FFFFFF;
  --color-muted:   #D9D9D9;
}
```

### 2. `src/data/links.ts` — Brand config
```ts
export const BRAND = {
  name: "دانار كابيتال",
  nameEn: "Danar Capital",
  tagline: "تعليم الأسواق المالية",
  taglineSub: "Forex · Stocks · Crypto",
  description: "...",
};
```

---

## 🖼 Replacing Logo

Currently using a text monogram "DC". To use your real logo:

1. Add your logo to `/public/logo.png` (min 200×200px, transparent PNG)
2. Open `src/components/ProfileHeader.tsx`
3. Replace the `<span>DC</span>` block with:

```tsx
import Image from "next/image";

// Inside LogoRing, replace the <span> with:
<Image
  src="/logo.png"
  alt="Danar Capital Logo"
  width={60}
  height={60}
  priority
  style={{ objectFit: "contain" }}
/>
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx        ← Root layout, metadata, fonts
│   ├── page.tsx          ← Main page
│   ├── globals.css       ← Tailwind v4 + custom theme
│   ├── manifest.ts       ← PWA manifest
│   ├── robots.ts         ← SEO robots
│   └── sitemap.ts        ← XML sitemap
├── components/
│   ├── AnimatedBackground.tsx  ← Canvas particles + orbs
│   ├── ProfileHeader.tsx       ← Logo + name + badge
│   ├── SocialButton.tsx        ← Premium glass button
│   ├── SocialIcons.tsx         ← Custom SVG icons
│   └── Footer.tsx              ← Footer + copyright
├── data/
│   └── links.ts          ← ⭐ EDIT THIS FILE ONLY
└── lib/
    └── utils.ts           ← cn() utility
```

---

## 🎯 Performance Targets

| Metric | Target |
|--------|--------|
| Performance | 100 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

---

## 📄 License

© 2025 Danar Capital. All rights reserved.
