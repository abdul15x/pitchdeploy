import '@/app/globals.css'; // Ensure this path is correct based on your directory structure
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PitchBolt - AI-Powered Startup Pitch Generator',
  description: 'Generate compelling startup pitches with AI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-black`}>
        {children}
      </body>
    </html>
  );
}
