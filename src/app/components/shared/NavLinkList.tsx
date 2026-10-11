'use client'

import { ICategory } from '@/types/foods';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLinkList = ({ categories }: { categories: ICategory[] }) => {

    const param: string = usePathname();
    const active = (url: string): string => {
        if (param === url) {
            return "!bg-primary text-primary-content"
        }
        return ""
    }

    return (
        <>
            {
                categories.map(category => <Link href={`/category/${category.slug}`} key={category.slug}
                    className={`hover:bg-base-300 mx-auto rounded-md px-2 py-1 bg-base-200 lg:bg-transparent flex flex-col lg:flex-row items-center
                    ${active(`/category/${category.slug}`)}
                    `}>
                    <span>
                        {category.icon}
                    </span>
                    <span>
                        {category.nameBn}
                    </span>
                </Link>)
            }
        </>
    );
};

export default NavLinkList;