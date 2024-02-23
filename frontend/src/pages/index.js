import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
          <h1 className={`m-0 text-9xl max-w-[30ch] text-sm opacity-100 text-balance`}>
            Title
          </h1>
        
      
    </main>
  );
}
