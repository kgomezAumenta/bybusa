import type { Metadata } from "next";
import { Inter, Roboto_Condensed } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto-condensed"
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
    <html lang="en" className={`${inter.variable} ${robotoCondensed.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
