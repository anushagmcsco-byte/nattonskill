import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Natton SkillX | AI • Future Skills • Career Transformation',
  description: 'Empowering Students, Professionals, Educators, and Communities to thrive in the age of Artificial Intelligence with premium education and custom career pathways.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Brand X SVG favicon to display in the tab browser.
  const faviconSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none">
      <defs>
        <linearGradient id="g" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0B1C41" />
          <stop offset="40%" stopColor="#005AEE" />
          <stop offset="80%" stopColor="#00D4FF" />
          <stop offset="100%" stopColor="#29FFFF" />
        </linearGradient>
      </defs>
      <path d="M28 24 C28 20, 36 20, 42 26 L94 102 C100 108, 92 108, 86 102 L34 26 C31 22, 28 24, 28 24 Z" fill="url(#g)" opacity="0.8" />
      <path d="M32 104 C26 110, 20 102, 26 96 L86 36 L100 24 L102 38 L92 48 L32 104 Z" fill="url(#g)" />
      <path d="M102 20 L104 46 L94 40 L80 48 L76 34 L90 26 Z" fill="url(#g)" />
    </svg>
  `.trim().replace(/\s+/g, ' ');

  const faviconUrl = `data:image/svg+xml;utf8,${encodeURIComponent(faviconSvg)}`;

  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <link rel="icon" type="image/svg+xml" href={faviconUrl} />
      </head>
      <body className="antialiased text-[#0A2540] bg-[#F8FAFC]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

