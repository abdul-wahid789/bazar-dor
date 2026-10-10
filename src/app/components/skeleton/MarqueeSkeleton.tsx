import React from 'react';

const MarqueeSkeleton = () => {
    const skeletons = Array.from({ length: 5 });

    return (
        <div className='py-2 mt-3 h-11 bg-base-200 rounded-md flex items-center gap-8 overflow-hidden px-4'>
            {
                skeletons.map((_, index) => (
                    <div key={index} className='d-skeleton bg-primary/10 flex gap-2 items-center shrink-0 w-48 h-5'>
                        {/* <div className='d-skeleton h-5 w-5 rounded-full' />
                        <div className='d-skeleton h-4 w-full rounded' />
                        <div className='d-skeleton h-5 w-12 rounded-xl' /> */}
                    </div>
                ))
            }
        </div>
    );
};

export default MarqueeSkeleton;