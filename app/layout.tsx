import type { Metadata } from "next";
import Animate from "@/components/animated-gradient-background";
import { Onest } from "next/font/google";
import "./globals.css";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const onest = Onest({ weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stock Blox Fruits",
  icons: "/blox.png",
  description:
    "Consulta en tiempo real el stock de frutas de Blox Fruits normal y Mirage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${onest.className} antialiased relative min-h-screen bg-black text-white`}
      >
        {/* Fondo animado */}
        <Animate />

        {/* Barra fija arriba */}
        <header className="fixed top-0 left-0 w-full bg-transparent bg-opacity-90 backdrop-blur-sm z-50 flex items-center p-3">
          <Image src={"/logo.png"} width={200} height={100} alt="logo"></Image>
        </header>

        {/* Espacio para que el contenido no quede tapado por la barra fija */}
        <div className="pt-14" />

        {children}
      </body>
    </html>
  );
}
