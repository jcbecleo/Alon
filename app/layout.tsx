import type { Metadata } from "next";
import "./globals.css";

import NavBar from "./components/navbar/NavBar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";

import { Rubik } from 'next/font/google';
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/modals/RentModal";

const rubik = Rubik({
  weight: ['300', '400'],   
  subsets: ['latin'], 
});

export const metadata: Metadata = {
  title: "bahaykubo",
  description: "An Airbnb Clone inspired by the Philippines",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={rubik.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <RentModal /> 
          <LoginModal />
          <NavBar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}