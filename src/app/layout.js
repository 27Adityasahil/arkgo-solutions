import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/animations/SmoothScroll";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://arkgosolutions.com'),
  title: {
    template: "%s | ARKGO Solutions",
    default: "ARKGO Solutions | Premium Solar Engineering & Installation in Bihar",
  },
  description: "ARKGO Solutions provides premium, reliable, and sustainable solar energy solutions across Bihar. Specializing in residential, commercial, and industrial solar installations.",
  manifest: '/site.webmanifest',
  openGraph: {
    title: "ARKGO Solutions | Premium Solar Engineering",
    description: "ARKGO Solutions provides premium, reliable, and sustainable solar energy solutions across Bihar.",
    url: "https://arkgosolutions.com",
    siteName: "ARKGO Solutions",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} antialiased`}>
      <body className="min-h-screen flex flex-col font-sans bg-white text-slate-800">
        <SmoothScroll>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </SmoothScroll>
      </body>
    </html>
  );
}
