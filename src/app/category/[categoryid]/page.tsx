import ProductCard from '@/app/components/shared/ProductCard';
import { categoryProductPromise } from '@/lib/foods';
import { IProduct } from '@/types/foods';
import { priceBangla } from '@/utils/englishBangla';
import React, { Suspense } from 'react';

const CategoryPage = async ({ params }: { params: Promise<{ categoryid: string }> }) => {
    const { categoryid } = await params
    const { data: products }: { data: IProduct[] } = await categoryProductPromise(categoryid)


    return (
        <section>
            <div className='bg-base-200 rounded-2xl p-5 flex gap-2 items-center'>
                <p className='text-4xl'>
                    {products[0].image}
                </p>
                <div >
                    <h1 className='text-2xl font-bold'>{products[0].categoryNameBn}</h1>
                    <p>{priceBangla(products.length)}টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10'>
                {
                    products.map(product => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </section>
    );
};

export default CategoryPage;