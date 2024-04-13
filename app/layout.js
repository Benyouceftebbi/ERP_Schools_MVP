
import { Inter } from "next/font/google";
import "../styles/global.css";
import NextTopLoader from "nextjs-toploader";
import { AppProvider } from "@/context/AuthContext";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  httpEquiv:"Content-Security-Policy",
  content:"accelerometer 'self'"
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
  
      <body className={inter.className}>
      <NextTopLoader height={200}/>
        <div className="flex min-h-screen w-full bg-slate-100">
        <AppProvider>
            {children}
          </AppProvider>
      
        </div>
      </body>
    </html>
  );
}

