import "./globals.css";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "PulseCamair",
  description: "The go-to source for tech news in Cameroon and Africa.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        {children}
      </body>
    </html>
  );
}
