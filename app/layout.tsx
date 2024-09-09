import { Nunito } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

import NavBar from "./components/navbar/NavBar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";

export const metadata: Metadata = {
  title: "BahayKubo",
  description: "An Airbnb Clone inspired by the Philippines",
};

const font = Nunito({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <RegisterModal/>
          <NavBar/>
        </ClientOnly>
        {children}
        </body>
    </html>
  );
}
