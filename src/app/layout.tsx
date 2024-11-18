import type { Metadata } from "next";
import "./globals.css";
import { fontGothic, fontPoppins } from "./fonts";

export const metadata: Metadata = {
  title: "Grayola",
  description: "Dashboard de proyectos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontPoppins.variable} ${fontGothic.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
