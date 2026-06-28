"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      className="flex flex-col items-center gap-3 pt-4 pb-8"
    >
      {/* Divider */}
      <div
        style={{
          width: 80,
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(201,162,39,0.25), transparent)",
        }}
      />

      {/* XTB CTA */}
      <a
        href="https://www.xtb.com/ar"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 transition-opacity duration-200 hover:opacity-80"
        aria-label="سجّل في XTB مجاناً"
      >
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#C9A227",
            boxShadow: "0 0 6px rgba(201,162,39,0.6)",
          }}
        />
        <span
          style={{
            fontFamily: "'Tajawal', sans-serif",
            fontWeight: 500,
            fontSize: 12,
            color: "rgba(255,255,255,0.4)",
          }}
        >
          ابدأ رحلتك مجاناً عبر{" "}
          <span
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              color: "rgba(201,162,39,0.65)",
              fontSize: 11,
            }}
          >
            XTB
          </span>
        </span>
      </a>

      {/* Copyright */}
      <p
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 400,
          fontSize: 10,
          color: "rgba(217,217,217,0.2)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        © {year} Danar Capital · All Rights Reserved
      </p>
    </motion.footer>
  );
}
