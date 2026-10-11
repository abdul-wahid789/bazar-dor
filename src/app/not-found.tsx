import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: "ত্রুটি | বাজার দর",
  description: "আপনার অনুরোধের URL অকার্যকর।",
};



export default function NotFound() {
    return (
        <section className="min-h-[75vh] flex flex-col items-center justify-center px-4 text-center">
            <h1 className="text-9xl font-black text-primary/10 select-none">
                404
            </h1>

            <h2 className="text-2xl lg:text-3xl font-bold mt-4 mb-2 text-base-content">
                পেজটি খুঁজে পাওয়া যায়নি!
            </h2>

            <p className="text-sm lg:text-base text-base-content/60 max-w-md mx-auto mb-8">
                দুঃখিত, আপনি যে পেজটি খুঁজছেন তা হয়তো মুছে ফেলা হয়েছে, নাম পরিবর্তন করা হয়েছে অথবা সাময়িকভাবে অনুপলব্ধ।
            </p>


            <Link href="/">
                <button className="btn btn-primary shadow-primary/30 shadow-md rounded-full px-8">
                    হোম পেজে ফিরে যান
                </button>
            </Link>
        </section>
    );
}