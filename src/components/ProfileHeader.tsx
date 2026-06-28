"use client";

import { motion } from "framer-motion";
import { BRAND } from "@/data/links";

/* Golden animated ring around logo */
function LogoRing() {
  return (
    <div className="relative">
      {/* Outer animated gradient ring */}
      <div
        className="absolute inset-0 rounded-full animate-pulse-glow"
        style={{
          background:
            "conic-gradient(from 0deg, #C9A227, #F0C040, #1B3A6B, #C9A227)",
          padding: "2.5px",
          borderRadius: "50%",
        }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{ background: "#070B15" }}
        />
      </div>

      {/* Inner glow ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          boxShadow:
            "0 0 0 1px rgba(201,162,39,0.3), 0 0 24px rgba(201,162,39,0.2), 0 0 48px rgba(201,162,39,0.08)",
        }}
      />

      {/* Logo container */}
      <div
        className="relative flex items-center justify-center rounded-full"
        style={{
          width: 96,
          height: 96,
          background:
            "radial-gradient(circle at 35% 35%, #2a5298 0%, #1B3A6B 50%, #0d1f40 100%)",
          border: "1.5px solid rgba(201,162,39,0.4)",
          boxShadow:
            "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
        }}
      >
        {/* Monogram DC */}
        <span
          style={{
            fontFamily: "'Cairo', sans-serif",
            fontWeight: 800,
            fontSize: 28,
            letterSpacing: "-1px",
            background: "linear-gradient(135deg, #C9A227 0%, #F0C040 50%, #C9A227 100%)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            userSelect: "none",
          }}
        >
          DC
        </span>

        {/* Inner shine */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 50%, rgba(0,0,0,0.2) 100%)",
          }}
        />
      </div>
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 22 },
  },
};

export default function ProfileHeader() {
  return (
    <motion.div
      className="flex flex-col items-center gap-4 pb-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Logo */}
      <motion.div variants={itemVariants} style={{ width: 96, height: 96 }}>
        <LogoRing />
      </motion.div>

      {/* Brand name */}
      <motion.div className="flex flex-col items-center gap-1" variants={itemVariants}>
        <h1
          className="text-gradient"
          style={{
            fontFamily: "'Cairo', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(22px, 6vw, 28px)",
            letterSpacing: "-0.3px",
            lineHeight: 1.2,
          }}
        >
          {BRAND.name}
        </h1>

        {/* English sub-name */}
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 600,
            fontSize: 11,
            letterSpacing: "0.15em",
            color: "rgba(201,162,39,0.6)",
            textTransform: "uppercase",
          }}
        >
          {BRAND.nameEn}
        </p>
      </motion.div>

      {/* Divider */}
      <motion.div
        variants={itemVariants}
        style={{
          width: 40,
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(201,162,39,0.4), transparent)",
        }}
      />

      {/* Tagline */}
      <motion.div className="flex flex-col items-center gap-1" variants={itemVariants}>
        <p
          style={{
            fontFamily: "'Tajawal', sans-serif",
            fontWeight: 500,
            fontSize: 15,
            color: "rgba(255,255,255,0.75)",
            letterSpacing: "0.02em",
          }}
        >
          {BRAND.tagline}
        </p>

        {/* Market types */}
        <div className="flex items-center gap-2">
          {BRAND.taglineSub.split(" · ").map((tag, i) => (
            <span key={tag}>
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 500,
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  color: "rgba(201,162,39,0.55)",
                  textTransform: "uppercase",
                }}
              >
                {tag}
              </span>
              {i < BRAND.taglineSub.split(" · ").length - 1 && (
                <span
                  style={{
                    marginLeft: 8,
                    color: "rgba(201,162,39,0.25)",
                    fontSize: 8,
                  }}
                >
                  ◆
                </span>
              )}
            </span>
          ))}
        </div>
      </motion.div>

      {/* XTB partner badge */}
      <motion.div variants={itemVariants}>
        <div
          className="glass flex items-center gap-2 px-4 py-2 rounded-full"
          style={{
            border: "1px solid rgba(201,162,39,0.2)",
            boxShadow: "0 2px 12px rgba(201,162,39,0.08)",
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#4ade80",
              boxShadow: "0 0 6px #4ade80",
            }}
          />
          <span
            style={{
              fontFamily: "'Tajawal', sans-serif",
              fontWeight: 500,
              fontSize: 12,
              color: "rgba(255,255,255,0.65)",
            }}
          >
            شريك رسمي لـ{" "}
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                color: "#C9A227",
                fontWeight: 700,
                fontSize: 11,
              }}
            >
              XTB
            </span>{" "}
            Broker
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
