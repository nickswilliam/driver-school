import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header/Header";
import HeaderContact from "@/components/Header/HeaderContact";
import "animate.css";
import Footer from "@/components/Footer/Footer";
import { ModalContextProvider } from "@/context/ModalContext";
import { ChakraProvider } from "@chakra-ui/react";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Academia de Manejo",
  description: "Driving academy for women by women.",
  icons: {
    icon: "/src/assets/logo/logo.svg"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <ModalContextProvider>
          <ChakraProvider>
            <HeaderContact />
            <Header />
            {children}
            <Footer />
          </ChakraProvider>
        </ModalContextProvider>
      </body>
    </html>
  );
}
