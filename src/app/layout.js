import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "VanLife Rentals — Lloga la teva camper i comença l'aventura",
  description:
    "Lloguer de furgonetes camper totalment equipades. Descobreix els nostres models i reserva la teva propera aventura.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ca" className={inter.variable}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}