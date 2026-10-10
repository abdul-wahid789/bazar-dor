import React from 'react';

const NavLinkSkeleton = () => {
    const skeletons = Array.from({ length: 5 });

    return (
        // Matches your original container classes (assuming 'ga-0.5' was meant to be 'gap-1' or 'gap-2')
        <div className='flex gap-2 lg:gap-4 lg:text-lg mt-5 text-xs'>
            {
                skeletons.map((_, index) => (
                    <div
                        key={index}
                        // Applies the requested skeleton class, background color, and matches the button dimensions
                        className="d-skeleton bg-primary/10 rounded-md h-6 w-16 lg:h-8 lg:w-24 shrink-0"
                    ></div>
                ))
            }
        </div>
    );
}
export default NavLinkSkeleton;