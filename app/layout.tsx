import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Faaiz Ali Ahmad",
  description: "The portfolio of Faaiz Ali Ahmad.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
