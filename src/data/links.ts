// ─── EDIT THIS FILE TO ADD / REMOVE / UPDATE LINKS ───────────────────────────
// Icon IDs map to SVG components in SocialIcons.tsx

export type LinkItem = {
  id: string;
  label: string;
  sublabel?: string;
  href: string;
  iconId: string;   // matches keys in ICON_MAP in SocialButton
  color: string;
  gradient: string;
  external?: boolean;
};

export const BRAND = {
  name: "دانار كابيتال",
  nameEn: "Danar Capital",
  tagline: "تعليم الأسواق المالية",
  taglineSub: "Forex · Stocks · Crypto",
  description:
    "تعليم تداول مجاني | توصيات يومية | شريك رسمي لـ XTB Broker",
} as const;

export const SOCIAL_LINKS: LinkItem[] = [
  {
    id: "x",
    label: "X (تويتر)",
    sublabel: "@Danar_Capital",
    href: "https://x.com/Danar_Capital",
    iconId: "x",
    color: "#E7E7E7",
    gradient:
      "linear-gradient(135deg, rgba(26,26,46,0.9) 0%, rgba(22,33,62,0.9) 50%, rgba(15,52,96,0.9) 100%)",
    external: true,
  },
  {
    id: "instagram",
    label: "إنستغرام",
    sublabel: "@danarcapital",
    href: "https://www.instagram.com/danarcapital/",
    iconId: "instagram",
    color: "#E1306C",
    gradient:
      "linear-gradient(135deg, rgba(131,58,180,0.85) 0%, rgba(253,29,29,0.85) 50%, rgba(252,176,69,0.85) 100%)",
    external: true,
  },
  {
    id: "tiktok",
    label: "تيك توك",
    sublabel: "@danar.capital",
    href: "https://www.tiktok.com/@danar.capital",
    iconId: "tiktok",
    color: "#69C9D0",
    gradient:
      "linear-gradient(135deg, rgba(1,1,1,0.9) 0%, rgba(105,201,208,0.6) 50%, rgba(238,29,82,0.7) 100%)",
    external: true,
  },
  {
    id: "snapchat",
    label: "سناب شات",
    sublabel: "Danar Capital",
    href: "https://snapchat.com/t/dTiudKnV",
    iconId: "snapchat",
    color: "#FFFC00",
    gradient:
      "linear-gradient(135deg, rgba(50,40,0,0.9) 0%, rgba(100,90,0,0.9) 100%)",
    external: true,
  },
  {
    id: "linkedin",
    label: "لينكد إن",
    sublabel: "Danar Capital",
    href: "https://www.linkedin.com/company/danar-capital/",
    iconId: "linkedin",
    color: "#0A66C2",
    gradient:
      "linear-gradient(135deg, rgba(0,60,100,0.9) 0%, rgba(0,119,181,0.9) 100%)",
    external: true,
  },
  // ── ADD MORE LINKS BELOW ─────────────────────────────────────────────────────
  // {
  //   id: "youtube",
  //   label: "يوتيوب",
  //   sublabel: "Danar Capital",
  //   href: "https://youtube.com/@danarcapital",
  //   iconId: "youtube",
  //   color: "#FF0000",
  //   gradient: "linear-gradient(135deg, rgba(80,0,0,0.9) 0%, rgba(200,0,0,0.9) 100%)",
  //   external: true,
  // },
  // {
  //   id: "telegram",
  //   label: "تيليغرام VIP",
  //   sublabel: "مجموعة حصرية",
  //   href: "https://t.me/danarcapital",
  //   iconId: "telegram",
  //   color: "#229ED9",
  //   gradient: "linear-gradient(135deg, rgba(0,40,80,0.9) 0%, rgba(34,158,217,0.9) 100%)",
  //   external: true,
  // },
  // {
  //   id: "xtb",
  //   label: "سجّل في XTB",
  //   sublabel: "ابدأ رحلتك مجاناً",
  //   href: "https://www.xtb.com/ar",
  //   iconId: "globe",
  //   color: "#C9A227",
  //   gradient: "linear-gradient(135deg, rgba(80,55,0,0.9) 0%, rgba(180,130,20,0.9) 100%)",
  //   external: true,
  // },
];
