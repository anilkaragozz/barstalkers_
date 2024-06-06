import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  weight: ["300"],
  style: ["normal"],
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Barstalkers",
  description: "Barstalkers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <div className="h-full w-full bg-white bg-grid-black/[0.05]">
          {children}
        </div>
      </body>
    </html>
  );
}
