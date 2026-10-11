import { IProduct } from '@/types/foods';
import { priceBangla, unitBangla } from '@/utils/englishBangla';
import React from 'react';
import PriceChange from './PriceChange';
import Link from 'next/link';

const ProductCard = ({ product }: { product: IProduct }) => {
    return (
        <Link href={`/product/${product.id}`} className='block bg-base-200 p-5 rounded-2xl ring-primary hover:ring hover:shadow shadow-primary hover:transform transition duration-50 ease-in-out'>
            <div className='flex gap-2'>
                <div className='text-lg bg-primary/5 h-fit p-2 rounded-md flex items-center'>
                    {product.image}
                </div>
                <div>
                    <h2 className='text-lg font-semibold'>{product.nameBn}</h2>
                    <p>প্রতি {unitBangla(product.unit)}</p>
                </div>
            </div>
            <div className='mt-3 flex justify-between'>
                <div>
                    <p>আজকের দাম</p>
                    <h2><span className='font-light text-lg'>{priceBangla(product.today)}</span> টাকা</h2>
                </div>
                <div className='bg-primary/5 rounded-2xl h-fit p-1 font-bold'>
                    <PriceChange change={product.change} />
                </div>
            </div>

        </Link>
    );
};

export default ProductCard;