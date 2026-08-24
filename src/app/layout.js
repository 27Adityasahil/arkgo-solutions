import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/animations/SmoothScroll";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: "%s | ARKGO SOLUTIONS",
    default: "ARKGO SOLUTIONS - Go Solar with Arkgo",
  },
  description: "Forget About Electricity Bills — Go Solar with Arkgo. Reliable, sustainable, and cost-effective solar power solutions across Bihar.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} antialiased`}>
      <body className="min-h-screen flex flex-col font-sans bg-white text-slate-800">
        <SmoothScroll>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
