'use client'

import { IProduct } from '@/types/foods';
import { priceBangla } from '@/utils/englishBangla';
import React, { useState } from 'react';
import ProductCard from '../shared/ProductCard';

const CategoryProduct = ({ products }: { products: IProduct[] }) => {

    const [filterProducts, setFilterProducts] = useState<IProduct[]>(products)
    const [sortValue, setSortValue] = useState<'low' | 'high' | 'default'>('default')

    const sortHandel = (value: string) => {
        const newValue = value as 'low' | 'high' | 'default';
        setSortValue(newValue);

        if (newValue === 'default') {
            setFilterProducts(products);
        } else {
            const sorted = [...products].sort((a, b) => {
                if (newValue === 'high') return b.today - a.today;
                if (newValue === 'low') return a.today - b.today;
                return 0;
            });
            setFilterProducts(sorted);
        }
    };

    return (
        <>
            <div className='bg-base-200 rounded-2xl p-5 flex flex-col lg:flex-row gap-4 items-center justify-between'>
                <p>মোট {priceBangla(filterProducts.length)}টি পণ্য দেখানো হচ্ছে</p>

                <div className='flex items-center gap-3'>
                    <span>সাজান</span>

                    <select
                        value={sortValue}
                        onChange={(e) => sortHandel(e.target.value)}
                        className="select select-primary rounded-2xl w-50 min-h-0 h-auto py-2.5"
                    >
                        <option className='hover:bg-primary hover:text-primary-content' value="default">ডিফল্ট</option>
                        <option className='hover:bg-primary hover:text-primary-content' value="low">দাম: কম থেকে বেশি</option>
                        <option className='hover:bg-primary hover:text-primary-content' value="high">দাম: বেশি থেকে কম</option>
                    </select>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    filterProducts.map(product => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </>
    );
};

export default CategoryProduct;