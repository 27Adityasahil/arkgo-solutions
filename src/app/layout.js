import { Roboto_Slab, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";
import { QuoteModalProvider } from "@/contexts/QuoteModalContext";
import QuoteModal from "@/components/common/QuoteModal";
import BackendConnectionProvider from "@/components/system/BackendConnectionProvider";

const robotoSlab = Roboto_Slab({
  variable: "--font-heading",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-sans",
  weight: ["300", "400", "500", "700"],
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
    <html lang="en" className={`${robotoSlab.variable} ${roboto.variable} antialiased`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
        <QuoteModalProvider>
          <BackendConnectionProvider>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            <FloatingWhatsApp />
            <QuoteModal />
          </BackendConnectionProvider>
        </QuoteModalProvider>
      </body>
    </html>
  );
}
