import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import Providers from "./providers";
import { Navbar } from "./common/components/navbar";
import HamburgerIcon from "./assets/svg/hamburger";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dermot Boyle portfolio",
  description: "Mobile and web developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.className} ${montserrat.className}`}>
      <body>
        <Providers>
          <Navbar />
          <div className="md:hidden">
            <HamburgerIcon />
          </div>
          <div id="calendly">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
