import React from 'react';

const ProductSkeleton = () => {
    return (
        <div className='block bg-base-200 p-5 rounded-2xl w-full'>
            <div className='flex gap-2'>
                <div className='bg-primary/5 h-fit p-2 rounded-md flex items-center'>
                    <div className='d-skeleton bg-primary/10 h-7 w-7 rounded' />
                </div>


                <div className='flex flex-col gap-2 pt-1'>
                    <div className='d-skeleton bg-primary/10 h-5 w-32' />
                    <div className='d-skeleton bg-primary/10 h-4 w-20' />
                </div>
            </div>



            <div className='mt-3 flex justify-between items-end'>
                <div className='flex flex-col gap-2'>
                    <div className='d-skeleton bg-primary/10 h-4 w-16' />
                    <div className='d-skeleton bg-primary/10 h-6 w-24' />
                </div>
                <div className='d-skeleton bg-primary/10 rounded-2xl h-6 w-16'>
                </div>
            </div>
        </div>
    );
};

export default ProductSkeleton;