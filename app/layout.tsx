import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Find your next camping spot | Camp Spot',
  description: 'Find your next camping spot with Camp Spot today! 🏕️',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="relative overflow-hidden">{children}</main>
      </body>
    </html>
  );
}
