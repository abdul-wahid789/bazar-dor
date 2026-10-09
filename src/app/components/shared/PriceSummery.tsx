import { IProduct } from '@/types/foods';
import { priceBangla, unitBangla } from '@/utils/englishBangla';
import Link from 'next/link';
import React from 'react';
import Marquee from 'react-fast-marquee';
import PriceChange from './PriceChange';

const PriceSummery = ({ products }: { products: IProduct[] }) => {

    return (
        <Marquee pauseOnHover={true} speed={100} className='py-2 mt-3 text-sm bg-base-200 rounded-md'>
            {
                products.map(product => <Link className='flex' key={product.id} href={`/product/${product.id}`}>
                    <div className='px-3 flex gap-1'>
                        <span>{product.categoryIcon}
                            <span className='font-semibold'>
                                {` ${product.nameBn} `}
                            </span>
                            {`${priceBangla(product.today)} টাকা/${unitBangla(product.unit)}`}
                        </span>
                        <PriceChange change={product.change} />
                    </div>
                </Link>)
            }

        </Marquee>
    );
};

export default PriceSummery;