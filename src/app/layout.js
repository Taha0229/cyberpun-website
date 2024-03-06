import Footer from "@/components/footer";
import Header from "@/components/containers/header/header";
import { Providers } from "./providers";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "CyberPun | Sheikh Taha Maroof",
  description: "Hand-curated with love",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} relative overflow-x-hidden`}>
        <Providers>
          <Header />
          <main>{children}</main>
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  );
}
