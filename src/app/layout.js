import './globals.css';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Marley Hoban | Portfolio',
  description: 'Mechanical engineering portfolio showcasing projects.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
