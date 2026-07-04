import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site";

export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(139,92,246,0.25), transparent 70%), #09090b",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            borderRadius: 9999,
            background: "linear-gradient(135deg, #a855f7, #8b5cf6, #6d28d9)",
            fontSize: 48,
            fontWeight: 700,
            marginBottom: 40,
          }}
        >
          {siteConfig.initials}
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: -2 }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 36, color: "#a855f7", marginTop: 12 }}>
          {siteConfig.role}
        </div>
        <div style={{ fontSize: 24, color: "#94a3b8", marginTop: 24 }}>
          Full Stack Developer | Java | Python | React | Node.js
        </div>
      </div>
    ),
    size,
  );
}
