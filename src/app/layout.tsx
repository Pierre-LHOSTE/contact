import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "vingt-douze | Contact",
  description: "Site personnel de vingt-douze",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
