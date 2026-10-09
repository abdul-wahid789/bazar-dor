import React from 'react';
import TodayDate from '../shared/TodayDate';
import Image from 'next/image';
import BannerImg from "@/assets/bazar-hero.png"




const Banner = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center bg-base-200 p-5 lg:p-15  rounded-2xl">
            <div className="space-y-4 w-full flex flex-col items-center lg:items-start">
                <div className="bg-primary/10 rounded-2xl w-fit text-sm  px-5 py-1
                            text-primary font-bold ">
                    <TodayDate />
                </div>
                <h1 className="text-2xl font-bold text-center lg:text-left">আজকের বাজারের দাম এক নজরে</h1>
                <p className="text-black/50 w-full lg:w-120 text-center lg:text-left">চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
                    বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং
                    দামের পরিবর্তন এক জায়গায়।</p>
                <button className="btn btn-primary btn-lg">সব পণ্য দেখুন</button>
            </div>
            <div>
                <Image src={BannerImg} alt="banner" width={500} height={500}
                    className="w-100 object-contain"></Image>
            </div>
        </div>
    );
};


export default Banner;
