"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowLeft, Instagram, Linkedin, Globe, Youtube } from "lucide-react";
import type { LinkItem } from "@/data/links";
import { TikTokIcon, SnapchatIcon, XIcon, TelegramIcon } from "@/components/SocialIcons";
import { useRef } from "react";

// ── Icon map: string → component ────────────────────────────────────────────
const ICON_MAP: Record<string, React.ComponentType<{ style?: React.CSSProperties }>> = {
  x: XIcon,
  instagram: Instagram,
  tiktok: TikTokIcon,
  snapchat: SnapchatIcon,
  linkedin: Linkedin,
  youtube: Youtube,
  telegram: TelegramIcon,
  globe: Globe,
};

function PlatformIcon({ link, size = 20 }: { link: LinkItem; size?: number }) {
  const Icon = ICON_MAP[link.iconId] ?? Globe;
  return <Icon style={{ width: size, height: size, color: link.color, flexShrink: 0 }} />;
}

// ── Framer variants ──────────────────────────────────────────────────────────
const variants = {
  hidden: { opacity: 0, y: 28, scale: 0.92 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 220, damping: 20, delay: 0.55 + i * 0.09 },
  }),
};

export default function SocialButton({ link, index }: { link: LinkItem; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);

  // Subtle 3-D tilt
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-1, 1], [2, -2]), { stiffness: 400, damping: 40 });
  const rotateY = useSpring(useTransform(mx, [-1, 1], [-2, 2]), { stiffness: 400, damping: 40 });

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    my.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  };
  const onMouseLeave = () => { mx.set(0); my.set(0); };

  return (
    <motion.div custom={index} variants={variants} initial="hidden" animate="visible" style={{ perspective: 800 }}>
      <motion.a
        ref={ref}
        href={link.href}
        target={link.external ? "_blank" : undefined}
        rel={link.external ? "noopener noreferrer" : undefined}
        aria-label={`تابعنا على ${link.label}`}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d", display: "flex", position: "relative", height: 64, alignItems: "center", gap: 14, paddingLeft: 16, paddingRight: 16, borderRadius: 20, textDecoration: "none", userSelect: "none" }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        whileHover={{ scale: 1.025 }}
        whileTap={{ scale: 0.97 }}
        className="group"
      >
        {/* Base glass layer */}
        <div style={{
          position: "absolute", inset: 0, borderRadius: 20,
          background: "linear-gradient(135deg, rgba(27,58,107,0.2) 0%, rgba(27,58,107,0.08) 100%)",
          border: "1px solid rgba(255,255,255,0.07)",
          boxShadow: "0 2px 12px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)",
        }} />

        {/* Hover gradient sweep */}
        <div className="hover-gradient" style={{
          position: "absolute", inset: 0, borderRadius: 20, opacity: 0,
          background: link.gradient, transition: "opacity 0.35s ease",
        }} />

        {/* Glass shimmer */}
        <div style={{
          position: "absolute", inset: 0, borderRadius: 20, pointerEvents: "none",
          background: "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.01) 50%, rgba(0,0,0,0.08) 100%)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
        }} />

        {/* Glow on hover */}
        <div className="hover-glow" style={{
          position: "absolute", inset: 0, borderRadius: 20, pointerEvents: "none", opacity: 0,
          boxShadow: `0 0 0 1px ${link.color}40, 0 8px 32px ${link.color}20, 0 2px 8px rgba(0,0,0,0.4)`,
          transition: "opacity 0.35s ease",
        }} />

        {/* Icon box */}
        <div style={{
          position: "relative", zIndex: 1, flexShrink: 0,
          width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center",
          borderRadius: 12, background: `${link.color}18`, border: `1px solid ${link.color}35`,
          transition: "transform 0.2s ease",
        }}>
          <PlatformIcon link={link} size={20} />
        </div>

        {/* Labels */}
        <div style={{ position: "relative", zIndex: 1, flex: 1, minWidth: 0, direction: "rtl" }}>
          <p style={{ fontFamily: "'Tajawal', sans-serif", fontWeight: 700, fontSize: 15, color: "#fff", lineHeight: 1.3, overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
            {link.label}
          </p>
          {link.sublabel && (
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, fontSize: 11, color: "rgba(217,217,217,0.5)", marginTop: 1, direction: "ltr", textAlign: "right", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
              {link.sublabel}
            </p>
          )}
        </div>

        {/* Arrow */}
        <ArrowLeft size={15} style={{ position: "relative", zIndex: 1, flexShrink: 0, color: link.color, opacity: 0.45, transition: "all 0.2s ease" }} />

        {/* Inline hover CSS */}
        <style>{`
          .group:hover .hover-gradient { opacity: 1 !important; }
          .group:hover .hover-glow { opacity: 1 !important; }
        `}</style>
      </motion.a>
    </motion.div>
  );
}
