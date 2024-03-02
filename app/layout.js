import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ayush B- Programmer & Full-stack Web Developer",
  description: "Portfolio of a Passionate Frontend Dev and an AI Enthusiast.",
  openGraph: {
    images: {
      url: './images/OG-img.jpg',
    }
  },

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
