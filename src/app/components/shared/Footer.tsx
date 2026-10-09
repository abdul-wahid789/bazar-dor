import React from 'react';

const Footer = () => {
    return (
        <footer className=' bg-base-200 py-10 mt-10'>
            <div className='container mx-auto px-5 flex flex-col text-xs gap-2 text-center lg:flex-row lg:text-base justify-between text-black/50'>
                <p>বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</p>
                <p>সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।</p>
            </div>
        </footer>
    );
};

export default Footer;