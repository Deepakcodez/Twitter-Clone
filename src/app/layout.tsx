import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {GoogleOAuthProvider} from '@react-oauth/google'
const inter = Inter({ subsets: ["latin"] });
import  { Toaster } from 'react-hot-toast';
export const metadata: Metadata = {
  title: "Twitter-Clone",
  description: " ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleOAuthProvider clientId="201924123219-312uelub9t1sf2t53s0mrhd9m09i13bi.apps.googleusercontent.com">

        {children}
        <Toaster/>
        </GoogleOAuthProvider>
        </body>
    </html>
  );
}
