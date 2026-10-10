import Link from 'next/link';
import React, { Suspense } from 'react';
import TodayDate from './TodayDate';
import NavLinks from './NavLinks';
import { categoriesPromise, productsPromise } from '@/lib/foods';
import PriceSummery from './PriceSummery';
import SessionUser from './SessionUser';

const Navbar = async () => {

    const { data: categories } = await categoriesPromise()
    const { data: products, error } = await productsPromise()


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
            <Suspense fallback={<div className="animate-pulse w-32 h-8 bg-base-200 rounded-md"></div>}>
                <NavLinks categories={categories} />
            </Suspense>
            {
                error ? <></>
                    : <PriceSummery products={products} />
            }
        </nav>
    );
};

export default Navbar;