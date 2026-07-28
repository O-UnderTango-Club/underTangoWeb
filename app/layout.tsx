import type { Metadata } from "next";
import { Geist, Geist_Mono, Cinzel } from "next/font/google";
import Script from "next/script";
import "./styles/index.css";
import { AuthProvider } from "./context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.undertangoclub.com"),

  title: "Ø UnderTango Club | Shows y Producción en Puerto Iguazú",

  description:
    "Productora artística de la Triple Frontera. Shows de tango, música en vivo, Ø Tango Rave y producciones a medida para hoteles, gastronomía y eventos.",

  applicationName: "Ø UnderTango Club",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Ø UnderTango Club | Shows y Producción en Puerto Iguazú",
    description:
      "Espectáculos, música en vivo y producción escénica para hoteles, gastronomía y eventos de la Triple Frontera.",
    url: "https://www.undertangoclub.com",
    siteName: "Ø UnderTango Club",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/assets/images/undertango-social-card.jpg",
        width: 1200,
        height: 630,
        alt: "Ø UnderTango Club — Shows y producción artística en la Triple Frontera",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ø UnderTango Club | Shows y Producción en Puerto Iguazú",
    description:
      "Espectáculos, música en vivo y producción escénica en la Triple Frontera.",
    images: ["/assets/images/undertango-social-card.jpg"],
  },

  verification: {
    other: {
      "facebook-domain-verification":
        "lx79g9tyq6nhj3ef5u8m8vpwp39r6h",
    },
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>

      <body>
        <AuthProvider>{children}</AuthProvider>

        {/* CHATBOT */}
        <Script id="chatbot-script" strategy="afterInteractive">
          {`
            (function() {
              var s = document.createElement('script');
              s.src = 'https://script2.chat-robot.com/?token=ed1139a97e102e18ec88a20b30f97aa3';
              s.async = true;
              document.body.appendChild(s);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
