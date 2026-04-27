import type { Metadata } from "next";
import Script from "next/script";

import { defaultLocale } from "@/lib/i18n/config";

const target = `/${defaultLocale}/`;

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  alternates: { canonical: target },
};

export default function Root() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0;url=${target}`} />
      <Script id="root-redirect" strategy="beforeInteractive">
        {`window.location.replace(${JSON.stringify(target)});`}
      </Script>
      <main
        style={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          textAlign: "center",
          padding: "2rem",
          background: "#04101f",
          color: "#ffffff",
        }}
      >
        <div>
          <p
            style={{
              marginBottom: "0.5rem",
              letterSpacing: "0.18em",
              fontSize: "0.75rem",
              textTransform: "uppercase",
              opacity: 0.7,
            }}
          >
            JSMediaSoft
          </p>
          <p>
            Redirecting to{" "}
            <a href={target} style={{ color: "#22d3ee" }}>
              {target}
            </a>
          </p>
        </div>
      </main>
    </>
  );
}
