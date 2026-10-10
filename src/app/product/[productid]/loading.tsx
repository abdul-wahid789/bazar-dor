import React from 'react';

const ProductDetailsSkeleton = () => {
    return (
        <section className='space-y-10'>
            <div className='d-skeleton bg-primary/10 flex gap-2 items-center h-5 w-50 rounded-2xl'>
            </div>

            {/* Header Card Skeleton */}
            {/* Replaced bg-base-200 with bg-primary/10 */}
            <div className='bg-base-200 rounded-2xl p-2 lg:p-8 flex justify-between'>
                <div className='flex items-center gap-3'>
                    {/* Image icon skeleton */}
                    <div className='d-skeleton bg-primary/10 p-2 lg:p-5 h-16 w-16 lg:h-[84px] lg:w-[84px] rounded-2xl'></div>
                    <div className='space-y-2 lg:space-y-3'>
                        {/* Title */}
                        <div className='d-skeleton bg-primary/10 h-6 lg:h-8 w-15 lg:w-48 rounded'></div>
                        {/* Subtitle */}
                        <div className='d-skeleton bg-primary/10 h-3 lg:h-4 w-18 lg:w-56 rounded'></div>
                        {/* Price diff text */}
                        <div className='d-skeleton bg-primary/10 h-3 lg:h-4 w-14 lg:w-64 rounded'></div>
                    </div>
                </div>

                {/* Today's Price Box Skeleton */}
                <div className='bg-primary/10 p-3 rounded-2xl flex flex-col items-center justify-center gap-2 w-20 lg:w-48'>
                    {/* <div className='d-skeleton h-3 lg:h-4 w-16 lg:w-20 rounded'></div>
                    <div className='d-skeleton h-8 lg:h-10 w-24 lg:w-32 rounded'></div>
                    <div className='d-skeleton h-3 lg:h-4 w-20 lg:w-24 rounded'></div>
                    <div className='d-skeleton h-3 lg:h-4 w-16 lg:w-20 rounded'></div> */}
                </div>
            </div>

            {/* All Info Section Skeleton */}
            <div className='bg-base-200 p-5 rounded-2xl space-y-10'>

                {/* Summary Cards */}
                <div>
                    <div className='d-skeleton bg-primary/10 h-8 w-40 rounded mb-4'></div>
                    <div className='grid grid-cols-3 gap-2 items-center'>
                        {/* Generate 3 skeleton cards */}
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className='d-skeleton bg-primary/10 border border-black/10  rounded-2xl h-25 w-auto p-2 lg:p-5 flex flex-col gap-2'>

                            </div>
                        ))}
                    </div>
                </div>

                {/* Market Price Table Skeleton */}
                <div>
                    <div className='d-skeleton h-8 w-56 rounded mb-4'></div>
                    <div className="overflow-x-auto">
                        <table className="table text-lg border-black/10 border w-full">
                            <thead>
                                <tr>
                                    <th><div className='d-skeleton h-5 w-16 rounded'></div></th>
                                    <th><div className='d-skeleton h-5 w-16 rounded'></div></th>
                                    <th><div className='d-skeleton h-5 w-20 rounded'></div></th>
                                    <th><div className='d-skeleton h-5 w-20 rounded'></div></th>
                                    <th><div className='d-skeleton h-5 w-16 rounded'></div></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Generate 5 skeleton rows */}
                                {[...Array(5)].map((_, rowIndex) => (
                                    <tr key={rowIndex} className='even:bg-primary/5'>
                                        <td><div className='d-skeleton h-5 w-20 lg:w-24 rounded'></div></td>
                                        <td><div className='d-skeleton h-5 w-16 lg:w-20 rounded'></div></td>
                                        <td><div className='d-skeleton h-5 w-16 lg:w-20 rounded'></div></td>
                                        <td><div className='d-skeleton h-5 w-16 lg:w-20 rounded'></div></td>
                                        <td><div className='d-skeleton h-5 w-16 lg:w-20 rounded'></div></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProductDetailsSkeleton;