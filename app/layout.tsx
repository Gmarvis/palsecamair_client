import "./globals.css";
import type { Metadata } from "next";
import ThemeProviders from "@/context/themeProvider";
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
      <ThemeProviders>
        <body className="bg-white dark:bg-darkmode">{children}</body>
      </ThemeProviders>
    </html>
  );
}
