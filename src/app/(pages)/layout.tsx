import type { Metadata } from "next";
import "@/app/globals.css";
import Header from "@/components/header/header";
import {Inter, Outfit} from "next/font/google"
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "Prescripto",
  description: "Medical prescription management platform",
  icons: {
    icon: '/favicon.ico',
  },
};


const inter = Inter({
  subsets:["latin"],
  variable:"--font-inter",
})

const outfit = Outfit({
  variable : "--font-outfit",
  subsets:["latin"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${inter.className} ${outfit.className} antialiased`}
      >
        <Header />
       <div className="mt-7">
       {children}
       </div>
       <Footer />
      </body>
    </html>
  );
}
