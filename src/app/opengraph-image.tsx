import { ImageResponse } from "next/og";
import { company } from "@/data/company";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
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
          background: "#0e1b36",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 96,
            fontWeight: 700,
            color: "#f8f5ee",
            letterSpacing: 6,
          }}
        >
          MIGNACCA
        </div>
        <div
          style={{
            marginTop: 24,
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            color: "#d9bd8a",
            letterSpacing: 4,
            textTransform: "uppercase",
            fontFamily: "Arial, sans-serif",
          }}
        >
          Assessoria · Consultoria · Contabilidade
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 24,
            color: "rgba(248,245,238,0.7)",
            fontFamily: "Arial, sans-serif",
          }}
        >
          {`${company.address.city}/${company.address.state}`}
        </div>
      </div>
    ),
    { ...size },
  );
}
