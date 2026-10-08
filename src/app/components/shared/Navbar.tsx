import Image from 'next/image';
import Link from 'next/link';
import React, { Suspense } from 'react';
import Logo from '/public/logo-icon.png'
import TodayDate from './TodayDate';
import NavLinks from './NavLinks';
import { categoriesPromise, productsPromise } from '@/lib/foods';
import PriceSummery from './PriceSummery';

const Navbar = async () => {

    const { data: categories } = await categoriesPromise()
    const { data: products } = await productsPromise()

    return (
        <nav className='container mx-auto my-5'>
            <div className="navbar bg-base-100">
                <Link href='/' className="flex-1">
                    <div className='flex gap-3'>
                        <div className='bg-primary rounded-2xl
                                         flex items-center px-2
                                         justify-center text-2xl'>
                            🛒
                        </div>
                        <div>
                            <div className="block text-xl"><h1 className='text-lg font-bold'>বাজার দর</h1></div>
                            <div className='text-sm text-black/50'><TodayDate /></div>

                        </div>
                    </div>
                </Link>

                <div className='flex gap-2'>
                    <button className='btn btn-ghost'>সাইন ইন</button>
                    <button className='btn btn-primary shadow-primary shadow-md'>সাইন আপ</button>
                </div>

                {/* <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">



                        </div>
                    </div>

                </div> */}
                {/* <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div> */}
                {/* </div> */}





            </div>
            {/* links  */}
            <NavLinks categories={categories} />
            <PriceSummery products={products} />
        </nav>
    );
};

export default Navbar;