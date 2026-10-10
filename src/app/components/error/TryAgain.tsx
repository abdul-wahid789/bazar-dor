'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

const TryAgain = () => {
    const router = useRouter();
    return (
       <section className="w-1/2 mx-auto bg-error/10 p-10 rounded-2xl mt-10 flex flex-col items-center space-y-5">
            <h1 className="text-2xl text-center font-bold text-error">কিছু একটা সমস্যা হয়েছে</h1>
            <button onClick={() => router.refresh()}
             className="btn btn-primary btn-lg">আবার চেষ্টা করুন</button>
        </section>
    );
};

export default TryAgain;