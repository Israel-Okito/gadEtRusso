import { Inter } from "next/font/google";
import "./globals.css";
import Dashboard from "@/components/Dashboard";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "russo et gad ",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={inter.className} >
         <div className="grid grid-cols-12 max-md:relative bg-black    h-screen max-h-screen">
         {/* j'ai utiliser le shadcn ui sheet pour faire le sidebar responsive */}
         <div  className="h-screen max-h-screen   border-r-[1px] col-span-2 z-10  max-md:hidden " >
           <Dashboard/>
         </div>
      
        <main className="col-span-10 bg-black  max-md:col-span-12 overflow-y-auto">
            {children}
        </main>
      </div>
      </body>
    </html>
  );
}
