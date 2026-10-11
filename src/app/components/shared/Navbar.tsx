import Link from 'next/link';
import React, { Suspense } from 'react';
import TodayDate from './TodayDate';
import NavLinks from './NavLinks';
import PriceSummery from './PriceSummery';
import SessionUser from './SessionUser';
import NavLinkSkeleton from '../skeleton/NavLinkSkeleton';
import MarqueeSkeleton from '../skeleton/MarqueeSkeleton';

const Navbar = () => {
    return (
        <nav className='container mx-auto my-5 px-5'>
            <div className="navbar bg-base-100">
                <Link href='/' className="flex-1">
                    <div className='flex gap-3'>
                        <div className='bg-primary rounded-2xl
                                         flex items-center px-1 py-1 lg:px-2
                                         justify-center text-lg lg:text-2xl'>
                            🛒
                        </div>
                        <div>
                            <div className="block text-xl"><h1 className='text-lg font-bold'>বাজার দর</h1></div>
                            <div className='text-xs lg:text-sm font-light text-black/50'><TodayDate /></div>

                        </div>
                    </div>
                </Link>

                <SessionUser />

            </div>
            {/* links  */}
            <Suspense fallback={<NavLinkSkeleton />}>
                <NavLinks />
            </Suspense>



            <Suspense fallback={<MarqueeSkeleton />}>
                <PriceSummery />
            </Suspense>

        </nav>
    );
};

export default Navbar;