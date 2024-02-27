import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-left justify-between p-24 ${inter.className}`}
    >
      <h1 className={`m-0 text-9xl max-w-[30ch] text-lg opacity-100 text-balance`}>
      Title
      </h1>
      <p className={'flex min-h-screen text-sm opacity-90' }>
      This is a related paragraph of text!
      </p>
      <ol type="1">
        <li>First</li>
        <li>Second</li>
        <li>Third</li>
      </ol>
    </main>
  );
}
