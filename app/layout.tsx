import type { Metadata } from "next";
import "./globals.css";

import NavBar from "./components/navbar/NavBar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";

import { Rubik } from 'next/font/google';
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";

const rubik = Rubik({
  weight: ['300', '400'], // You can specify the weights you want (e.g., 400 for normal, 700 for bold)
  subsets: ['latin'], // Choose subsets depending on the characters you need
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
        {/* NavBar should not be in ClientOnly */}
        <NavBar currentUser={currentUser} />

        {/* Wrap only client-side dependent components */}
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <LoginModal />
        </ClientOnly>

        {/* Render the rest of the page content */}
        {children}
      </body>
    </html>
  );
}