import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "Shahin Behzadrad",
  description: "Shahin Behzadrad landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
