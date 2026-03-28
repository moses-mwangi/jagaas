import type { Metadata } from "next";
import "./globals.css";
import Layout from '@/components/layout/Layout';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { Inter, Poppins, Roboto } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap'
});

const roboto = Roboto({ 
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap'
});

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
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${roboto.variable}`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <Layout>
          {children}
        </Layout>
        <ScrollToTop />
      </body>
    </html>
  );
}
