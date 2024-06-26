import { Inter } from 'next/font/google'; 
import './globals.css';
import Navbar from './navbar';

const inter = Inter({ subsets: ['latin'], weight: '600' });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
