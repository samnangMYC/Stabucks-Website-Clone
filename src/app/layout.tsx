import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import localfont from "next/font/local"
import "./globals.css";

const roboto  = Roboto({ subsets: ["latin"],weight: ['400']});
const sanserif = localfont({
  src: [{
    path: "../../public/font/Helvetica.ttf",
    weight: "400"
  }],
  variable: "--primay-font"
})
export const metadata: Metadata = {
  title: "Starbuck Store",
  description: "Drink the best drinks ever!!",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/apple-icon.png',
  },
  manifest: '/site.webmanifest'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    

    <html lang="en" className="!scroll-smooth">
      <body className={''}>{children}</body>
    </html>
  );
}
