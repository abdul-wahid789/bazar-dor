import CategoryProduct from '@/app/components/category/CategoryProduct';
import TryAgain from '@/app/components/error/TryAgain';
import { categoryProductPromise } from '@/lib/foods';
import { IProduct } from '@/types/foods';
import { priceBangla } from '@/utils/englishBangla';
import { Metadata } from 'next';
import React from 'react';


export async function generateMetadata({ params }:
    { params: Promise<{ categoryid: string }>}): Promise<Metadata> {
    const { categoryid } = await params;

    const { data: products, error } = await categoryProductPromise(categoryid);

    if (error) {
        return { title: 'খুঁজে পাওয়া যায়নি | বাজার দর' };
    }
    return {
        title: `${products[0].categoryNameBn} | বাজার দর`,
        description: `আজকের বাজারে ${products[0].categoryNameBn} এর বিস্তারিত দাম দেখুন।`,
    };
}

const CategoryPage = async ({ params }: { params: Promise<{ categoryid: string }> }) => {
    const { categoryid } = await params
    const { data: products, error }: { data: IProduct[], error: string } = await categoryProductPromise(categoryid)

    if (error) {
        return <TryAgain />
    } else {
        return (
            <section className='space-y-10'>
                <div className='bg-base-200 rounded-2xl p-5 flex gap-2 items-center'>
                    <p className='text-4xl'>
                        {products[0].image}
                    </p>
                    <div >
                        <h1 className='text-2xl font-bold'>{products[0].categoryNameBn}</h1>
                        <p>{priceBangla(products.length)}টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                    </div>
                </div>

                <CategoryProduct products={products} />
            </section>
        );
    }
};

export default CategoryPage;