import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "دانار كابيتال",
    short_name: "Danar Capital",
    description: "تعليم تداول مجاني | توصيات يومية | شريك XTB",
    start_url: "/",
    display: "standalone",
    background_color: "#070B15",
    theme_color: "#070B15",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
