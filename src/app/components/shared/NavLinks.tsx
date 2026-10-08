'use client'

import { ICategory } from '@/types/foods';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLinks = ({ categories }: { categories: ICategory[] }) => {
    const param: string = usePathname()
    const active = (url: string): string => {
        if (param === url) {

            return "bg-primary text-primary-content"
        }
        return ""
    }
    return (
        <div className='flex gap-4 text-lg mt-5'>
            {
                categories.map(category => <Link href={`/category/${category.slug}`} key={category.slug}
                    className={`hover:bg-base-300 rounded-md px-2
                    ${active(`/category/${category.slug}`)}
                    `}>
                    {category.icon} {category.nameBn}
                </Link>)
            }
        </div>
    );
};

export default NavLinks;