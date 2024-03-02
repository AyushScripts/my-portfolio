import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ayush B- Programmer & Full-stack Web Developer",
  description: "Portfolio of a Passionate Frontend Dev and an AI Enthusiast.",
  openGraph: {
    images: {
      url: '/opengraph-image.jpg',
    }
  },
  };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
