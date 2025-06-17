import type { Metadata } from "next";
import { Rubik, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

import { Footer } from "@/components/footer";

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  display: 'swap',
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Merrick Pilon",
  description: "Merrick Pilon's Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${rubik.variable} ${robotoMono.variable}`}
      suppressHydrationWarning
    >
      <body
        className="font-rubik"
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
