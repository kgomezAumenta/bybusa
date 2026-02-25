import type { Metadata } from "next";
import { Montserrat, Staatliches } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "700", "900"],
});

const staatliches = Staatliches({
  subsets: ["latin"],
  variable: "--font-staatliches",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "BYB USA | Authentic Touch of Homemade Taste",
  description: "Artisanal quality sauces, dressings, and culinary products. 100% natural and made with passion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${staatliches.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
