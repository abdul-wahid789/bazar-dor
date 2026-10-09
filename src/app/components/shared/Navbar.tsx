import Image from 'next/image';
import Link from 'next/link';
import React, { Suspense } from 'react';
import Logo from '/public/logo-icon.png'
import TodayDate from './TodayDate';
import NavLinks from './NavLinks';
import { categoriesPromise, productsPromise } from '@/lib/foods';
import PriceSummery from './PriceSummery';
import { useSession } from '@/lib/auth-client';
import SessionUser from './SessionUser';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

const Navbar = async () => {

    const { data: categories } = await categoriesPromise()
    const { data: products } = await productsPromise()


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
                            <div className='text-xs lg:text-sm text-black/50'><TodayDate /></div>

                        </div>
                    </div>
                </Link>

                <SessionUser />

            </div>
            {/* links  */}
            <NavLinks categories={categories} />
            <PriceSummery products={products} />
        </nav>
    );
};

export default Navbar;