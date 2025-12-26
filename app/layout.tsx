import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/index.css";
import { AuthProvider } from "./context/AuthContext";
import PWAServiceWorker from "./Android-module/PWAServiceWorker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UnderTango Club | Milonga y Clases de Tango en Iguazú",
  description:
    "Descubre el auténtico tango en Iguazú con nuestras clases grupales y privadas, espectáculos de milonga y moda exclusiva. ¡Vive la pasión del tango en la triple frontera!",
  manifest: "/manifest.json",
  icons:{
    icon: '../public/favicon.ico'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>

      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>{children}</AuthProvider>
        <PWAServiceWorker />
      </body>
    </html>
  );
}

import { Cinzel } from "next/font/google";

export const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

