import type { Metadata } from "next";
import "./globals.css";
import Layout from '@/components/layout/Layout';
import ScrollToTop from '@/components/ui/ScrollToTop';

export const metadata: Metadata = {
  title: "FIBS College & Driving",
  description: "Empowering students with quality education and practical skills for a successful future in driving and technical fields.",
  icons: {
    icon: "/images/fibs_Logo_Bg.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col font-sans antialiased">
        <Layout>
          {children}
        </Layout>
        <ScrollToTop />
      </body>
    </html>
  );
}
