
import { Inter } from "next/font/google";
import "../../styles/global.css";
import Sidebar from "@/components/sidebar"
import NextTopLoader from 'nextjs-toploader';
import Header from "@/components/header/Header";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}) {
  return (

 
       <div className="flex min-h-screen w-full bg-slate-100">
      
        <div className="flex flex-col w-full h-full mr-64" style={{ direction: 'rtl' }}>  
          <Header />
          <div className="p-4">
            {children}
          </div>
        </div>
        <Sidebar />
      </div>


  );
}

