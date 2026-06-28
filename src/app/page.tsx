import type { Metadata } from "next";
import AnimatedBackground from "@/components/AnimatedBackground";
import ProfileHeader from "@/components/ProfileHeader";
import SocialButton from "@/components/SocialButton";
import Footer from "@/components/Footer";
import { SOCIAL_LINKS, BRAND } from "@/data/links";

export const metadata: Metadata = {
  title: `${BRAND.name} | ${BRAND.tagline}`,
  description: BRAND.description,
  openGraph: {
    title: `${BRAND.name} — ${BRAND.tagline}`,
    description: BRAND.description,
    url: "https://links.danarcapital.com",
    siteName: BRAND.nameEn,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: BRAND.nameEn }],
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} | ${BRAND.tagline}`,
    description: BRAND.description,
    images: ["/og-image.png"],
    creator: "@Danar_Capital",
  },
};

export default function Home() {
  return (
    <main
      dir="rtl"
      className="relative min-h-dvh flex items-start justify-center overflow-x-hidden"
    >
      {/* Animated background — renders client side */}
      <AnimatedBackground />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col w-full px-4 py-10 gap-8"
        style={{ maxWidth: 460 }}
      >
        {/* Profile header */}
        <ProfileHeader />

        {/* Divider */}
        <div
          style={{
            height: 1,
            background:
              "linear-gradient(90deg, transparent, rgba(201,162,39,0.2), transparent)",
          }}
          aria-hidden="true"
        />

        {/* Links */}
        <nav
          className="flex flex-col gap-3"
          aria-label="روابط دانار كابيتال"
        >
          {SOCIAL_LINKS.map((link, i) => (
            <SocialButton key={link.id} link={link} index={i} />
          ))}
        </nav>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
