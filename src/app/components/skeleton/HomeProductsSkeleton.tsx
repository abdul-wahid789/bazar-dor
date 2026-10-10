import React from 'react';
import ProductSkeleton from './ProductSkeleton';

export default function HomeProductsSkeleton() {
    const skeletons = Array.from({ length: 6 });

    return (
        <div className="w-full">
            {/* Up Products Skeleton Area */}
            <section className="my-15 w-full">
                <div className='mb-5 flex gap-2 items-center'>
                    <div className="d-skeleton bg-primary/5  h-8 w-48" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {skeletons.map((_, index) => <ProductSkeleton key={index} />)}
                </div>
            </section>

            {/* Down Products Skeleton Area */}
            {/* <section className="my-15 w-full">
                <div className='mb-5 flex gap-2 items-center'>
                    <div className="skeleton w-6 h-6 rounded-full" />
                    <div className="skeleton h-8 w-48" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {skeletons.map((_, index) => <ProductSkeleton key={`down-skel-${index}`} />)}
                </div>
            </section> */}

            {/* All Products Skeleton Area */}
            {/* <section className="my-15 w-full">
                <div className='mb-2 flex gap-2 items-center'>
                    <div className="skeleton h-8 w-32" />
                </div>
                <div className="skeleton h-4 w-48 mb-5" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {skeletons.map((_, index) => <ProductSkeleton key={`all-skel-${index}`} />)}
                </div>
            </section> */}

            {/* <div className="skeleton h-20 w-20 rounded-lg"></div> */}
        </div>
    );
}