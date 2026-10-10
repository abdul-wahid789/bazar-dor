import { IProduct } from '@/types/foods';
import { priceBangla, unitBangla } from '@/utils/englishBangla';
import Link from 'next/link';
import React from 'react';
import Marquee from 'react-fast-marquee';
import PriceChange from './PriceChange';
import { productsPromise } from '@/lib/foods';
import { div } from 'framer-motion/client';

const PriceSummery = async () => {
    const { data: products, error } = await productsPromise()
    const arr = new Array(6).fill(null);
    return (
        <Marquee pauseOnHover={true} speed={100} className='py-2 mt-3 text-sm bg-base-200 rounded-md'>
            {
                error ? (
                    arr.map((x, i) => <span  key={i} className='text-error px-3 flex gap-1'>
                        কিছু একটা সমস্যা হয়েছে, তাই দাম দেখানো যাচ্ছে না</span>)
                )
                    :
                    (products.map(product => <Link className='flex' key={product.id} href={`/product/${product.id}`}>
                        <div className='px-3 flex gap-1'>
                            <span>{product.categoryIcon}
                                <span className='font-semibold'>
                                    {` ${product.nameBn} `}
                                </span>
                                {`${priceBangla(product.today)} টাকা/${unitBangla(product.unit)}`}
                            </span>
                            <PriceChange change={product.change} />
                        </div>
                    </Link>))
            }

        </Marquee>
    );
};

export default PriceSummery;