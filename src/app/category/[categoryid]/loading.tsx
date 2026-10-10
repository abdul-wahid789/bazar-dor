import ProductSkeleton from '@/app/components/skeleton/ProductSkeleton';
import React from 'react';

export default function CategoryLoading() {
    const skeletons = Array.from({ length: 6 });
    return (
        <section className='space-y-10'>

            <div className='bg-base-200 rounded-2xl p-5 flex gap-3 items-center'>
                <div className='d-skeleton bg-primary/10 h-10 w-10 shrink-0 rounded-lg' />

                <div className="flex flex-col gap-2">
                    <div className='d-skeleton bg-primary/10 h-8 w-48 rounded' />
                    <div className='d-skeleton bg-primary/10 h-5 w-64 rounded' />
                </div>
            </div>

            <div>
                <div className='bg-base-200 rounded-2xl p-5 mb-5 flex flex-col lg:flex-row gap-4 items-center justify-between'>
                    <div className="d-skeleton bg-primary/10 h-6 w-56 rounded" />

                    <div className='flex items-center gap-3'>
                        <div className="d-skeleton bg-primary/10 h-5 w-12 rounded" />
                        <div className="d-skeleton bg-primary/10 rounded-2xl w-48 h-10" />
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                    {skeletons.map((_, index) => (
                        <ProductSkeleton key={index} />
                    ))}
                </div>
            </div>

        </section>
    );
}