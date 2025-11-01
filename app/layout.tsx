import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aerial Prompt Generator",
  description:
    "Detailed imagery prompt describing a private jet soaring over a historic Japanese village.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
