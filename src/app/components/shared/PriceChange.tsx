import { Change } from '@/types/foods';
import { priceBangla } from '@/utils/englishBangla';
import React from 'react';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { GoDash } from 'react-icons/go';

const PriceChange = ({ change }: { change: Change }) => {
    return (
        <span className=''>
            {
                change.dir === "up" &&
                <span className='text-error flex items-center  gap-1'>
                    <FaCaretUp /> {priceBangla(change.pct)} %
                </span>

            }
            {
                change.dir === 'down' &&
                <span className='text-primary flex items-center gap-1'>
                    <FaCaretDown /> {priceBangla(change.pct)} %
                </span>
            }
            {
                change.dir === "flat" &&
                <span className='flex items-center gap-1'>
                    <GoDash />{priceBangla(change.pct)} %
                </span>
            }



        </span>
    );
};

export default PriceChange;