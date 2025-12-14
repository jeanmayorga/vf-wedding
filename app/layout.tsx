import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat, Parisienne } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const parisienne = Parisienne({
  variable: "--font-parisienne",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Invitación a la boda de Victor & Fiorella",
  description: "Te invitamos a celebrar nuestra boda.",
  openGraph: {
    title: "Invitación a la boda de Victor & Fiorella",
    description: "Te invitamos a celebrar nuestra boda.",
    images: [
      {
        url: "https://jpmayorga.sirv.com/Images/WhatsApp%20Image%202025-12-08%20at%2012.31.05%20(2).jpeg",
        alt: "Victor & Fiorella",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Invitación a la boda de Victor & Fiorella",
    description: "Te invitamos a celebrar nuestra boda.",
    images: [
      "https://jpmayorga.sirv.com/Images/WhatsApp%20Image%202025-12-08%20at%2012.31.05%20(2).jpeg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${cormorant.variable} ${montserrat.variable} ${parisienne.variable} antialiased bg-[#f5f4f2] text-neutral-900 font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
