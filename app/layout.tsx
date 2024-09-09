import type { Metadata } from "next";
import "./globals.css";

import NavBar from "./components/navbar/NavBar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";

export const metadata: Metadata = {
  title: "BahayKubo",
  description: "An Airbnb Clone inspired by the Philippines",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientOnly>
          <RegisterModal />
          <NavBar/>
        </ClientOnly>
        {children}
        </body>
    </html>
  );
}
