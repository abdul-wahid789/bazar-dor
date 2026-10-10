import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import Loading from "./loading";

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700"],
});


export const metadata: Metadata = {
  title: "বাজার দর",
  description: "Bazar Dor web app where daily prices are shown and the changes",
};

export default function RootLayout({ children }: LayoutProps<"/">) {

  return (
    <html
      lang="en"
      data-theme="bazar-dor"
      className={`${hindSiliguri.className} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col">

        {/* <Loading /> */}

        <Navbar />
        <main className="container mx-auto px-5 grow">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
