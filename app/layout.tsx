import './globals.css';
import type { Metadata } from 'next';
import { Tajawal } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const tajawal = Tajawal({ 
  subsets: ['arabic'],
  weight: ['200', '300', '400', '500', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'أتيليه الأناقة - تصميم الأزياء المخصصة',
  description: 'موقع متخصص في تصميم الأزياء المخصصة للفتيات مع أحدث الموضات والتصاميم العصرية',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${tajawal.className} antialiased`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}