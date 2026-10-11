import { categoriesPromise } from '@/lib/foods';
import React from 'react';
import NavLinkList from './NavLinkList';

const NavLinks = async () => {
    const { data: categories } = await categoriesPromise()
    return (
        <div className='flex gap-0.5 lg:gap-4 lg:text-lg mt-5 text-xs'>
            <NavLinkList categories={categories} />
        </div>
    );
};

export default NavLinks;