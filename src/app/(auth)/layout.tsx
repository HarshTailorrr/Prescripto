import { Inter, Outfit } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({
  subsets:["latin"],
  variable:"--font-inter",
})

const outfit = Outfit({
  variable : "--font-outfit",
  subsets:["latin"]
})

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${inter.className} ${outfit.className} antialiased`}
      >
       {children}
      </body>
    </html>
  );
}
